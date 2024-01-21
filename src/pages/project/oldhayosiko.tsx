import FinalNavbar from "@/components/NavBar";
import ViewTracker from "@/components/ViewTracker";
import Head from "next/head";
import { Button, Container } from "react-bootstrap";

export default function OldHayosiko() {
    return (<>
        <FinalNavbar />
        <Container>
            <Head>
                <title>Old Hayosiko Sounds | mldkyt's website</title>
                <meta name="og:title" content="Old Hayosiko Sounds" />
                <meta name="description" content="A mod for My Summer Car that takes old sounds of the Hayosiko and puts it on the newest versions." />
                <meta name="theme-color" content="#FF77FF" />
                <meta name="author" content="mldkyt" />
            </Head>

            <h1>Old Hayosiko Sounds</h1>

            <p>Old Hayosiko Sounds is a mod for My Summer Car that recreates the old hayosiko from older versions of the game.</p>
            <p>Some of the features of this mod are:</p>
            <ul>
                <li>Old Steering Wheel</li>
                <li>White Interior</li>
                <li>Remove Dashboard</li>
                <li>Engine sound swap</li>
            </ul>

            <Button as="a" href="https://www.nexusmods.com/mysummercar/mods/4653">
                Download
            </Button>
            <ViewTracker />
        </Container>
    </>)
}
