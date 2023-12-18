import { Inter } from "next/font/google";
import FinalNavbar from "@/components/NavBar";
import Head from "next/head";
import { useEffect, useRef } from "react";
import FemboyFridayVirtualHeadpat from "@/components/FemboyFridayVirtualHeadpat";
import { Alert, Button, Container } from "react-bootstrap";
import ViewTracker from "@/components/ViewTracker";
import LatestArticleDisplay from "@/components/LatestArticleDisplay";

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
                <p>mldkyt is a 🏳️‍⚧️ programmer who is very good at programming! &lt;3</p>
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
                <p>View my projects from the dropdown menu at the top of my page!</p>
                <h1>Socials</h1>
                <Button as="a" href="/social">Socials are listed here</Button>
                <br/>
                <br/>
                <h1>Read some more</h1>
                <LatestArticleDisplay />
            </Container>
        </div>
    );
}
