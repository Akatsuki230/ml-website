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
      <FinalNavbar />
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
                style={{ width: '100%' }}
                src="/discord_bot.webp"
                alt="Discord bot"
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Requisha instance</Accordion.Header>
            <Accordion.Body>
              <p>
                This server has an active Requisha instance, which is a bot.
              </p>
              <p>
                Requisha has mainly NSFW commands, requiring NSFW access.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Special channels</Accordion.Header>
            <Accordion.Body>
              <h2>#OwO</h2>
              <p>
                A channel for only "owo" and "uwu" messages.
              </p>
              <Image
                style={{ width: '100%' }}
                src="/owo_channel_list.webp"
                alt="OwO channel in channel list"
              />
              <br />
              <br />
              <Image
                style={{ width: '100%' }}
                src="/owo_channel_2.webp"
                alt="OwO channel"
              />

              <br />
              <br />
              <h2>#nya</h2>
              <p>
                A channel for only meowing.
              </p>
              <Image
                style={{ width: '100%' }}
                src="/nya_channel_list.webp"
                alt="Nya channel in channel list"
              />
              <br />
              <br />
              <Image
                style={{ width: '100%' }}
                src="/nya_channel_2.webp"
                alt="Nya channel"
              />

              <br />
              <br />
              <h2>#:3</h2>
              <p>
                A channel for only ":3" messages.
              </p>
              <Image
                style={{ width: '100%' }}
                src="/3_channel_list.webp"
                alt=":3 channel in channel list"
              />
              <br />
              <br />
              <Image
                style={{ width: '100%' }}
                src="/3_channel_2.webp"
                alt=":3 channel"
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Quality Announcements</Accordion.Header>
            <Accordion.Body>
              <p>
                We have amazing admins and mods which make amazing announcements.
              </p>
              <Image
                style={{ width: '100%' }}
                src="/announcement_1.webp"
                alt="Quality announcement"
              />
              <p>
                <small>This is just an example.</small>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Minecraft Server</Accordion.Header>
            <Accordion.Body>
              <p>
                We have a channel with an up-to-date IP for the Minecraft server.
              </p>
              <Image
                style={{ width: '100%' }}
                src="/minecraft_server.webp"
                alt="Minecraft Server"
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
