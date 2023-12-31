import { GetServerSidePropsContext } from "next";
import Head from "next/head";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    let data = await (await fetch(`${process.env.FIREBASE_URL}/ml-website/socialbuttons.json`)).json();
    if (data === null) data = {};
    if (!data.ytClicks) {
        data.ytClicks = 1;
    } else {
        data.ytClicks++;
    }

    await fetch(`${process.env.FIREBASE_URL}/ml-website/socialbuttons.json`, {
        method: "PUT",
        body: JSON.stringify(data)
    });

    return {
        props: {}
    };
}

export default function YouTube() {
    return (
        <Head>
            <meta httpEquiv="refresh" content="0; url=https://youtube.com/@mldkyt" />
        </Head>
    );
}
