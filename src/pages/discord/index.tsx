import FemboyFridayVirtualHeadpat from "@/components/FemboyFridayVirtualHeadpat";
import FinalNavbar from "@/components/NavBar";
import ViewTracker from "@/components/ViewTracker";
import { Inter } from "next/font/google";
import Head from "next/head";
import React from "react";
import { Accordion, Button, Container, Image } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

export default function Discord() {
  const [members, setMembers] = React.useState(0);
  const [onlineMembers, setOnlineMembers] = React.useState(0);
  const [loadedStats, setLoadedStats] = React.useState(false);
  const hasRan = React.useRef(false);

  React.useEffect(() => {
    if (hasRan.current) return;
    hasRan.current = true;
    fetch("/api/discord/stats")
      .then((x) => x.json())
      .then((x) => {
        setMembers(x.members);
        setOnlineMembers(x.online);
        setLoadedStats(true);
      });
  }, [setMembers, setOnlineMembers, setLoadedStats, hasRan]);

  return (
    <div className={inter.className}>
      <Head>
        <title>mldkyt's Discord server</title>
        <meta
          name="description"
          content="Join mldkyt's Discord server!"
        />
        <meta name="author" content="mldkyt" />
        <meta name="theme-color" content="#FF77FF" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <FinalNavbar sel="discord" />
      <Container>
        <FemboyFridayVirtualHeadpat />
        <h1>mldkyt's Discord server</h1>
        <p>The official Discord server for mldkyt, named "mldkyt's bedroom"</p>
        <Button as="a" href="https://discord.gg/JgFNmSwYME">
          Join now
        </Button>
        <Button style={{marginLeft: '15px'}} as="a" href="https://forms.gle/aXEzprRZxqs5Co86A" variant="secondary">
          Ban appeal
        </Button>
        
        <br />
        <br />
        {loadedStats ? (
          <>
            <p>
              <strong>{members}</strong> members,
              <br />
              <strong style={{color: 'lime'}}>{onlineMembers}</strong> online members
            </p>
          </>
        ) : (
          <>
            <p>
              Loading member stats...
            </p>
          </>
        )}

        <h2>Features of this Discord server</h2>
        <Accordion defaultActiveKey='0'>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Custom Discord bot</Accordion.Header>
            <Accordion.Body>
              <p>
                This server has a custom Discord bot which has ChatPoints, CutePoints and more.
              </p>
              <p>
                You can view the leaderboard for <a className="text-blue-600 underline" href="/discord/chatpoints">ChatPoints</a> and <a className="text-blue-600 underline" href="/discord/cutepoints">CutePoints</a> respectively.
              </p>
              <Image
                src="/Discord_LHPOzTvDUC.png"
                alt="Discord bot"
              />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <br />
        <ViewTracker />
      </Container>
    </div>
  );
}
