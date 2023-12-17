import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Projects() {
    return (
        <div className={inter.className}>
            <Head>
                <title>mldkyt's pronouns</title>
                <meta name="og:title" content="mldkyt's pronouns" />
                <meta name="description" content="mldkyt's pronouns." />
                <meta name="theme-color" content="#FF77FF" />
                <meta httpEquiv="refresh" content="0; url=/pronouns" />
            </Head>
        </div>
    );
}
