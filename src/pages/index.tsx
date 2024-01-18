import FinalNavbar from "@/components/NavBar";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import { Alert, Button, Container, Image, ListGroup } from "react-bootstrap";
import ViewTracker from "@/components/ViewTracker";

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
                }}>Nyaa~! A twansgendew pwogwammew, nya~! That's awesome, kawaii, and inspiwational, uwu!</p>
                <p>Writes in a wot of wanguages, such as C#, C++, HTML, CSS, JavaScript, Python, Rust, Go, Batch, Bash,
                    PHP, Lua (ComputerCraft), nya~! Meow, isn't that a pawsome array of languages, uwu? OwO, so kawaii! Nya~!</p>
                <h2>History of mldkyt</h2>
                <p>Mldkyt's fiwst appeawance is on <a href="https://www.youtube.com/watch?v=pil1bYc7foI">YouTube</a>,
                    dating back to 11/26/2019. She stawted posting content on YouTube pwimawily about My Summew Car. In
                    2021, she expanded to making My Summew Car mods as well, alongside posting videos about existing
                    mods. Nyaa~!</p>
                <p>Hew fiwst mod was <a href="https://www.nexusmods.com/mysummercar/mods/3666">posted on
                    NexusMods <i>(weupload)</i></a> on 30th Decembew 2020. The mod was coded so well that it's fiwst
                    vewsion would wowk in the latest vewsion of My Summew Car. She has updated this mod many times,
                    adding mowe featuwes to the mod, such as: Assembly sounds, sound impwovements, old dashboawd,
                    disable doow sounds, walking sounds and knob sounds, just wike in the old vewsions of My Summew Car. Nyaa~!
                </p>
                <p>Hew most successful mod as of nyow is Asphalt roads, getting ovew 10k downwoads within the fiwst week
                    and having ovew 30k downwoads till this day. The mod had one update, impwoving the behaviouw of the
                    roads, as well as adding the ability to convewt mowe roads to asphalt. Nyaa~! </p>

                <h2>Currently active projects</h2>

                <ListGroup>
                    <ListGroup.Item>
                        <h3>FemboyBot</h3>
                        <p>A Discord bot made by mldkyt, nya~! It's pwobably the most kawaii bot in the whole sewvew, uwu!</p>
                        <Button as="a" href="/femboybot">Invite, more information and feature suggestion here!</Button>
                    </ListGroup.Item>
                </ListGroup>

                <h2>Inactive projects (supported, not actively updated)</h2>

                <ListGroup>
                    <ListGroup.Item>
                        <h3>Astolfo is coming for you</h3>
                        <p>OwO, a pwogram where Astolfo comes fow you, nya~! That sounds like an adventuwe filled with kyaatastic excitement!</p>
                        <Button as="a" href="/project/astolfoiscomingforyou">Download here!</Button>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h3>AstolfOS</h3>
                        <p>Nyaa~! An opewating system with Astolfo in a lot of places, nya~! That sounds like a puwrrfectly kawaii and magical OS, uwu!</p>
                        <Button as="a" href="/project/astolfos">Download here!</Button>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h3>Femboy List</h3>
                        <p>Nyaa~! A femboy wist, nya~! That sounds like a cute and diverse compilation of femboy characters ow individuals, uwu!</p>
                        <Button as="a" href="/femboy">View it here</Button>
                    </ListGroup.Item>
                </ListGroup>

                <h2>Unmaintained projects</h2>

                <Button as="a" href="/project/olderprojects">View unmaintained projects</Button>

                <br />
                <br />
                <ViewTracker />
            </Container>
        </div>
    );
}
