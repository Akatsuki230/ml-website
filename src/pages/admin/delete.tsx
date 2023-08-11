import { sql } from "@vercel/postgres";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import React from "react";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    const token = ctx.req.cookies.token;
    if (!token) return { redirect: { destination: '/', permanent: false } };
    if (token !== process.env.ADMIN_PASSWORD) {
        ctx.res.setHeader('Set-Cookie', `token=; path=/; max-age=0; samesite=strict; secure`);
        return { redirect: { destination: '/admin/login#bad', permanent: false } };
    }

    let {id, confirm} = ctx.query as {id: string, confirm: string};
    if (!id) return { redirect: { destination: '/admin', permanent: false } };
    const redirect = (await sql`SELECT * FROM redirects WHERE id = ${id}`).rows[0];
    if (!redirect) return { redirect: { destination: '/admin', permanent: false } };
    if (!confirm) confirm = '0';
    if (confirm === '1') {
        await sql`DELETE FROM redirects WHERE id = ${id}`;
    }
    return { props: { redirect: {
        id: redirect.id,
        url: redirect.url,
        label: redirect.label,
        views: redirect.views
    }, deleted: confirm === '1' } };
}

interface AdminPropertiesProps {
    redirect: {
        id: string;
        url: string;
        label: string;
        views: number;
    },
    deleted: boolean
}

export default function AdminDeleteRedirect(props: AdminPropertiesProps) {

    async function performDelete() {
        window.location.href = `/admin/delete?id=${props.redirect.id}&confirm=1`;
    }

    function performBack() {
        window.location.href = `/admin/properties?id=${props.redirect.id}`;
    }

    return (
        <main className="max-w-3xl mx-auto">
            {
                props.deleted ? (
                    <>
                        <Head>
                            <meta httpEquiv="refresh" content="1;url=/admin" />
                        </Head>
                        <h1>Deleted!</h1>
                    </>
                ) : (
                    <>
                        <h1 className="text-2xl font-bold mb-4">Are you sure you want to delete {props.redirect.label}?</h1>
                        <div className="flex space-x-4">
                            <button className="bg-red-800 hover:bg-red-500 active:bg-red-700 px-2 py-1 rounded-lg" onClick={performDelete}>Yes</button>
                            <button className="bg-green-800 hover:bg-green-500 active:bg-green-700 px-2 py-1 rounded-lg" onClick={performBack}>No</button>
                        </div>
                    </>
                )
            }
        </main>
    )
}