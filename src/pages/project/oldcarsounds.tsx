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

            <p>Old Car Sounds is a mod for My Summer Car that adds old car sounds from older versions of the game.</p>
            <p>Some of it's key features are:</p>
            <ul>
                <li>Old Engine Sound: Takes the sound from older versions of the game and puts it into the newest versions.</li>
                <li>Green selections: Makes selected items appear in green when you look at them.</li>
                <li>Old Key Sounds: Disables key sounds, just like in build 165 or partially like in the 2016 builds.</li>
                <li>Old dashboard: Tries to bring back that 165 build dashboard vibe in the newest version.</li>
                <li>Remove Walking Sounds: Removes walking sounds just like it was in the past.</li>
                <li>Remove Door Sounds: Remove door sounds like in early builds of the game.</li>
                <li>Remove Knob Sounds: Remove knob sounds like in early builds of the game.</li>
            </ul>

            <Button as="a" href="https://www.nexusmods.com/mysummercar/mods/3666">
                Download
            </Button>
            <ViewTracker />
        </Container>
    </>)
}
