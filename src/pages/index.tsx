import { Inter } from "next/font/google";
import FinalNavbar from "@/components/NavBar";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import FemboyFridayVirtualHeadpat from "@/components/FemboyFridayVirtualHeadpat";
import { Alert, Button, Container, Image, ListGroup } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

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
        <div className={inter.className}>
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
                <FemboyFridayVirtualHeadpat />
                <div>
                    <Image src="/pfp.webp" width="100" height="100"
                        style={{
                            borderRadius: "50%",
                            position: 'relative',
                            left: '50%',
                            transform: 'translateX(-50%)'
                        }} alt="mldkyt's PFP" />
                    <h1 style={{
                        fontSize: '48px',
                        textAlign: "center"
                    }}>mldkyt</h1>
                </div>

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

                <p style={{
                    fontSize: '18px',
                    fontWeight: 'bold'
                }}>A transgender programmer from the Czech Republic.</p>
                <p>Writes in a lot of languages, such as C#, C++, HTML, CSS, JavaScript, Python, Rust, Go, Batch, Bash,
                    PHP, Lua (ComputerCraft), ...</p>
                <h2>History of mldkyt</h2>
                <p>Mldkyt's first appearance is on <a href="https://www.youtube.com/watch?v=pil1bYc7foI">YouTube</a>,
                    dating back to 11/26/2019. She started posting content on YouTube primarily about My Summer Car. In
                    2021, she expanded to making My Summer Car mods as well, alongside posting videos about existing
                    mods.</p>
                <p>Her first mod was <a href="https://www.nexusmods.com/mysummercar/mods/3666">posted on
                    NexusMods <i>(reupload)</i></a> on 30th December 2020. The mod was coded so well that it's first
                    version would work in the latest version of My Summer Car. She has updated this mod many times,
                    adding more features to the mod, such as: Assembly sounds, sound improvements, old dashboard,
                    disable door sounds, walking sounds and knob sounds, just like in the old versions of My Summer Car.
                </p>
                <p>Her most successful mod as of now is Asphalt roads, getting over 10k downloads within the first week
                    and having over 30k downloads till this day. The mod had one update, improving the behaviour of the
                    roads, as well as adding the ability to convert more roads to asphalt.</p>

                <h2>Currently active projects</h2>

                <ListGroup>
                    <ListGroup.Item>
                        <h3>FemBot</h3>
                        <p>A Discord bot made by mldkyt.</p>
                        <Button as="a" href="/fembot">Invite, more information and feature suggestion here!</Button>
                    </ListGroup.Item>
                </ListGroup>

                <h2>Inactive projects (supported, not actively updated)</h2>

                <ListGroup>
                    <ListGroup.Item>
                        <h3>Astolfo is coming for you</h3>
                        <p>A program where Astolfo comes for you. Good and evil versions are available.</p>
                        <Button as="a" href="/project/astolfoiscomingforyou">Download here!</Button>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h3>AstolfOS</h3>
                        <p>An operating system which has Astolfo in a lot of places.</p>
                        <Button as="a" href="/project/astolfos">Download here!</Button>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h3>Femboy List</h3>
                        <p>A femboy list.</p>
                        <Button as="a" href="/femboy">View it here</Button>
                    </ListGroup.Item>
                </ListGroup>

                <h2>Unmaintained projects</h2>

                <Button as="a" href="/project/olderprojects">View unmaintained projects</Button>
            </Container>
        </div>
    );
}
