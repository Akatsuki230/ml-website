import FinalNavbar from "@/components/NavBar";
import Head from "next/head";
import ViewTracker from "@/components/ViewTracker";
import { Alert, Badge, Container, Image } from "react-bootstrap";

export default function AstolfoResourcePack() {
    return (
        <div>
            <Head>
                <title>Astolfo Resource Pack | mldkyt's website</title>
                <meta name="og:title" content="Astolfo Resource Pack" />
                <meta name="description" content="Astolfo Resource Pack is a resource pack for Minecraft which replaces the loading screen, logo and ending screen to be more Astolfo themed." />
                <meta name="og:image" content="https://mldkyt.com/astolforp_menu.webp" />
                <meta name="theme-color" content="#FF77FF" />
                <meta name="author" content="mldkyt" />
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187" crossOrigin="anonymous"></script>
            </Head>
            <FinalNavbar />

            <Container>

                <h1>Astolfo Resource Pack <Badge bg="warning">Archive</Badge></h1>
                <p>Minecraft :3 edition let's gooo</p>
                <p>This resource pack changes the Minecraft loading screen, logo, totem of undying and ending screen to be more Astolfo themed.</p>

                <details>
                    <summary>Images</summary>

                    <Image style={{ maxWidth: '100%' }} src="/astolforp_loading.webp" alt="Astolfo Resource Pack" />
                    <Image style={{ maxWidth: '100%' }} className="mx-2 rounded-md" src="/astolforp_menu.webp" alt="Astolfo Resource Pack" />
                    <Image style={{ maxWidth: '100%' }} className="mx-2 rounded-md" src="/astolforp_ending.webp" alt="Astolfo Resource Pack" />
                </details>

                <details>
                    <summary>Changelog</summary>

                    <h3>1.0</h3>
                    <ul>
                        <li>Initial release</li>
                    </ul>
                </details>

                <br />

                <h2>Download</h2>

                <Alert variant="warning">
                    <p style={{ fontSize: '150%', fontWeight: 'bold' }}>Download is unavailable</p>
                    <p>The download was automatically taken down on by the website builder script for the following reason: <strong>ZenBooda1 or references to ZenBooda1</strong>.</p>
                </Alert>

                <br />
                <ViewTracker />
            </Container>
        </div>
    );
}
