import { Inter } from "next/font/google";
import FinalNavbar from "@/components/NavBar";
import Head from "next/head";
import { useEffect, useRef } from "react";
import FemboyFridayVirtualHeadpat from "@/components/FemboyFridayVirtualHeadpat";
import { Alert, Button, Container } from "react-bootstrap";
import ViewTracker from "@/components/ViewTracker";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const hasRan = useRef(false);

    useEffect(() => {
        if (hasRan.current) return;
        hasRan.current = true;

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
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187" crossOrigin="anonymous"></script>
            </Head>

            <FinalNavbar />

            <Container>
                <FemboyFridayVirtualHeadpat />
                <h1>mldkyt's website</h1>
                <p>Welcome to mldkyt's website! Start scrolling down to find out more about me :3</p>
                <ViewTracker />

                <Alert variant="primary">
                    <h4>FemBot - A Discord bot by mldkyt!</h4>
                    <Button as="a" href="/fembot">
                        See more info
                    </Button>
                </Alert>
                <Alert variant="secondary">
                    <h4>I have a Discord server! Hop in for some fun!</h4>
                    <Button as="a" href="/discord">
                        Join the Discord
                    </Button>
                </Alert>

                <h1>About me</h1>
                <p>mldkyt is a femboy programmer and is an addict to astolfo please don't kill me tysm &lt;3</p>
                <h3>Preferred languages</h3>
                <ul>
                    <li>C#</li>
                    <li>C++</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>Rust</li>
                    <li>Go</li>
                </ul>
                <p>..and many more!</p>
                <h2>Projects</h2>
                <hr />
                <h3>FemBot</h3>
                <div style={{ marginLeft: "8px" }}>
                    <p>A bot made by mldkyt.</p>
                    <p>Features that are currently implemnted and that will be added are on the project's page.</p>
                    <Button as="a" href="/fembot">
                        Learn more
                    </Button>
                    <br />
                    <br />
                </div>
                <h3>Astolfo is Coming For You</h3>
                <div style={{ marginLeft: "8px" }}>
                    <p>A Windows application that causes Astolfo to come for you.</p>
                    <p>There's a safe version available, where Astolfo comes to compliment you &lt;3</p>
                    <p>The evil version causes your PC to shut down after Astolfo comes for you.</p>
                    <Button as="a" href="/project/astolfoiscomingforyou">
                        Learn more
                    </Button>
                    <br />
                    <br />
                </div>
                <h3>Astolfo Forge Mod</h3>
                <div style={{ marginLeft: "8px" }}>
                    <p>A Minecraft Forge mod that adds Astolfo to Minecraft.</p>
                    <p>Supports version 1.20.1 of Minecraft.</p>
                    <Button as="a" href="/project/astolfoforgemod">
                        Learn more
                    </Button>
                    <br />
                    <br />
                </div>
                <h3>Astolfo Resource Pack</h3>
                <div style={{ marginLeft: "8px" }}>
                    <p>A Minecraft resource pack that adds Astolfo to Minecraft.</p>
                    <p>Supports version 1.20.1 of Minecraft.</p>
                    <Button as="a" href="/project/astolforesourcepack">
                        Learn more
                    </Button>
                    <br />
                    <br />
                </div>
                <h3>AstolfOS</h3>
                <div style={{ marginLeft: "8px" }}>
                    <p>AstolfOS is an operating system based on Linux.</p>
                    <p>It supports (I think) every Linux distro if you install it manually.</p>
                    <p>Ubuntu has an automatic installer available.</p>
                    <Button as="a" href="/project/astolfos">
                        Learn more
                    </Button>
                    <br />
                    <br />
                </div>
                <h3>Discord Bot</h3>
                <div style={{ marginLeft: "8px" }}>
                    <p>A Discord bot that does many things.</p>
                    <p>It's currently in development, but it's still usable.</p>
                    <Button as="a" href="/discord">
                        Learn more
                    </Button>
                    <br />
                    <br />
                </div>
                <h1>Socials</h1>
                <hr />
                <br />
                <h2>TikTok</h2>
                <Button as="a" href="https://tiktok.com/@mldkyt">
                    View my TikTok profile
                </Button>
                <br />
                <h2>YouTube</h2>
                <Button as="a" href="https://youtube.com/@mldkyt">
                    View my YouTube channel
                </Button>
                <br />
                <h2>Others</h2>
                <Button as="a" href="/social">
                    View all my socials
                </Button>
            </Container>
        </div>
    );
}
