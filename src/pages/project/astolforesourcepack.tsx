import FinalNavbar from "@/components/NavBar";
import { Inter } from "next/font/google";
import Head from "next/head";
import ViewTracker from "@/components/ViewTracker";
import { Badge, Button, Container, Image } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

export default function AstolfoResourcePack() {
    return (
        <div className={inter.className}>
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

                    <Image className="mx-2 rounded-md" src="/astolforp_loading.webp" alt="Astolfo Resource Pack" />
                    <Image className="mx-2 rounded-md" src="/astolforp_menu.webp" alt="Astolfo Resource Pack" />
                    <Image className="mx-2 rounded-md" src="/astolforp_ending.webp" alt="Astolfo Resource Pack" />
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

                <Button as="a" href="https://github.com/mldkyt/AstolfoResourcePackInstaller/releases/download/release-1.0/AstolfoResourcePackInstaller.exe">
                    Download installer (recommended!)
                </Button>
                <br />
                <br />
                <Button as="a" href="https://github.com/mldkyt/AstolfoResourcePack/releases/tag/releases" variant="secondary">
                    Manual installation instructions
                </Button>
                <br />
                <ViewTracker />
            </Container>
        </div>
    );
}
