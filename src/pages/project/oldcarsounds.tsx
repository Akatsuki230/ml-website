import FinalNavbar from "@/components/NavBar";
import ViewTracker from "@/components/ViewTracker";
import Head from "next/head";
import { Button, Container } from "react-bootstrap";

export default function OldCarSounds() {
    return (<>
        <FinalNavbar />
        <Container>
            <Head>
                <title>Old Car Sounds | mldkyt's website</title>
                <meta name="og:title" content="Old Car Sounds" />
                <meta name="description" content="A mod for My Summer Car that takes old sounds of the satsuma and puts it on the newest versions." />
                <meta name="theme-color" content="#FF77FF" />
                <meta name="author" content="mldkyt" />
            </Head>

            <h1>Old Car Sounds</h1>

            <p>Old Car Sounds is a mod for My Summer Car that added old car sounds from older versions of the game.</p>
            <p>It's all about making sounds and pitch values match up with build 165 and the latest version. Plus, there are a few settings you can play around with:</p>
            <ul>
                <li>Green selections: Makes selected items appear in green when you look at them.</li>
                <li>Old Key Sounds: Disables key sounds, just like in build 165 or partially like in the 2016 builds.</li>
                <li>Old dashboard: Tries to bring back that 165 build dashboard vibe in the newest version.</li>
            </ul>
            <p>Hope you find these tweaks fun to mess around with!</p>

            <Button as="a" href="https://www.nexusmods.com/mysummercar/mods/3666">
                Download
            </Button>
            <ViewTracker />
        </Container>
    </>)
}
