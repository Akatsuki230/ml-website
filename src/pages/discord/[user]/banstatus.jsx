import FemboyFridayVirtualHeadpat from "@/components/FemboyFridayVirtualHeadpat";
import FinalNavbar from "@/components/NavBar";
import ViewTracker from "@/components/ViewTracker";
import { Inter } from "next/font/google";
import Head from "next/head";
import { Container, Form, Button } from "react-bootstrap";

/**
 * @param {import("next").GetServerSidePropsContext} ctx
 * @returns
 */
export async function getServerSideProps(ctx) {
  const bans = await (
    await fetch(`${process.env.FIREBASE_URL}/discordstats/bans.json`)
  ).json();
  for (const ban of bans) {
    if (ban.user === ctx.query.user) {
      return {
        props: {
          user: ctx.query.user,
          reason: ban.reason,
        },
      };
    }
  }

  return {
    props: {
      error: "User not found",
      user: ctx.query.user,
    },
  };
}

const inter = Inter({ subsets: ["latin"] });

export default function Ban(props) {
  return (
    <div className={inter.className}>
      <Head>
        <title>Ban status for {props.user}</title>
        {/* meta */}
        <meta name="og:title" content={`Ban status for ${props.user}`} />
        <meta name="description" content={`Check if the user ${props.user} is banned or not.`} />
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
        {props.error ? (
          <>
            <h1>Ban status for {props.user}</h1>
            <h2>User {props.user} is not banned!</h2>
          </>
        ) : (
          <>
            <h1>Ban status for {props.user}</h1>
            <h2>User {props.user} is banned!</h2>
            <p>Reason: {props.reason}</p>
            <Button as="a" href="https://forms.gle/aXEzprRZxqs5Co86A">
              Appeal your ban
            </Button>
          </>
        )}
        <br />
        <br />
        <ViewTracker />
      </Container>
    </div>
  );
}
