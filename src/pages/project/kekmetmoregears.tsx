
import FinalNavbar from "@/components/NavBar";
import ViewTracker from "@/components/ViewTracker";
import Head from "next/head";
import { Alert, Button, Container } from "react-bootstrap";

export default function KekmetMoreGears() {
    return (<>
        <FinalNavbar />
        <Container>
            <Head>
                <title>Kekmet More Gears | mldkyt's website</title>
                <meta name="og:title" content="Kekmet More Gears" />
                <meta name="description" content="A mod for My Summer Car allows you to buy more gears into the kekmet." />
                <meta name="theme-color" content="#FF77FF" />
                <meta name="author" content="mldkyt" />
            </Head>
            
            <h1>Kekmet More Gears</h1>

            <Alert variant="warning">
                <h3>Deprecation warning</h3>
                <p>This mod has been deprecated as there is a better alternative available for download.</p>
                <p>If you want to download the better alternative, click the button below:</p>
                <Button as="a" href="https://www.nexusmods.com/mysummercar/mods/2721">Download V8 Kekmet</Button>
            </Alert>


            <p>Kekmet More Gears is a mod for My Summer Car allows you to buy more gears into the kekmet.</p>
            <p>This cool mod for My Summer Car does something awesome. It adds extra gears and more engine options to the Kekmet. So, if you're into the game and want to tweak your Kekmet for even more fun, this mod's got you covered! Enjoy!</p>

            <Button as="a" href="https://www.nexusmods.com/mysummercar/mods/3888">
                Download
            </Button>
            <ViewTracker />
        </Container>
    </>)
}

