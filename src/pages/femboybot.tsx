import FinalNavbar from "@/components/NavBar";
import { Alert, Button, Card, Container } from "react-bootstrap";
import styles from "@/styles/fembot.module.css";
import ViewTracker from "@/components/ViewTracker";
import Head from "next/head";
import FemboyBotSuggestion from "@/components/FemboyBotSuggestion";
import { useState } from "react";
import WelcomeGoodbyeHelpModal from "@/components/FemboyBotHelp/WelcomeGoodbye";
import LevelingHelpModal from "@/components/FemboyBotHelp/Leveling";
import LoggingHelpModal from "@/components/FemboyBotHelp/Logging";
import ModerationHelpModal from "@/components/FemboyBotHelp/Moderation";
import AntiRaidHelpModal from "@/components/FemboyBotHelp/AntiRaid";
import ChatStreaksHelpModal from "@/components/FemboyBotHelp/ChatStreaks";
import ChatRevivalHelpModal from "@/components/FemboyBotHelp/ChatRevival";
import ChatSummaryHelpModal from "@/components/FemboyBotHelp/ChatSummary";
import ReactionRolesHelpModal from "@/components/FemboyBotHelp/ReactionRoles";

export default function FemboyBot() {
    const [showWelcomeGoodbyeModal, setShowWelcomeGoodbyeModal] = useState(false);
    const [showLevelingModal, setShowLevelingModal] = useState(false);
    const [showLoggingModal, setShowLoggingModal] = useState(false);
    const [showModerationModal, setShowModerationModal] = useState(false);
    const [showAntiRaidModal, setShowAntiRaidModal] = useState(false);
    const [showChatStreaksModal, setShowChatStreaksModal] = useState(false);
    const [showChatRevivalModal, setShowChatRevivalModal] = useState(false);
    const [showChatSummaryModal, setShowChatSummaryModal] = useState(false);
    const [showReactionRolesModal, setShowReactionRolesModal] = useState(false);

    return (
        <div>
            <Head>
                <title>FemboyBot</title>
                <meta name="title" content="FemboyBot" />
                <meta name="author" content="mldkyt" />
                <meta name="description" content="A Discord bot by mldkyt" />
                <meta name="theme-color" content="#FF77FF" />
                {/* Google AdSense */}
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187" crossOrigin="anonymous"></script>
            </Head>
            <FinalNavbar />

            <Container>
                <div className={styles.center}>
                    <h1>FemboyBot</h1>
                    <h2>A Discord bot by mldkyt</h2>
                    <Button variant="primary" as="a" href="https://discord.com/api/oauth2/authorize?client_id=1172922944033411243&permissions=2048&scope=bot">
                        Invite the bot into your server
                    </Button>
                    <br />
                    <Button style={{ marginTop: "1rem" }} as="a" href="https://discord.gg/456zRGz75j">
                        Join the FemboyBot Discord
                    </Button>
                </div>

                <p style={{ marginTop: "4rem" }}>The support Discord has active updates about the development of the bot, a chatting community and even you can be part of the development by suggesting new features!</p>

                <h2>Current Features</h2>
                <Alert>
                    <strong>TIP:</strong>
                    <span> Learn more about a feature by clicking it's card.</span>
                </Alert>
                <div className={styles.cardcontainer}>
                    <Card className={styles.cardstyle} onClick={() => setShowWelcomeGoodbyeModal(true)}>
                        <Card.Body>
                            <Card.Title>Welcome & Goodbye</Card.Title>
                            <Card.Text>The bot can send welcome and goodbye messages in a specific channel.</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className={styles.cardstyle} onClick={() => setShowLevelingModal(true)}>
                        <Card.Body>
                            <Card.Title>Leveling</Card.Title>
                            <Card.Text>The bot can track user's messages and give them levels. It can also reward members for reaching a specific level.</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className={styles.cardstyle} onClick={() => setShowLoggingModal(true)}>
                        <Card.Body>
                            <Card.Title>Logging</Card.Title>
                            <Card.Text>This bot has advanced logging allowing you to see who made an edit to a role, channel or member and see what exactly they have changed.</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className={styles.cardstyle} onClick={() => setShowModerationModal(true)}>
                        <Card.Body>
                            <Card.Title>Moderation</Card.Title>
                            <Card.Text>
                                Moderation commands like <code>/ban</code>, <code>/kick</code>, <code>/timeout</code>, with DM messages to the member.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className={styles.cardstyle} onClick={() => setShowAntiRaidModal(true)}>
                        <Card.Body>
                            <Card.Title>Anti-raid</Card.Title>
                            <Card.Text>Prevent a lot of changes to the server in a short period of time, spam @everyone pings and more.</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className={styles.cardstyle} onClick={() => setShowChatStreaksModal(true)}>
                        <Card.Body>
                            <Card.Title>Chat Streaks</Card.Title>
                            <Card.Text>The bot counts how many days a member had sent messages daily in a row, and notifies them when their streak increases, or when they lose the streak.</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className={styles.cardstyle} onClick={() => setShowChatRevivalModal(true)}>
                        <Card.Body>
                            <Card.Title>Chat Revival</Card.Title>
                            <Card.Text>The bot revives a channel from inactivity when the chat is inactive. The bot won't repeat the message if the channel is still inactive to avoid annoyance.</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className={styles.cardstyle} onClick={() => setShowChatSummaryModal(true)}>
                        <Card.Body>
                            <Card.Title>Chat Summary</Card.Title>
                            <Card.Text>The bot will count messages in a channel, alongside "owo", "uwu", ":3" and a few others and every day it will send a message about how many messages were sent. </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className={styles.cardstyle} onClick={() => setShowReactionRolesModal(true)}>
                        <Card.Body>
                            <Card.Title>Reaction Roles</Card.Title>
                            <Card.Text>The bot can create reaction roles, which can be used to grant roles easily.</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <p>More features are coming soon, when I come up with some.</p>
                <p>
                    Or, you can suggest features using the bot! Use <code>/feedback suggest</code> to suggest and <code>/feedback bug</code> to report a bug.
                </p>

                <FemboyBotSuggestion />

                <WelcomeGoodbyeHelpModal show={showWelcomeGoodbyeModal} onHide={() => setShowWelcomeGoodbyeModal(false)}></WelcomeGoodbyeHelpModal>
                <LevelingHelpModal show={showLevelingModal} onHide={() => setShowLevelingModal(false)}></LevelingHelpModal>
                <LoggingHelpModal show={showLoggingModal} onHide={() => setShowLoggingModal(false)}></LoggingHelpModal>
                <ModerationHelpModal show={showModerationModal} onHide={() => setShowModerationModal(false)}></ModerationHelpModal>
                <AntiRaidHelpModal show={showAntiRaidModal} onHide={() => setShowAntiRaidModal(false)}></AntiRaidHelpModal>
                <ChatStreaksHelpModal show={showChatStreaksModal} onHide={() => setShowChatStreaksModal(false)}></ChatStreaksHelpModal>
                <ChatRevivalHelpModal show={showChatRevivalModal} onHide={() => setShowChatRevivalModal(false)}></ChatRevivalHelpModal>
                <ChatSummaryHelpModal show={showChatSummaryModal} onHide={() => setShowChatSummaryModal(false)}></ChatSummaryHelpModal>
                <ReactionRolesHelpModal show={showReactionRolesModal} onHide={() => setShowReactionRolesModal(false)}></ReactionRolesHelpModal>


                <br />
                <br />
                <ViewTracker />
            </Container>
        </div>
    );
}
