import Head from "next/head";


export default function Projects() {
    return (
        <div>
            <Head>
                <title>mldkyt's projects</title>
                <meta name="og:title" content="mldkyt's projects" />
                <meta name="description" content="mldkyt's projects." />
                <meta name="theme-color" content="#FF77FF" />
                {/* redirect to / */}
                <meta httpEquiv="refresh" content="0; url=/" />
            </Head>
        </div>
    );
}
