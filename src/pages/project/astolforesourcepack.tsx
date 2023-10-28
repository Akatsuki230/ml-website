import { useState } from "react";
import FinalNavbar from "@/components/NavBar";
import { Inter } from "next/font/google";
import Head from "next/head";
import FemboyFridayVirtualHeadpat from "@/components/FemboyFridayVirtualHeadpat";
import ViewTracker from "@/components/ViewTracker";
import { Accordion, Button, Container, Image } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

export default function AstolfoResourcePack() {
  const [hideImages, setHideImages] = useState(false);

  const toggleImages = () => setHideImages(!hideImages);

  return (
    <div className={inter.className}>
      <Head>
        <title>Astolfo Resource Pack | mldkyt's website</title>
        <meta name="og:title" content="Astolfo Resource Pack" />
        <meta
          name="description"
          content="Astolfo Resource Pack is a resource pack for Minecraft which replaces the loading screen, logo and ending screen to be more Astolfo themed."
        />
        <meta
          name="og:image"
          content="https://mldkyt.com/astolforp_menu.webp"
        />
        <meta name="theme-color" content="#FF77FF" />
        <meta name="author" content="mldkyt" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <FinalNavbar sel="project" />
      <Container>
        <FemboyFridayVirtualHeadpat />

        <h1>Astolfo Resource Pack</h1>
        <p>Minecraft :3 edition let's gooo</p>
        <p>
          This resource pack changes the Minecraft loading screen, logo, totem of
          undying and ending screen to be more Astolfo themed.
        </p>
        
        <Accordion defaultActiveKey="2">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Images</Accordion.Header>
            <Accordion.Body>
              <Image
                className="mx-2 rounded-md"
                src="/astolforp_loading.webp"
                alt="Astolfo Resource Pack"
              />
              <Image
                className="mx-2 rounded-md"
                src="/astolforp_menu.webp"
                alt="Astolfo Resource Pack"
              />
              <Image
                className="mx-2 rounded-md"
                src="/astolforp_ending.webp"
                alt="Astolfo Resource Pack"
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Changelog</Accordion.Header>
            <Accordion.Body>
              <h3>1.0</h3>
              <ul>
                <li>Initial release</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Download</Accordion.Header>
            <Accordion.Body>
              <Button as="a" href="https://github.com/Astolph0/AstolfoResourcePackInstaller/releases/download/release-1.0/AstolfoResourcePackInstaller.exe">
                Download installer (recommended!)
              </Button>
              <br />
              <br />
              <Button as="a" href="https://github.com/Astolph0/AstolfoResourcePack/releases/tag/releases" variant="secondary">
                Manual installation instructions
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
