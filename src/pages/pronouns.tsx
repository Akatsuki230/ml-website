import {Inter} from "next/font/google";
import Head from "next/head";
import {Container} from "react-bootstrap";
import FinalNavbar from "@/components/NavBar";
import { useEffect, useRef, useState } from "react";

const inter = Inter({subsets: ["latin"]});

export default function Projects() {
    const [timeout, _setTimeout] = useState(5);
    const hasRan = useRef(false);
    useEffect(() => {
        if (hasRan.current) return;
        hasRan.current = true;

        let cooldown = 4;
        setInterval(() => {
            _setTimeout(cooldown);
            cooldown--;
            if (cooldown === 0) {
                location.href = 'https://en.pronouns.page/@mldkyt';
            }
        }, 1000);
    })

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
                <h1>Pronouns</h1>
                <p>My pronouns page has moved to <a href="https://en.pronouns.page/@mldkyt">pronouns.page</a>. Redirecting in {timeout} seconds</p>
            </Container>

        </div>
    );
}

