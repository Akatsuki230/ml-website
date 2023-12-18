import Head from "next/head";
import {useState} from "react";
import {Alert, Button, Container, Form} from "react-bootstrap";
import FinalNavbar from "@/components/NavBar";

export default function Ideas() {
    const [idea, setIdea] = useState("");

    const [submitting, setSubmitting] = useState(false);
    const [sent, setSent] = useState(false);
    const [sentSuccess, setSentSuccess] = useState(false);

    function submitIdea() {
        setSubmitting(true);
        setSent(false);
        fetch("/api/idea/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({idea: idea})
        }).then(x => {
            setSubmitting(false);
            setSent(true);
            setSentSuccess(x.status === 204);
            if (x.status === 204) {
                setIdea("");
            }
        })
    }

    return (
        <>
            <Head>
                <title>Ideas | mldkyt</title>
                <meta name="description" content="You can send ideas to mldkyt from here."/>
                <meta name="og:title" content="Send an idea to mldkyt"/>
                <meta name="og:description" content="You can send ideas to mldkyt from here."/>
            </Head>
            <main>
                <FinalNavbar/>

                <Container>
                    <h1>Send me an idea</h1>
                    <p>Here you can send me some of your very creative ideas. mldkyt's almost always out of ideas, so
                        here you can send some to help her make something cool.</p>
                    <Form.Control as="textarea" rows={3} placeholder="Your idea" value={idea}
                                  onChange={(e) => setIdea(e.target.value)}
                                  disabled={submitting}/>
                    <br/>
                    <Button onClick={submitIdea} disabled={submitting}>Submit</Button>
                    <br/>
                    <br/>
                    {sent && sentSuccess ? <>
                        <Alert variant="success">
                            Your idea was sent successfully!
                        </Alert>
                    </> : <>
                        <Alert variant="danger">
                            Your idea couldn't be sent. Please try again later.
                        </Alert>
                    </>}
                </Container>
            </main>
        </>
    )
}
