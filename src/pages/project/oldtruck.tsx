import FinalNavbar from "@/components/NavBar";
import ViewTracker from "@/components/ViewTracker";
import Head from "next/head";
import { Button, Container } from "react-bootstrap";

export default function OldTruck() {
    return (<>
        <FinalNavbar />
        <Container>
            <Head>
                <title>Old Truck Sounds | mldkyt's website</title>
                <meta name="og:title" content="Old Truck Sounds" />
                <meta name="description" content="A mod for My Summer Car that takes old sounds of the truck and puts it on the newest versions." />
                <meta name="theme-color" content="#FF77FF" />
                <meta name="author" content="mldkyt" />
            </Head>

            <h1>Old Truck Sounds</h1>

            <p>Old Truck Sounds is a mod for My Summer Car that recreates the old truck from older versions of the game.</p>
            <p>Some of the features of this mod are:</p>
            <ul>
                <li>Old Sounds</li>
                <li>Old Starting Sound</li>
                <li>Old Look</li>
                <li>Logs instead of septic tank</li>
            </ul>

            <Button as="a" href="https://www.nexusmods.com/mysummercar/mods/4176">
                Download
            </Button>
            <ViewTracker />
        </Container>
    </>)
}
