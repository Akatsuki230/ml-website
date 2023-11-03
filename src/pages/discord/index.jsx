import FemboyFridayVirtualHeadpat from "@/components/FemboyFridayVirtualHeadpat";
import FinalNavbar from "@/components/NavBar";
import ViewTracker from "@/components/ViewTracker";
import { Inter } from "next/font/google";
import Head from "next/head";
import React from "react";
import { Accordion, Button, Container, Image } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

const emojis = [
  "https://cdn.discordapp.com/emojis/1135182338662342747.png",
  "https://cdn.discordapp.com/emojis/1135182675821482035.png",
  "https://cdn.discordapp.com/emojis/1152215612047761428.png",
  "https://cdn.discordapp.com/emojis/1152685622209810472.png",
  "https://cdn.discordapp.com/emojis/1152876428220698674.png",
  "https://cdn.discordapp.com/emojis/1160514946287812669.png",
  "https://cdn.discordapp.com/emojis/1160515133257302137.png",
  "https://cdn.discordapp.com/emojis/1160515164379041822.png",
  "https://cdn.discordapp.com/emojis/1160515187565138012.png",
  "https://cdn.discordapp.com/emojis/1160515222910550033.png",
  "https://cdn.discordapp.com/emojis/1160515272961175603.png",
  "https://cdn.discordapp.com/emojis/1160515849598283786.png",
  "https://cdn.discordapp.com/emojis/1160525611303960647.png",
  "https://cdn.discordapp.com/emojis/1160525637061189733.png",
  "https://cdn.discordapp.com/emojis/1135182338662342747.png",
  "https://cdn.discordapp.com/emojis/1135182675821482035.png",
  "https://cdn.discordapp.com/emojis/1152215612047761428.png",
  "https://cdn.discordapp.com/emojis/1152685622209810472.png",
  "https://cdn.discordapp.com/emojis/1152876428220698674.png",
  "https://cdn.discordapp.com/emojis/1160514946287812669.png",
  "https://cdn.discordapp.com/emojis/1160515133257302137.png",
  "https://cdn.discordapp.com/emojis/1160515164379041822.png",
  "https://cdn.discordapp.com/emojis/1160515187565138012.png",
  "https://cdn.discordapp.com/emojis/1160515222910550033.png",
  "https://cdn.discordapp.com/emojis/1160515272961175603.png",
  "https://cdn.discordapp.com/emojis/1160515849598283786.png",
  "https://cdn.discordapp.com/emojis/1160525611303960647.png",
  "https://cdn.discordapp.com/emojis/1160525637061189733.png",
  "https://cdn.discordapp.com/emojis/1160525661799202936.png",
  "https://cdn.discordapp.com/emojis/1160525719298920488.png",
  "https://cdn.discordapp.com/emojis/1160525725384839198.png",
  "https://cdn.discordapp.com/emojis/1160525742258532362.png",
  "https://cdn.discordapp.com/emojis/1160525758050086993.png",
  "https://cdn.discordapp.com/emojis/1161378536368640072.png",
  "https://cdn.discordapp.com/emojis/1161378537719205989.png",
  "https://cdn.discordapp.com/emojis/1161378540059627621.png",
  "https://cdn.discordapp.com/emojis/1161378541561204827.png",
  "https://cdn.discordapp.com/emojis/1163116196745445496.png",
  "https://cdn.discordapp.com/emojis/1163116241439957042.png",
  "https://cdn.discordapp.com/emojis/1166457570215608440.gif",
  "https://cdn.discordapp.com/emojis/1166458650164990013.png",
  "https://cdn.discordapp.com/emojis/1166658193880006686.png",
  "https://cdn.discordapp.com/emojis/1167906848565891223.png",
  "https://cdn.discordapp.com/emojis/1160525661799202936.png",
  "https://cdn.discordapp.com/emojis/1160525719298920488.png",
  "https://cdn.discordapp.com/emojis/1160525725384839198.png",
  "https://cdn.discordapp.com/emojis/1160525742258532362.png",
  "https://cdn.discordapp.com/emojis/1160525758050086993.png",
  "https://cdn.discordapp.com/emojis/1161378536368640072.png",
  "https://cdn.discordapp.com/emojis/1161378537719205989.png",
  "https://cdn.discordapp.com/emojis/1161378540059627621.png",
  "https://cdn.discordapp.com/emojis/1161378541561204827.png",
  "https://cdn.discordapp.com/emojis/1163116196745445496.png",
  "https://cdn.discordapp.com/emojis/1163116241439957042.png",
  "https://cdn.discordapp.com/emojis/1166457570215608440.gif",
  "https://cdn.discordapp.com/emojis/1166458650164990013.png",
  "https://cdn.discordapp.com/emojis/1166658193880006686.png",
  "https://cdn.discordapp.com/emojis/1167906848565891223.png",
];

const stickers = [
  "https://cdn.discordapp.com/stickers/1152989340658585600.png",
  "https://cdn.discordapp.com/stickers/1159516402789646446.png",
  "https://cdn.discordapp.com/stickers/1165339643714207754.png",
  "https://cdn.discordapp.com/stickers/1165339713557770433.png",
  "https://cdn.discordapp.com/stickers/1165650008641650781.png",
  "https://cdn.discordapp.com/stickers/1166036403646386206.png",
  "https://cdn.discordapp.com/stickers/1166096034271858708.png",
  "https://cdn.discordapp.com/stickers/1166457040701493279.png",
  "https://cdn.discordapp.com/stickers/1167152557727162458.png",
  "https://cdn.discordapp.com/stickers/1167536629569835061.png",
  "https://cdn.discordapp.com/stickers/1167906695410880563.png",
  "https://cdn.discordapp.com/stickers/1167917118042415155.png",
];

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
        <meta name="description" content="Join mldkyt's Discord server!" />
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
        <p>
          The official Discord server for mldkyt, named "mldkyt's and Brimo's
          bedroom"
        </p>
        <Button as="a" href="https://discord.gg/JgFNmSwYME">
          Join now
        </Button>
        <Button
          style={{ marginLeft: "15px" }}
          as="a"
          href="/discord/bans"
          variant="secondary"
        >
          I think I'm banned
        </Button>

        <br />
        <br />
        {loadedStats ? (
          <>
            <p>
              <strong>{members}</strong> members,
              <br />
              <strong style={{ color: "lime" }}>{onlineMembers}</strong> online
              members
            </p>
          </>
        ) : (
          <>
            <p>Loading member stats...</p>
          </>
        )}

        <h2>Features of this Discord server</h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Custom Discord bot</Accordion.Header>
            <Accordion.Body>
              <p>
                This server has a custom Discord bot which has ChatPoints,
                CutePoints and more.
              </p>
              <p>
                You can view the leaderboard for{" "}
                <a
                  className="text-blue-600 underline"
                  href="/discord/chatpoints"
                >
                  ChatPoints
                </a>{" "}
                and{" "}
                <a
                  className="text-blue-600 underline"
                  href="/discord/cutepoints"
                >
                  CutePoints
                </a>{" "}
                respectively.
              </p>
              <Image
                style={{ width: "100%" }}
                src="/discord_bot.webp"
                alt="Discord bot"
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Emojis</Accordion.Header>
            <Accordion.Body>
              {emojis.map((x) => <Image style={{width: '4em', height: '4em', margin: '0.2em'}} src={x} alt="emoji" rounded />)}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Stickers</Accordion.Header>
            <Accordion.Body>
              {stickers.map((x) => <Image style={{width: '16em', height: '16em', margin: '0.5em'}} src={x} alt="sticker" rounded />)}
              
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Requisha instance</Accordion.Header>
            <Accordion.Body>
              <p>
                This server has an active Requisha instance, which is a bot.
              </p>
              <p>Requisha has mainly NSFW commands, requiring NSFW access.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Special channels</Accordion.Header>
            <Accordion.Body>
              <h2>#OwO</h2>
              <p>A channel for only "owo" and "uwu" messages.</p>
              <Image
                style={{ width: "100%" }}
                src="/owo_channel_list.webp"
                alt="OwO channel in channel list"
              />
              <br />
              <br />
              <Image
                style={{ width: "100%" }}
                src="/owo_channel_2.webp"
                alt="OwO channel"
              />

              <br />
              <br />
              <h2>#nya</h2>
              <p>A channel for only meowing.</p>
              <Image
                style={{ width: "100%" }}
                src="/nya_channel_list.webp"
                alt="Nya channel in channel list"
              />
              <br />
              <br />
              <Image
                style={{ width: "100%" }}
                src="/nya_channel_2.webp"
                alt="Nya channel"
              />

              <br />
              <br />
              <h2>#:3</h2>
              <p>A channel for only ":3" messages.</p>
              <Image
                style={{ width: "100%" }}
                src="/3_channel_list.webp"
                alt=":3 channel in channel list"
              />
              <br />
              <br />
              <Image
                style={{ width: "100%" }}
                src="/3_channel_2.webp"
                alt=":3 channel"
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Quality Announcements</Accordion.Header>
            <Accordion.Body>
              <p>
                We have amazing admins and mods which make amazing
                announcements.
              </p>
              <Image
                style={{ width: "100%" }}
                src="/announcement_1.webp"
                alt="Quality announcement"
              />
              <p>
                <small>This is just an example.</small>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>Minecraft Server</Accordion.Header>
            <Accordion.Body>
              <p>
                We have a channel with an up-to-date IP for the Minecraft
                server.
              </p>
              <Image
                style={{ width: "100%" }}
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
