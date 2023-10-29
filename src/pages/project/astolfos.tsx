import FemboyFridayVirtualHeadpat from "@/components/FemboyFridayVirtualHeadpat";
import FinalNavbar from "@/components/NavBar";
import ViewTracker from "@/components/ViewTracker";
import { Inter } from "next/font/google";
import Head from "next/head";
import { Accordion, Button, Container, Image } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

export default function AstolfoMod() {
  return (
    <div className={inter.className}>
      <Head>
        <title>AstolfOS | mldkyt's website</title>
        <meta name="og:title" content="AstolfOS" />
        <meta
          name="description"
          content="AstolfOS transfers your Ubuntu linux into AstolfOS!"
        />
        <meta
          name="og:image"
          content="https://mldkyt.com/kde_astolfos_settings.webp"
        />
        <meta name="theme-color" content="#FF77FF" />
        <meta name="author" content="mldkyt" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <FinalNavbar />

      <Container>
        <FemboyFridayVirtualHeadpat />

        <h1>AstolfOS</h1>
        <p>
          AstolfOS transfers your Ubuntu linux into AstolfOS!
        </p>
        <p>
          This script changes the OS name, KDE splash screen, GRUB configuration, neofetch configuration and terminal style.
        </p>

        <Accordion defaultActiveKey="2">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Images</Accordion.Header>
            <Accordion.Body>
              <Image
                style={{ width: "100%" }}
                src="/kde_astolfos_desktop.webp"
                alt="AstolfOS"
              />
              <Image
                style={{ width: "100%" }}
                src="/kde_astolfos_settings.webp"
                alt="AstolfOS"
              />
              <Image
                style={{ width: "100%" }}
                src="/kde_astolfos_neofetch.webp"
                alt="AstolfOS"
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Changelog</Accordion.Header>
            <Accordion.Body>
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
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Download</Accordion.Header>
            <Accordion.Body>
              <Button  as="a" href="https://github.com/mldkyt/AstolfOS/wiki/Automatic-Installation-(Ubuntu-only)">
                Automatic installation (recommended for Ubuntu users!)
              </Button>
              <br />
              <br />
              <Button variant="secondary" as="a" href="https://github.com/mldkyt/AstolfOS/wiki/Manual-Installation">
                Manual installation (owo)
              </Button>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <br />

        <ViewTracker />
      </Container>
    </div>
  );
}
