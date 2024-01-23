import { GetServerSidePropsContext } from "next";
import Head from "next/head";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    let data = await (await fetch(`${process.env.FIREBASE_URL}/ml-website/socialbuttons.json`)).json();
    if (data === null) data = {};
    if (!data.patreonClicks) {
        data.patreonClicks = 1;
    } else {
        data.patreonClicks++;
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
            <meta httpEquiv="refresh" content="0; url=https://patreon.com/mldkyt" />
        </Head>
    );
}
