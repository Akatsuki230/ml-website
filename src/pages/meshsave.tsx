import FemboyFridayVirtualHeadpat from "@/components/FemboyFridayVirtualHeadpat";
import FinalNavbar from "@/components/NavBar";
import ViewTracker from "@/components/ViewTracker";
import { Inter } from "next/font/google";
import Head from "next/head";
import { CSSProperties } from "react";
import { Button, Carousel, Container, Image } from "react-bootstrap";

const imageStyle: CSSProperties = {
  margin: "10px",
  width: "calc(100% - 20px)",
};

const inter = Inter({ subsets: ["latin"] });

export default function Meshsave() {
  function dl() {
    location.href = "/meshsave.txt";
  }
  return (
    <div className={inter.className}>
      <Head>
        <title>mldkyt's Meshsave</title>
        <meta name="og:title" content="mldkyt's Meshsave" />
        <meta
          name="description"
          content="mldkyt's (fucked up) meshsave for My Summer Car."
        />
        <meta
          name="og:image"
          content="https://media.discordapp.net/attachments/768887055438053476/1042910848529739777/shitsuma1.png"
        />
        <meta name="theme-color" content="#FF77FF"></meta>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <FinalNavbar />

      <Container>
        <FemboyFridayVirtualHeadpat />
        <h1>
          mldkyt's meshsave
        </h1>
        <p>
          In my save, the car looks like it has been through a war zone. The car's
          body is badly damaged and has been crashed at high speed multiple times.
          The mesh of the car is severely damaged and it looks like it has been
          pieced back together.
        </p>

        <Carousel>
          <Carousel.Item>
            <Image src="https://media.discordapp.net/attachments/768887055438053476/1042910848529739777/shitsuma1.png" alt="shitsuma1" style={{width: '100%'}}/>
          </Carousel.Item>
          <Carousel.Item>
            <Image src="https://media.discordapp.net/attachments/768887055438053476/1042910848886259782/shitsuma2.png" alt="shitsuma2" style={{width: '100%'}}/>
          </Carousel.Item>
          <Carousel.Item>
            <Image src="https://media.discordapp.net/attachments/768887055438053476/1042910849192435812/shitsuma3.png" alt="shitsuma3" style={{width: '100%'}}/>
          </Carousel.Item>
          <Carousel.Item>
            <Image src="https://media.discordapp.net/attachments/768887055438053476/1042910849477652481/shitsuma4.png" alt="shitsuma4" style={{width: '100%'}}/>
          </Carousel.Item>
        </Carousel>
        <br />
        <Button onClick={dl}>
          Download the meshsave
        </Button>
        <br />
        <br />
        <ViewTracker />
      </Container>

    </div>
  );
}
