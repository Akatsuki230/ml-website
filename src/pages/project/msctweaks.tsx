
import FinalNavbar from "@/components/NavBar";
import ViewTracker from "@/components/ViewTracker";
import Head from "next/head";
import { Alert, Button, Container } from "react-bootstrap";

export default function MSCTweaks() {
    return (<>
        <FinalNavbar />
        <Container>
            <Head>
                <title>MSC Tweaks | mldkyt's website</title>
                <meta name="og:title" content="MSC Tweaks" />
                <meta name="description" content="A mod for My Summer Car that adds a few tweaks to the game." />
                <meta name="theme-color" content="#FF77FF" />
                <meta name="author" content="mldkyt" />
            </Head>

            <h1>MSC Tweaks</h1>

            <Alert>
                <h2>Suggestions needed!</h2>
                <p>Please suggest ideas under NexusMods' posts or bug reports section for future improvement of this mod.</p>
                <Button as="a" href="https://www.nexusmods.com/mysummercar/mods/3665?tab=posts">
                    Posts tab
                </Button>
                <Button style={{
                    marginLeft: '1em'
                }} as="a" href="https://www.nexusmods.com/mysummercar/mods/3665?tab=bugs">
                    Bug reports tab
                </Button>
            </Alert>

            <p>This mod adds a few tweaks to My Summer Car, some of the most notable of them are:</p>
            <ul>
                <li>Disable Pena (the green car)</li>
                <li>Disable Kyläjäni (the yellow car)</li>
                <li>Disable Amis2 (the Skoda)</li>
                <li>Saving of Satsuma's temperature</li>
                <li>Player can't die from Urine (realism)</li>
                <li>Enable console in all scenarios</li>
                <li>Add fall damage into the game</li>
                <li>Better Window Handles (Speed up Window rolling up and down)</li>
            </ul>

            <Button as="a" href="https://www.nexusmods.com/mysummercar/mods/3665">
                Download
            </Button>
            <ViewTracker />
        </Container>
    </>)
}

