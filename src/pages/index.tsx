import { Inter } from "next/font/google";
import FinalNavbar from "@/components/NavBar";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import FemboyFridayVirtualHeadpat from "@/components/FemboyFridayVirtualHeadpat";
import { Accordion, Button, Container } from "react-bootstrap";
import ViewTracker from "@/components/ViewTracker";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const hasRan = useRef(false);
  const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    if (hasRan.current) return;
    hasRan.current = true;

    window.scrollTo(0, 0);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  });

  return (
    <div className={inter.className}>
      <Head>
        <title>mldkyt's website</title>
        <meta
          name="description"
          content="Welcome to mldkyt's website!"
        />
        <meta name="author" content="mldkyt" />
        <meta name="theme-color" content="#FF77FF" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187"
     crossOrigin="anonymous"></script>
      </Head>

      <FinalNavbar />

      <Container>
        <FemboyFridayVirtualHeadpat />
        <h1>mldkyt's website</h1>
        <p>Welcome to mldkyt's website! Start scrolling down to find out more about me :3</p>
        <ViewTracker />
        
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>About mldkyt</Accordion.Header>
            <Accordion.Body>
              <p>mldkyt is a femboy programmer and is an addict to astolfo please don't kill me tysm &lt;3</p>
              <h3>Preferred languages</h3>
              <ul>
                <li>C#</li>
                <li>C++</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>Rust</li>
                <li>Go</li>
              </ul>
              <p>..and many more!</p>
              <h3>Discover mldkyt's projects</h3>
              <p>Scroll down to explore their latest and greatest creations.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Projects</Accordion.Header>
            <Accordion.Body>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Astolfo is Coming For You</Accordion.Header>
                  <Accordion.Body>
                    <p> 
                      A Windows application that causes Astolfo to come for you.
                    </p>
                    <p>
                      There's a safe version available, where Astolfo comes to compliment you &lt;3
                    </p>
                    <p>
                      The evil version causes your PC to shut down after Astolfo comes for you.
                    </p>
                    <Button as="a" href="/project/astolfoiscomingforyou">
                      Learn more
                    </Button>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Astolfo Forge Mod</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      A Minecraft Forge mod that adds Astolfo to Minecraft.
                    </p>
                    <p>
                      Supports version 1.20.1 of Minecraft.
                    </p>
                    <Button as="a" href="/project/astolfoforgemod">
                      Learn more
                    </Button>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Astolfo Resource Pack</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      A Minecraft resource pack that adds Astolfo to Minecraft.
                    </p>
                    <p>
                      Supports version 1.20.1 of Minecraft.
                    </p>
                    <Button as="a" href="/project/astolforesourcepack">
                      Learn more
                    </Button>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>AstolfOS</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      AstolfOS is an operating system based on Linux.
                    </p>
                    <p>
                      It supports (I think) every Linux distro if you install it manually.
                    </p>
                    <p>
                      Ubuntu has an automatic installer available.
                    </p>
                    <Button as="a" href="/project/astolfos">
                      Learn more
                    </Button>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>Discord Bot</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      A Discord bot that does many things.
                    </p>
                    <p>
                      It's currently in development, but it's still usable.
                    </p>
                    <Button as="a" href="/discord">
                      Learn more
                    </Button>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Socials</Accordion.Header>
            <Accordion.Body>
              <h2>TikTok</h2>
              <Button as="a" href="https://tiktok.com/@mldkyt">
                View my TikTok profile
              </Button>
              <h2>YouTube</h2>
              <Button as="a" href="https://youtube.com/@mldkyt">
                View my YouTube channel
              </Button>
              <h2>Others</h2>
              <Button as="a" href="/social">
                View all my socials
              </Button>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>


    </div>
  );
}
