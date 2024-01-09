import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Projects() {
    return (
        <div className={inter.className}>
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
