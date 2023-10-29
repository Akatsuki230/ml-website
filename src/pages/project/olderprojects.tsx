import FinalNavbar from "@/components/NavBar";
import { Inter } from "next/font/google";
import Head from "next/head";
import { Accordion, Alert, Button, Container } from "react-bootstrap";

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
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <FinalNavbar />

      <Container>
        <h1>Older Projects</h1>
        <p>mldkyt's older projects.</p>

        <Alert variant="warning">
          <Alert.Heading>Deprecation Warning</Alert.Heading>
          <p>
            All of the projects below are deprecated and no longer maintained.
          </p>
        </Alert>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Old Car Sounds</Accordion.Header>
            <Accordion.Body>
              <p>
                Old Car Sounds was a mod for My Summer Car that added old car
                sounds from older versions of the game.
              </p>
              <Button
                as="a"
                href="https://www.nexusmods.com/mysummercar/mods/3666"
              >
                Download
              </Button>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>MSC Tweaks</Accordion.Header>
            <Accordion.Body>
              <p>
                MSC Tweaks (also known as My Summer Car Tweaks) was a mod for My
                Summer Car that tweaked some of the game mechanics.
              </p>
              <Button
                as="a"
                href="https://www.nexusmods.com/mysummercar/mods/3665"
              >
                Download
              </Button>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Asphalt Roads</Accordion.Header>
            <Accordion.Body>
              <p>
                Asphalt Roads was a mod for My Summer Car that changed the dirt
                roads to asphalt.
              </p>
              <Button
                as="a"
                href="https://www.nexusmods.com/mysummercar/mods/3670"
              >
                Download
              </Button>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Kekmet More Gears</Accordion.Header>
            <Accordion.Body>
              <p>
                Kekmet More Gears was a mod for My Summer Car that added more
                gears to the Kekmet.
              </p>
              <Button
                as="a"
                href="https://www.nexusmods.com/mysummercar/mods/3888"
              >
                Download
              </Button>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
}
