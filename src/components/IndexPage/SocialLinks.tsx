import { useState, useRef, useEffect } from "react";
import { Card, Button } from "react-bootstrap";

type TrackingStatus = number | "loading" | "error loading";

export default function SocialLinks() {
    const [trackingGitHub, setTrackingGitHub] = useState("loading" as TrackingStatus);
    const [trackingTikTok, setTrackingTikTok] = useState("loading" as TrackingStatus);
    const [trackingTwitch, setTrackingTwitch] = useState("loading" as TrackingStatus);
    const [trackingYouTube, setTrackingYouTube] = useState("loading" as TrackingStatus);
    const [trackingPatreon, setTrackingPatreon] = useState("loading" as TrackingStatus);

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
                setTrackingPatreon("error loading");
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
                if (data.patreon) {
                    setTrackingPatreon(data.patreon);
                } else {
                    setTrackingPatreon("error loading");
                }
            });
        });
    }, []);

    return <>
        <Card>
            <Card.Body>
                <h2>Patreon</h2>
                <p>This is where I post updates.</p>
                <Button as="a" href="/tracking/social/patreon">
                    Open Patreon
                </Button>
                <span> {trackingPatreon} visits</span>
            </Card.Body>
        </Card>

        <Card className="mt-3">
            <Card.Body>
                <h2>YouTube</h2>
                <p>This is where I mainly upload videos.</p>
                <Button as="a" href="/tracking/social/youtube">
                    View my YouTube channel
                </Button>
                <span> {trackingYouTube} visits</span>
            </Card.Body>
        </Card>

        <Card className="mt-3">
            <Card.Body>
                <h2>TikTok</h2>
                <p>This is my TikTok. I upload frequently on here.</p>
                <Button as="a" href="/tracking/social/tiktok">
                    View my TikTok account
                </Button>
                <span> {trackingTikTok} visits</span>
            </Card.Body>
        </Card>

        <Card className="mt-3">
            <Card.Body>
                <h2>GitHub</h2>
                <p>On GitHub I put all my project's source code. Almost all my projects are open source.</p>
                <Button as="a" href="/tracking/social/github">
                    View my GitHub account
                </Button>
                <span> {trackingGitHub} visits</span>
            </Card.Body>
        </Card>

        <Card className="mt-3">
            <Card.Body>
                <h2>Twitch</h2>
                <p>On Twitch I sometimes stream programming.</p>
                <Button as="a" href="/tracking/social/twitch">
                    View my Twitch account
                </Button>
                <span> {trackingTwitch} visits</span>
            </Card.Body>
        </Card>
    </>
}
