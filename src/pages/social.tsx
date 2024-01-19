import FinalNavbar from "@/components/NavBar";
import ViewTracker from "@/components/ViewTracker";
import Head from "next/head";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { Alert, Button, Container, ListGroup } from "react-bootstrap";

const itemStyle: CSSProperties = {
    width: "calc(100% - 45px)"
};

export default function Social() {
    const [trackingGitHub, setTrackingGitHub] = useState("loading" as number | "loading" | "error loading");
    const [trackingTikTok, setTrackingTikTok] = useState("loading" as number | "loading" | "error loading");
    const [trackingTwitch, setTrackingTwitch] = useState("loading" as number | "loading" | "error loading");
    const [trackingYouTube, setTrackingYouTube] = useState("loading" as number | "loading" | "error loading");

    const hasRan = useRef(false);

    useEffect(() => {
        if (hasRan.current) return;
        hasRan.current = true;

        fetch("/api/tracking/social").then((x) => {
            if (!x.ok) {
                setTrackingGitHub("error loading");
                setTrackingTikTok("error loading");
                setTrackingTwitch("error loading");
                setTrackingYouTube("error loading");
                return;
            }

            x.json().then((data) => {
                if (data.github) {
                    setTrackingGitHub(data.github);
                } else {
                    setTrackingGitHub("error loading");
                }
                if (data.tiktok) {
                    setTrackingTikTok(data.tiktok);
                } else {
                    setTrackingTikTok("error loading");
                }
                if (data.twitch) {
                    setTrackingTwitch(data.twitch);
                } else {
                    setTrackingTwitch("error loading");
                }
                if (data.youtube) {
                    setTrackingYouTube(data.youtube);
                } else {
                    setTrackingYouTube("error loading");
                }
            });
        });
    }, []);

    return (
        <div className="text-white">
            <Head>
                <title>mldkyt's social links</title>
                <meta name="og:title" content="mldkyt's social links" />
                <meta name="description" content="mldkyt's social links." />
                <meta name="theme-color" content="#FF77FF" />
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187" crossOrigin="anonymous"></script>
            </Head>

            <FinalNavbar />
            <Container>
                <h1>mldkyt's social links</h1>
                <p>This is a list of mldkyt's social links.</p>
                <p>I do not have many social accounts, but here are the ones that I have and actually use.</p>
                <Alert variant="primary">
                    <h4>FemboyBot - A Discord bot by mldkyt!</h4>
                    <Button as="a" href="/femboybot">
                        See more info
                    </Button>
                </Alert>
                <ListGroup>
                    <ListGroup.Item>
                        <h2>YouTube</h2>
                        <p>This is where I mainly upload videos.</p>
                        <Button as="a" href="/tracking/social/youtube">
                            View my YouTube channel
                        </Button>
                        <span> {trackingYouTube} visits</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h2>TikTok</h2>
                        <p>This is my TikTok. I upload frequently on here.</p>
                        <Button as="a" href="/tracking/social/tiktok">
                            View my TikTok account
                        </Button>
                        <span> {trackingTikTok} visits</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h2>GitHub</h2>
                        <p>On GitHub I put all my project's source code. Almost all my projects are open source.</p>
                        <Button as="a" href="/tracking/social/github">
                            View my GitHub account
                        </Button>
                        <span> {trackingGitHub} visits</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h2>Twitch</h2>
                        <p>On Twitch I sometimes stream programming.</p>
                        <Button as="a" href="/tracking/social/twitch">
                            View my Twitch account
                        </Button>
                        <span> {trackingTwitch} visits</span>
                    </ListGroup.Item>
                </ListGroup>
                <br />
                <ViewTracker />
            </Container>
        </div>
    );
}
