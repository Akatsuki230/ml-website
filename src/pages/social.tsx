import FemboyFridayVirtualHeadpat from "@/components/FemboyFridayVirtualHeadpat";
import FinalNavbar from "@/components/NavBar";
import ViewTracker from "@/components/ViewTracker";
import { Inter } from "next/font/google";
import Head from "next/head";
import { CSSProperties } from "react";
import { Alert, Button, Container, ListGroup } from "react-bootstrap";

const itemStyle: CSSProperties = {
    width: "calc(100% - 45px)"
};

const inter = Inter({ subsets: ["latin"] });

export default function Social() {
    return (
        <div className={`${inter.className} text-white`}>
            <Head>
                <title>mldkyt's social links</title>
                <meta name="og:title" content="mldkyt's social links" />
                <meta name="description" content="mldkyt's social links." />
                <meta name="theme-color" content="#FF77FF" />
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187" crossOrigin="anonymous"></script>
            </Head>

            <FinalNavbar />
            <Container>
                <FemboyFridayVirtualHeadpat />
                <h1>mldkyt's social links</h1>
                <p>This is a list of mldkyt's social links.</p>
                <p>I do not have many social accounts, but here are the ones that I have and actually use.</p>
                <Alert variant="primary">
                    <h4>FemBot - A Discord bot by mldkyt!</h4>
                    <Button as="a" href="/fembot">
                        See more info
                    </Button>
                </Alert>
                <ListGroup>
                    <ListGroup.Item>
                        <h2>YouTube</h2>
                        <p>This is where I mainly upload videos.</p>
                        <Button as="a" href="https://youtube.com/@mldkyt">
                            View my YouTube channel
                        </Button>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h2>TikTok</h2>
                        <p>This is my TikTok. I upload frequently on here.</p>
                        <Button as="a" href="https://tiktok.com/@mldkyt">
                            View my TikTok profile
                        </Button>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h2>GitHub</h2>
                        <p>On GitHub I put all my project's source code. Almost all my projects are open source.</p>
                        <Button as="a" href="https://github.com/mldkyt">
                            View my GitHub profile
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
                <br />
                <ViewTracker />
            </Container>
        </div>
    );
}
