
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

            <p>MSC Tweaks is a mod that adds a few tweaks into My Summer Car.</p>
            <p>It does a bunch of cool stuff like disabling the green car, yellow car, or the skoda car. Plus, it saves the Shitsuma temperature and makes sure you won't kick the bucket from urine (phew!). You can also force enable the console and add a bit of fall damage (although that part might be a tad buggy). Oh, and it speeds up your windows too!
                Hope you find these tweaks handy! 😄</p>

            <Button as="a" href="https://www.nexusmods.com/mysummercar/mods/3665">
                Download
            </Button>
            <ViewTracker />
        </Container>
    </>)
}

