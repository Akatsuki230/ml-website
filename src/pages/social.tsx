import FemboyFridayVirtualHeadpat from "@/components/FemboyFridayVirtualHeadpat";
import FinalNavbar from "@/components/NavBar";
import ViewTracker from "@/components/ViewTracker";
import { Inter } from "next/font/google";
import Head from "next/head";
import { CSSProperties } from "react";
import { Badge, Button, Container, ListGroup } from "react-bootstrap";

const itemStyle: CSSProperties = {
  width: "calc(100% - 45px)",
};

const inter = Inter({ subsets: ["latin"] });

export default function Social() {
  return (
    <div className={`${inter.className} text-white`}>
      <Head>
        <title>mldkyt's social links</title>
        <meta name="og:title" content="mldkyt's social links" />
        <meta name="description" content="mldkyt's social links." />
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
        <h1>mldkyt's social links</h1>
        <p>This is a list of mldkyt's social links.</p>
        <ListGroup>
          <ListGroup.Item>
            <h2>YouTube</h2>
            <p>This is where I mainly upload videos.</p>
            <Button as="a" href="https://youtube.com/@mldkyt">
              View my YouTube channel
            </Button>
          </ListGroup.Item>
          <ListGroup.Item>
            <h2>TikTok</h2>
            <p>This is my TikTok. I upload frequently on here.</p>
            <Button as="a" href="https://tiktok.com/@mldkyt">
              View my TikTok profile
            </Button>
          </ListGroup.Item>
          <ListGroup.Item>
            <h2>GitHub</h2>
            <p>
              On GitHub I put all my project's source code. Almost all my
              projects are open source.
            </p>
            <Button as="a" href="https://github.com/mldkyt">
              View my GitHub profile
            </Button>
          </ListGroup.Item>
          <ListGroup.Item>
            <h2>Steam</h2>
            <p>
              This is my Steam profile. I rarely play games on Steam, but I do
              have a few games. You can add me if you want, but I probably won't
              accept it.
            </p>
            <Button as="a" href="https://steamcommunity.com/id/mldkyt">
              View my Steam profile
            </Button>
          </ListGroup.Item>
          <ListGroup.Item>
            <h2>NexusMods</h2>
            <p>
              Although I do not make mods anymore, I still have a NexusMods
              account. You can download my old mods from there.
            </p>
            <Button as="a" href="https://www.nexusmods.com/users/57424716">
              View my NexusMods profile
            </Button>
          </ListGroup.Item>
          <ListGroup.Item>
            <h2>Reddit</h2>
            <p>My reddit user and subreddit.</p>
            <Button as="a" href="https://old.reddit.com/u/mldkyt">
              View user
            </Button>
            <Button
              style={{ marginLeft: "1rem" }}
              as="a"
              href="https://old.reddit.com/r/mldkyt"
            >
              View subreddit
            </Button>
          </ListGroup.Item>
        </ListGroup>
        <br />
        <h1>Older Social Links</h1>
        <p>My older identities and socials that I no longer use.</p>
        <ListGroup>
          <ListGroup.Item>
            <h2>
              Twitter
              <small>
                <Badge style={{ marginLeft: "1rem" }} pill bg="danger">
                  Deleted
                </Badge>
              </small>
            </h2>
            <p>I used to have a Twitter account, but I deleted it.</p>
            <p>
              <strong>Reason of deletion:</strong>
              <span>No longer in use.</span>
            </p>
          </ListGroup.Item>
          <ListGroup.Item>
            <h2>
              Instagram
              <small>
                <Badge style={{ marginLeft: "1rem" }} pill bg="danger">
                  Private
                </Badge>
              </small>
            </h2>
            <p>I have an Instagram account, but it's set as private.</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <h2>Old Reddit accounts</h2>
            <p>These are my other Reddit accounts that I no longer use.</p>
            <Button as="a" href="https://old.reddit.com/u/Astolph0">
              Astolph0
            </Button>
            <Button
              style={{ marginLeft: "1rem" }}
              as="a"
              href="https://old.reddit.com/u/ProgrammerAstolfo"
            >
              ProgrammerAstolfo
            </Button>
          </ListGroup.Item>
        </ListGroup>
        <br />
        <ViewTracker />
      </Container>
    </div>
  );
}
