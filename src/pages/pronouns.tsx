import {Inter} from "next/font/google";
import Head from "next/head";
import {Container} from "react-bootstrap";
import FinalNavbar from "@/components/NavBar";

const inter = Inter({subsets: ["latin"]});

export default function Projects() {
    return (
        <div className={inter.className}>
            <Head>
                <title>mldkyt's pronouns</title>
                <meta name="og:title" content="mldkyt's pronouns"/>
                <meta name="description" content="mldkyt's pronouns."/>
                <meta name="theme-color" content="#FF77FF"/>
                <script async
                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187"
                        crossOrigin="anonymous"></script>
            </Head>

            <FinalNavbar />

            <Container>
                <h1>
                    Programmer Astolfo's pronouns
                </h1>
                <h2>Calling me</h2>
                <ul>
                    <li>❤️ mldkyt</li>
                    <li>❤️ mld</li>
                    <li>👍 mldk</li>
                </ul>
                <h2>Pronouns</h2>
                {/*<p>❤️ she/her 🏳️‍⚧️</p>*/}
                {/*<p>👍 he/him</p>*/}
                {/*<p>👍 they/them</p>*/}
                <ul>
                    <li>❤️ she/her 🏳️‍⚧️</li>
                    <li>👎 he/him</li>
                    <li>👎 they/them</li>
                </ul>

                <h2>Meaning of these icons: </h2>

                <ul>
                    <li>❤️ Preferable</li>
                    <li>👍 OK</li>
                    <li>👎 no</li>
                </ul>
            </Container>

        </div>
    );
}

