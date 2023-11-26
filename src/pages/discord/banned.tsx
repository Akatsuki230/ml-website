import FemboyFridayVirtualHeadpat from "@/components/FemboyFridayVirtualHeadpat";
import FinalNavbar from "@/components/NavBar";
import ViewTracker from "@/components/ViewTracker";
import Head from "next/head";
import { useState } from "react";
import { Button, Container, Form, Spinner } from "react-bootstrap";

export default function DiscordBanned() {
    const [userName, setUserName] = useState("");

    const [showInitialUI, setShowInitialUI] = useState(true);
    const [showLoadingUI, setShowLoadingUI] = useState(false);
    const [showErrorUI, setShowErrorUI] = useState(false);
    const [showResultUI, setShowResultUI] = useState(false);

    const [banned, setBanned] = useState(false);
    const [banReason, setBanReason] = useState("" as string | null);

    const [showAppealMessage, setShowAppealMessage] = useState(false);
    const [appealMessageSending, setAppealMessageSending] = useState(false);
    const [appealMessageSent, setAppealMessageSent] = useState(false);
    const [appealMessageError, setAppealMessageError] = useState(false);
    const [appealMessage, setAppealMessage] = useState("");
    const [appealErrorMessage, setAppealErrorMessage] = useState("" as string | null);

    const checkReason = async () => {
        setShowInitialUI(false);
        setShowLoadingUI(true);
        try {
            const response = await fetch("/api/discord/ban?username=${encodeURIComponent(userName)}");
            if (!response.ok) {
                setShowLoadingUI(false);
                setShowErrorUI(true);
                return;
            }
            const data = await response.json();
            setShowLoadingUI(false);
            setShowResultUI(true);
            if (data.banned) {
                setBanned(true);
                setBanReason(data.reason);
                setShowAppealMessage(true);
            }
        } catch (error) {
            setShowLoadingUI(false);
            setShowErrorUI(true);
        }
    };

    const reset = () => {
        setShowResultUI(false);
        setShowErrorUI(false);
        setShowInitialUI(true);
        setShowAppealMessage(false);
        setAppealMessageSending(false);
        setAppealMessageSent(false);
        setAppealMessageError(false);
    };

    const sendAppeal = () => {
        setShowAppealMessage(false);
        setAppealMessageSending(true);
        fetch("/api/discord/banappeal", {
            method: "POST",
            body: JSON.stringify({
                username: userName,
                appeal: appealMessage
            })
        })
            .then((x) => x.text())
            .then((x) => {
                console.log(x, x == "Ban appeal sent", "Ban appeal sent");
                if (x != "Ban appeal sent") {
                    setAppealErrorMessage(x);
                    setAppealMessageSending(false);
                    setAppealMessageError(true);
                } else {
                    setAppealMessageSending(false);
                    setAppealMessageSent(true);
                }
            });
    };

    return (
        <>
            <FinalNavbar />
            <Container>
                <FemboyFridayVirtualHeadpat />
                <Head>
                    <title>mldkyt's Unban Portal</title>
                    <meta name="og:title" content="mldkyt unban request" />
                    <meta name="description" content="Find out why you were banned and appeal." />
                    <meta name="theme-color" content="#FF77FF" />
                </Head>
                {showInitialUI && (
                    <>
                        <h1>Check your ban on mldkyt's Discord server</h1>
                        <p>Here you can check the ban reason if you were banned from mldkyt's Discord server.</p>
                        <p>You'll be able to appeal it if you are banned.</p>
                        <Form.Control type="text" placeholder="Enter your Discord username" value={userName} onChange={(x) => setUserName(x.target.value)} />
                        <br />
                        <Button onClick={checkReason}>Check</Button>
                    </>
                )}
                {showLoadingUI && <Spinner animation="border" />}
                {showResultUI && (
                    <>
                        <h1>Status for user {userName}</h1>
                        <h2>
                            User {userName} is {banned ? "banned!" : "not banned!"}
                        </h2>
                        {banned && <p>Ban reason: {banReason}</p>}
                        {showAppealMessage && (
                            <>
                                <h2>Unban form</h2>
                                <Form.Control as="textarea" value={appealMessage} onChange={(x) => setAppealMessage(x.target.value)} />
                                <br />
                                <Button onClick={sendAppeal}>Send appeal</Button>
                            </>
                        )}
                        {appealMessageSending && <Spinner animation="border" />}
                        {appealMessageSent && <p>Appeal sent!</p>}
                        {appealMessageError && <p>Error sending appeal: {appealErrorMessage}</p>}
                        <Button onClick={reset} style={{ marginLeft: "15px" }}>
                            Check another
                        </Button>
                    </>
                )}
                {showErrorUI && (
                    <>
                        <h1>Error</h1>
                        <p>An error has occured, check your internet connection and try again.</p>
                        <Button onClick={() => location.reload()}>Try again</Button>
                    </>
                )}
                <br />
                <br />
                <br />
                <br />
                <ViewTracker />
            </Container>
        </>
    );
}
