import Astolfo from "@/components/Astolfo";
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

      <h1
        className="mt-4 text-5xl text-center font-bold text-white mx-auto w-max"
        style={{
          background:
            "linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        mldkyt's Discord server
      </h1>
      <div className="text-center">
        <a href="https://discord.gg/JgFNmSwYME">
          <button className="bg-blue-600 my-8 text-white px-4 py-2 rounded-md">
            Join now
          </button>
        </a>
        <br />
        <a href="https://forms.gle/aXEzprRZxqs5Co86A" className="text-blue-600 underline">
          Ban appeal
        </a>
        <br />
      </div>
      {loadedStats ? (
        <>
          <p className="text-white ml-8 text-xl">
            <strong>{members}</strong> members
          </p>
          <p className="text-green-500 ml-8 text-xl">
            <strong>{onlineMembers}</strong> online members
          </p>
        </>
      ) : (
        <>
          <p
            className="ml-8 text-xl"
          >
            Loading member stats...
          </p>
        </>
      )}
      <h2 className="text-3xl text-white px-4 mt-2 font-bold">
        What does the Discord server offer?
      </h2>
      <p className="px-6 text-xl text-white font-bold">Custom Discord bot</p>
      <p className="px-8 text-white">
        The Discord has a custom bot which has ChatPoints, CutePoints and more.
      </p>
      <p className="px-8 text-white">
        You can view the leaderboard for <a className="text-blue-600 underline" href="/discord/chatpoints">ChatPoints</a> and <a className="text-blue-600 underline" href="/discord/cutepoints">CutePoints</a> respectively.
      </p>
      <img
        src="/Discord_LHPOzTvDUC.png"
        alt="Discord bot"
        className="mx-6 rounded-md mt-2"
      />

      <ViewTracker />
      <Astolfo />
      <FemboyFridayVirtualHeadpat />
      <FinalNavbar sel="discord" />
    </div>
  );
}
