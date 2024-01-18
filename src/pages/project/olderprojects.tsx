import FinalNavbar from "@/components/NavBar";
import { Inter } from "next/font/google";
import Head from "next/head";
import { Alert, Button, Container } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

export default function OlderProjects() {
    return (
        <div className={inter.className}>
            <Head>
                <title>Older Projects | mldkyt's website</title>
                <meta name="og:title" content="Older Projects" />
                <meta name="description" content="mldkyt's older projects." />
                <meta name="theme-color" content="#FF77FF" />
                <meta name="author" content="mldkyt" />
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187" crossOrigin="anonymous"></script>
            </Head>
            <FinalNavbar />

            <Container>
                <h1>Older Projects</h1>
                <p>mldkyt's older projects.</p>

                <Alert variant="warning">
                    <Alert.Heading>Deprecation Warning</Alert.Heading>
                    <p>All of the projects below are deprecated and no longer maintained.</p>
                </Alert>
                <h2>OldCarSounds</h2>

                <p>Old Car Sounds was a mod for My Summer Car that added old car sounds from older versions of the game.</p>
                <Button as="a" href="https://www.nexusmods.com/mysummercar/mods/3666">
                    Download
                </Button>
                <br />
                <br />
                <h2>MSC Tweaks</h2>

                <p>MSC Tweaks (also known as My Summer Car Tweaks) was a mod for My Summer Car that tweaked some of the game mechanics.</p>
                <Button as="a" href="https://www.nexusmods.com/mysummercar/mods/3665">
                    Download
                </Button>

                <br />
                <br />
                <h2>Asphalt Roads</h2>

                <p>Asphalt Roads was a mod for My Summer Car that changed the dirt roads to asphalt.</p>
                <Button as="a" href="https://www.nexusmods.com/mysummercar/mods/3670">
                    Download
                </Button>

                <br />
                <br />
                <h2>Kekmet More Gears</h2>

                <p>Kekmet More Gears was a mod for My Summer Car that added more gears to the Kekmet.</p>
                <Button as="a" href="https://www.nexusmods.com/mysummercar/mods/3888">
                    Download
                </Button>
            </Container>
        </div>
    );
}
