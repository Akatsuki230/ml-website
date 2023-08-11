import { sql } from "@vercel/postgres";
import { GetServerSidePropsContext } from "next";


export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    const token = ctx.req.cookies.token
    if (!token) return { redirect: { destination: '/admin/login', permanent: false } }
    if (token !== process.env.ADMIN_PASSWORD) {
        ctx.res.setHeader('Set-Cookie', `token=; path=/; max-age=0; samesite=strict; secure`)
        return { redirect: { destination: '/admin/login#bad', permanent: false } }
    }

    let redirects = (await sql`SELECT * FROM redirects`)
        .rows
        .map((row: any) => {
            return {
                id: row.id,
                url: row.url,
                label: row.label,
                views: row.views,
                type: row.type
            }
        })
    return { props: { redirects } }
}

interface AdminProps {
    redirects: {
        id: string;
        url: string;
        label: string;
        views: number;
        type: string;
    }[]
}

export default function AdminIndex(props: AdminProps) {

    function create() {
        window.location.href = '/admin/create';
    }

    function signOut() {
        document.cookie = `token=; path=/; max-age=0; samesite=strict; secure`;
        window.location.href = '/admin/login';
    }

    return (
        <main>
            <h1 className="ml-4 mt-4 text-3xl font-bold">Admin page</h1>
            <button onClick={create} className="bg-gray-800 hover:bg-gray-600 active:bg-gray-700 px-2 py-1 ml-2 mt-2 rounded-lg">Create a redirect</button>
            <button onClick={signOut} className="bg-gray-800 hover:bg-gray-600 active:bg-gray-700 px-2 py-1 ml-2 mt-2 rounded-lg">Sign out</button>
            <h2 className="ml-4 mt-2">List of redirects</h2>
            <table className="w-full">
                <thead>
                    <tr className="bg-gray-900">
                        <th className="w-1/5 py-2">ID</th>
                        <th className="w-1/5 py-2">Label</th>
                        <th className="w-1/5 py-2">Views</th>
                        <th className="w-1/5 py-2">Type</th>
                        <th className="w-1/5 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.redirects.map((redirect) => {
                        function openProperties() {
                            window.location.href = `/admin/properties?id=${redirect.id}`;
                        }

                        function openLink() {
                            window.location.href = redirect.url;
                        }

                        function deleteLink() {
                            window.location.href = `/admin/delete?id=${redirect.id}`;
                        }

                        return (
                            <tr key={redirect.id}>
                                <td className="py-2 text-center">{redirect.id}</td>
                                <td className="py-2 text-center">{redirect.label}</td>
                                <td className="py-2 text-center">{redirect.views}</td>
                                <td className="py-2 text-center">{redirect.type}</td>
                                <td className="py-2 text-center">
                                    <button onClick={openProperties} className="bg-gray-800 hover:bg-gray-600 active:bg-gray-700 px-2 py-1 rounded-lg">Properties</button>
                                    <br/>
                                    <button onClick={openLink} className="ml-1 bg-gray-800 hover:bg-gray-600 active:bg-gray-700 px-2 py-1 rounded-lg">Open Link</button>
                                    <br/>
                                    <button onClick={deleteLink} className="ml-1 bg-red-800 hover:bg-red-600 active:bg-red-700 px-2 py-1 rounded-lg">Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </main>
    )
}