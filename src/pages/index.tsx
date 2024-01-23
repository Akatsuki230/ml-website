import FinalNavbar from "@/components/NavBar";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import { Alert, Container } from "react-bootstrap";
import ViewTracker from "@/components/ViewTracker";
import Profile from "@/components/IndexPage/Profile";
import AboutMe from "@/components/IndexPage/AboutMe";
import Projects from "@/components/IndexPage/Projects";
import SocialLinks from "@/components/IndexPage/SocialLinks";

function friendlyTime(ms: number): string {
    if (ms < 1000) {
        return Math.round(ms) + " ms";
    }

    if (ms < 1000 * 60) {
        return Math.round(ms / 1000) + " s";
    }

    if (ms < 1000 * 60 * 60) {
        return Math.round(ms / (1000 * 60)) + " m";
    }

    return Math.round(ms / (1000 * 60 * 60 * 24)) + " days";
}

export default function Home() {
    const [christmasCountdown, setChristmasCountdown] = useState(0);
    const [newYearCountdown, setNewYearCountdown] = useState(0);

    const hasRan = useRef(false);

    useEffect(() => {
        if (hasRan.current) return;
        hasRan.current = true;

        const date = new Date();
        const christmas = new Date(date.getFullYear(), 11, 24, 0, 0, 0, 0);
        const christmasDiff = christmas.getTime() - date.getTime();

        const newYear = new Date(date.getFullYear() + 1, 0, 1, 0, 0, 0, 0);
        const newYearDiff = newYear.getTime() - date.getTime();

        if (christmasDiff < 1000 * 3600 * 24 * 30 && christmasDiff > 1000 * 3600) {
            setChristmasCountdown(christmasDiff);
        }

        if (newYearDiff < 1000 * 3600 * 7 * 30 && newYearDiff > 1000) {
            setNewYearCountdown(newYearDiff);
        }

        window.scrollTo(0, 0);
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
    });

    return (
        <div>
            <Head>
                <title>mldkyt's website</title>
                <meta name="description" content="Welcome to mldkyt's website!" />
                <meta name="author" content="mldkyt" />
                <meta name="theme-color" content="#FF77FF" />
                <script async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187"
                    crossOrigin="anonymous"></script>
            </Head>

            <FinalNavbar />

            <Container>
                <Profile />

                {christmasCountdown !== 0 && (
                    <Alert>
                        <span>{friendlyTime(christmasCountdown)}</span>
                        <span> until Christmas!!</span>
                    </Alert>
                )}
                {newYearCountdown !== 0 && (
                    <Alert>
                        <span>{friendlyTime(newYearCountdown)}</span>
                        <span> until New Year!!</span>
                    </Alert>
                )}

                <AboutMe />
                <Projects />

                <h1 style={{
                    marginTop: '0.5em'
                }}>Socials</h1>
                <SocialLinks />

                <br />
                <br />
                <ViewTracker />
            </Container>
        </div>
    );
}
