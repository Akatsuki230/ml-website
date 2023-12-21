import FinalNavbar from "@/components/NavBar";
import { Button, Card, Container } from "react-bootstrap";
import styles from "@/styles/fembot.module.css";
import { Inter } from "next/font/google";
import ViewTracker from "@/components/ViewTracker";
import Head from "next/head";
import FemBotSuggestion from "@/components/FemBotSuggestion";

const inter = Inter({ subsets: ["latin"] });
export default function FemBot() {
    return (
        <div className={inter.className}>
            <Head>
                {/* meta title tag "FemBot", description and pink color */}
                <title>FemBot</title>
                <meta name="title" content="FemBot" />
                <meta name="author" content="mldkyt" />
                <meta name="description" content="A Discord bot by mldkyt" />
                <meta name="theme-color" content="#FF77FF" />
                {/* Google AdSense */}
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187" crossOrigin="anonymous"></script>
            </Head>
            <FinalNavbar />

            <Container>
                <div className={styles.center}>
                    <h1>FemBot</h1>
                    <h2>A Discord bot by mldkyt</h2>
                    <Button variant="primary" as="a" href="https://discord.com/api/oauth2/authorize?client_id=1172922944033411243&permissions=2048&scope=bot">
                        Invite the bot into your server
                    </Button>
                    <br />
                    <Button style={{ marginTop: "1rem" }} as="a" href="https://discord.gg/456zRGz75j">
                        Join the FemBot Discord
                    </Button>
                </div>

                <p style={{ marginTop: "4rem" }}>The support Discord has active updates about the development of the bot, a chatting community and even you can be part of the development by suggesting new features!</p>

                <h2>Current Features</h2>
                <div className={styles.cardcontainer}>
                    <Card className={styles.cardstyle}>
                        <Card.Body>
                            <Card.Title>Welcome & Goodbye</Card.Title>
                            <Card.Text>The bot can send welcome and goodbye messages in a specific channel.</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className={styles.cardstyle}>
                        <Card.Body>
                            <Card.Title>Leveling</Card.Title>
                            <Card.Text>The bot can track user's messages and give them levels. It can also reward members for reaching a specific level.</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className={styles.cardstyle}>
                        <Card.Body>
                            <Card.Title>Logging</Card.Title>
                            <Card.Text>This bot has advanced logging allowing you to see who made an edit to a role, channel or member and see what exactly they have changed.</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className={styles.cardstyle}>
                        <Card.Body>
                            <Card.Title>Moderation</Card.Title>
                            <Card.Text>
                                Moderation commands like <code>/ban</code>, <code>/kick</code>, <code>/timeout</code>, with DM messages to the member.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className={styles.cardstyle}>
                        <Card.Body>
                            <Card.Title>Anti-raid</Card.Title>
                            <Card.Text>Prevent a lot of changes to the server in a short period of time, spam @everyone pings and more.</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className={styles.cardstyle}>
                        <Card.Body>
                            <Card.Title>Chat Streaks</Card.Title>
                            <Card.Text>The bot counts how many days a member had sent messages daily in a row, and notifies them when their streak increases, or when they lose the streak.</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className={styles.cardstyle}>
                        <Card.Body>
                            <Card.Title>Chat Revival</Card.Title>
                            <Card.Text>The bot revives a channel from inactivity when the chat is inactive. The bot won't repeat the message if the channel is still inactive to avoid annoyance.</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <p>More features are coming soon, when I come up with some.</p>
                <p>
                    Or, you can suggest features using the bot! Use <code>/feedback suggest</code> to suggest and <code>/feedback bug</code> to report a bug.
                </p>

                <FemBotSuggestion />

                <br />
                <br />
                <ViewTracker />
            </Container>
        </div>
    );
}
