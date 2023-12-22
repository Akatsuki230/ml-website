import FemboyFridayVirtualHeadpat from "@/components/FemboyFridayVirtualHeadpat";
import FinalNavbar from "@/components/NavBar";
import ViewTracker from "@/components/ViewTracker";
import { Inter } from "next/font/google";
import Head from "next/head";
import React, { useState } from "react";
import { Alert, Button, Container, FormControl, Image, Modal } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

export default function Discord() {
    const [members, setMembers] = React.useState(0);
    const [onlineMembers, setOnlineMembers] = React.useState(0);
    const [loadedStats, setLoadedStats] = React.useState(false);
    const [statsError, setStatsError] = React.useState(false);

    const [bannedDialog, setBannedDialog] = useState(false);
    const [bannedUsername, setBannedUsername] = useState("");
    const [bannedBanned, setBannedBanned] = useState(false);
    const [bannedLoading, setBannedLoading] = useState(false);
    const [bannedReason, setBannedReason] = useState("");
    const [bannedRan, setBannedRan] = useState(false);

    const hasRan = React.useRef(false);

    const [joinWarningShown, setJoinWarningShown] = React.useState(false);

    React.useEffect(() => {
        if (hasRan.current) return;
        hasRan.current = true;

        const fetchStats = async () => {
            try {
                const response = await fetch("/api/discord/stats");
                if (!response.ok) {
                    setStatsError(true);
                }
                const data = await response.json();
                setMembers(data.members);
                setOnlineMembers(data.online);
                setLoadedStats(true);
            } catch (error) {
                console.error(error);
                // Handle error here
            }
        };

        fetchStats();
    }, [setMembers, setOnlineMembers, setLoadedStats, hasRan]);

    function validateBanReason() {
        setBannedLoading(true);
        setBannedRan(false);
        fetch(`/api/discord/ban?username=${bannedUsername}`).then((x) => {
            if (!x.ok) {
                alert("Something went wrong.");
                setBannedLoading(false);
                return;
            }

            x.json().then((y: { banned: boolean; reason: string | undefined }) => {
                setBannedRan(true);
                setBannedBanned(y.banned);
                setBannedLoading(false);
                if (y.banned && y.reason) {
                    setBannedReason(y.reason);
                }
            });
        });
    }

    return (
        <div className={inter.className}>
            <Head>
                <title>mldkyt's Discord server</title>
                <meta name="description" content="Join mldkyt's Discord server!" />
                <meta name="author" content="mldkyt" />
                <meta name="theme-color" content="#FF77FF" />
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187" crossOrigin="anonymous"></script>
            </Head>
            <FinalNavbar />
            <Container>
                <FemboyFridayVirtualHeadpat />
                <div
                    style={{
                        textAlign: "center"
                    }}
                >
                    <h1>mldkyt's Discord server</h1>
                    {loadedStats ? (
                        <p>
                            <strong>{members}</strong> members,
                            <strong style={{ color: "lime", marginLeft: "1ch" }}>{onlineMembers}</strong> online members
                        </p>
                    ) : (
                        <p>{statsError ? <>There was an error loading the stats</> : <>Loading member stats...</>}</p>
                    )}
                    <Button onClick={() => setJoinWarningShown(true)}>Join now</Button>
                    <Button style={{ marginLeft: "15px" }} onClick={() => setBannedDialog(true)} variant="secondary">
                        I'm banned
                    </Button>
                </div>

                <h2>Features of the server</h2>
                <h3>A big selection of channels</h3>
                <p>There is a big selection of channels in the server.</p>
                <Image
                    src="/discord/discord_channels.webp"
                    style={{
                        maxWidth: "100%"
                    }}
                />

                <h3>Active community</h3>
                <p>The community is active, getting over 2000 messages a day.</p>
                <Image
                    src="/discord/discord_activity.webp"
                    style={{
                        maxWidth: "100%"
                    }}
                />

                <Modal show={joinWarningShown} onHide={() => setJoinWarningShown(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Before joining the server</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Alert variant="warning">
                            <p>
                                This server is <strong>NOT</strong> for people who are:
                            </p>
                            <ul>
                                <li>Homophobic</li>
                                <li>Transphobic</li>
                            </ul>
                            <p>This server is meant to be a welcoming place for everyone.</p>
                        </Alert>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button as="a" href="https://discord.gg/JgFNmSwYME">
                            OK, Join
                        </Button>
                        <Button variant="secondary" onClick={() => setJoinWarningShown(false)}>
                            Nevermind
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={bannedDialog} onHide={() => setBannedDialog(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Check your ban status</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Here you can check your ban status.</p>
                        <p>Simply input your Discord username below and the system will check your ban reason.</p>
                        <FormControl type="text" value={bannedUsername} onChange={(x) => setBannedUsername(x.target.value)} disabled={bannedLoading}></FormControl>
                        <br />
                        <Button onClick={validateBanReason} disabled={bannedLoading}>
                            Validate
                        </Button>
                        {bannedRan && (
                            <>
                                <br />
                                <br />
                                {bannedBanned ? (
                                    <>
                                        <Alert variant="danger">
                                            <p>
                                                <strong>You are banned.</strong>
                                            </p>
                                            <span>Reason: {bannedReason}</span>
                                        </Alert>
                                        <Button as="a" href="https://bit.ly/411oEUV">
                                            Appeal ban
                                        </Button>
                                    </>
                                ) : (
                                    <Alert variant="success">
                                        <span>
                                            <strong>You are not banned!</strong>
                                        </span>
                                    </Alert>
                                )}
                            </>
                        )}
                    </Modal.Body>
                </Modal>

                <br />
                <br />
                <ViewTracker />
            </Container>
        </div>
    );
}
