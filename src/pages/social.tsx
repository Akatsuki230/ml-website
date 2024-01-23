import SocialLinks from "@/components/IndexPage/SocialLinks";
import FinalNavbar from "@/components/NavBar";
import ViewTracker from "@/components/ViewTracker";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { Alert, Button, Card, Container, ListGroup } from "react-bootstrap";


export default function Social() {
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

                <SocialLinks />

                <br />
                <ViewTracker />
            </Container>
        </div>
    );
}
