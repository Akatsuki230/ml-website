import FinalNavbar from "@/components/NavBar";
import ViewTracker from "@/components/ViewTracker";
import Head from "next/head";
import { Button, Container } from "react-bootstrap";

export default function AsphaltRoads() {
    return (<>
        <FinalNavbar />
        <Container>
            <Head>
                <title>Asphalt Roads | mldkyt's website</title>
                <meta name="og:title" content="Asphalt Roads" />
                <meta name="description" content="A mod for My Summer Car that replaces dirt roads with asphalt roads." />
                <meta name="theme-color" content="#FF77FF" />
                <meta name="author" content="mldkyt" />
            </Head>

            <h1>Asphalt Roads</h1>

            <p>Asphalt roads is a mod for My Summer Car that replaces dirt roads with asphalt Roads into My Summer Car.</p>
            <p>Replaces dirt roads with asphalt roads</p>
            <p>Supports:</p>
            <ul>
                <li>Replace main dirt road</li>
                <li>Replace side roads</li>
                <li>Replace race track dirt road with asphalt</li>
            </ul>

            <Button as="a" href="https://www.nexusmods.com/mysummercar/mods/4177">
                Download
            </Button>
            <ViewTracker />
        </Container>
    </>)
}
