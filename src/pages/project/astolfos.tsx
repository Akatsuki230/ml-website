import FinalNavbar from "@/components/NavBar";
import ViewTracker from "@/components/ViewTracker";
import Head from "next/head";
import { Button, Container, Image } from "react-bootstrap";

export default function AstolfoMod() {
    return (
        <div>
            <Head>
                <title>AstolfOS | mldkyt's website</title>
                <meta name="og:title" content="AstolfOS" />
                <meta name="description" content="AstolfOS transfers your Ubuntu linux into AstolfOS!" />
                <meta name="og:image" content="https://mldkyt.com/kde_astolfos_settings.webp" />
                <meta name="theme-color" content="#FF77FF" />
                <meta name="author" content="mldkyt" />
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187" crossOrigin="anonymous"></script>
            </Head>
            <FinalNavbar />

            <Container>

                <h1>AstolfOS</h1>
                <p>AstolfOS transfers your Ubuntu linux into AstolfOS!</p>
                <p>This script changes the OS name, KDE splash screen, GRUB configuration, neofetch configuration and terminal style.</p>

                <details>
                    <summary>Images</summary>

                    <Image style={{ width: "100%" }} src="/kde_astolfos_desktop.webp" alt="AstolfOS" />
                    <Image style={{ width: "100%" }} src="/kde_astolfos_settings.webp" alt="AstolfOS" />
                    <Image style={{ width: "100%" }} src="/kde_astolfos_neofetch.webp" alt="AstolfOS" />
                </details>

                <details>
                    <summary>Changelog</summary>

                    <h3>1.1</h3>
                    <ul>
                        <li>Fix neofetch installation</li>
                        <li>Add editing of bash config</li>
                        <li>Use shell commands a bit more properly</li>
                        <li>Add support to Ubuntu Gnome</li>
                    </ul>
                    <h3>1.0</h3>
                    <ul>
                        <li>First release</li>
                    </ul>
                </details>

                <br />
                <h2>Download</h2>

                <Button as="a" href="https://github.com/mldkyt/AstolfOS/wiki/Automatic-Installation-(Ubuntu-only)">
                    Automatic installation (recommended for Ubuntu users!)
                </Button>
                <br />
                <br />
                <Button variant="secondary" as="a" href="https://github.com/mldkyt/AstolfOS/wiki/Manual-Installation">
                    Manual installation (owo)
                </Button>

                <br />

                <ViewTracker />
            </Container>
        </div>
    );
}
