import FemboyFridayVirtualHeadpat from "@/components/FemboyFridayVirtualHeadpat";
import FinalNavbar from "@/components/NavBar";
import ViewTracker from "@/components/ViewTracker";
import { Inter } from "next/font/google";
import Head from "next/head";
import React from "react";
import { Alert, Button, Container, Image, Modal } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

export default function Discord() {
    const [members, setMembers] = React.useState(0);
    const [onlineMembers, setOnlineMembers] = React.useState(0);
    const [loadedStats, setLoadedStats] = React.useState(false);
    const [statsError, setStatsError] = React.useState(false);
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
                <h1>mldkyt's Discord server</h1>
                <p>The official Discord server for mldkyt, named "mldkyt's bedroom"</p>
                <Button onClick={() => setJoinWarningShown(true)}>Join now</Button>
                <Button style={{ marginLeft: "15px" }} as="a" href="/discord/banned" variant="secondary">
                    I'm banned
                </Button>

                <br />
                <br />
                {loadedStats ? (
                    <p>
                        <strong>{members}</strong> members,
                        <br />
                        <strong style={{ color: "lime" }}>{onlineMembers}</strong> online members
                    </p>
                ) : (
                    <p>{statsError ? <>There was an error loading the stats</> : <>Loading member stats...</>}</p>
                )}

                <Alert variant="warning">
                    <h4>NOTE</h4>
                    <p>I am not the official owner of this Discord server, but it is/was Mine</p>
                    <p>
                        A member going by the name of <strong>brimoflafi</strong> (which is also very cute) is the new owner of the server.
                    </p>
                    <p>The reason behind this is that I do not have time to maintain a server, let alone be an owner of a server.</p>
                    <p>This doesn't mean I'm quitting or anything, when I get free time, I might be active for a while.</p>
                    <small>
                        <i>This might change in the future when I may get more free time</i>
                    </small>
                </Alert>

                <h2>Features of this Discord server</h2>
                <h3>Custom Discord Bot</h3>

                <p>This server has a custom Discord bot which has ChatPoints, CutePoints and more.</p>
                <Alert variant="warning">This bot is in very slow development and isn't updated much.</Alert>
                <p>
                    You can view the leaderboard for{" "}
                    <a className="text-blue-600 underline" href="/discord/chatpoints">
                        ChatPoints
                    </a>{" "}
                    and{" "}
                    <a className="text-blue-600 underline" href="/discord/cutepoints">
                        CutePoints
                    </a>{" "}
                    respectively.
                </p>
                <Image style={{ width: "100%" }} src="/discord_bot.webp" alt="Discord bot" />

                <h3>Only the best channels</h3>

                <h4>#OwO</h4>
                <p>A channel for only "owo" and "uwu" messages.</p>
                <Image style={{ width: "100%" }} src="/owo_channel_list.webp" alt="OwO channel in channel list" />
                <br />
                <br />
                <Image style={{ width: "100%" }} src="/owo_channel_2.webp" alt="OwO channel" />

                <br />
                <br />
                <h2>#nya</h2>
                <p>A channel for only meowing.</p>
                <Image style={{ width: "100%" }} src="/nya_channel_list.webp" alt="Nya channel in channel list" />
                <br />
                <br />
                <Image style={{ width: "100%" }} src="/nya_channel_2.webp" alt="Nya channel" />

                <br />
                <br />
                <h4>#:3</h4>
                <p>A channel for only ":3" messages.</p>
                <Image style={{ width: "100%" }} src="/3_channel_list.webp" alt=":3 channel in channel list" />
                <br />
                <br />
                <Image style={{ width: "100%" }} src="/3_channel_2.webp" alt=":3 channel" />

                <h3>Quality Announcemnets</h3>

                <p>We have amazing admins and mods which make amazing announcements.</p>
                <Image style={{ width: "100%" }} src="/announcement_1.webp" alt="Quality announcement" />
                <p>
                    <small>This is just an example.</small>
                </p>

                <Modal show={joinWarningShown} onHide={() => setJoinWarningShown(false)}>
                    <Modal.Dialog>
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
                                    <li>Femboyphobic</li>
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
                    </Modal.Dialog>
                </Modal>

                <br />
                <ViewTracker />
            </Container>
        </div>
    );
}
