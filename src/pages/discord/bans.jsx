import FemboyFridayVirtualHeadpat from "@/components/FemboyFridayVirtualHeadpat";
import FinalNavbar from "@/components/NavBar";
import ViewTracker from "@/components/ViewTracker";
import { Inter } from "next/font/google";
import { Button, Container, Form } from "react-bootstrap";
import { useState } from "react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Bans() {
  const [value, setValue] = useState("");

  const check = () => {
    location.href = `/discord/${value}/banstatus`;
  };

  return (
    <div className={inter.className}>
      <Head>
        <title>Check if you're banned | mldkyt's website</title>
        <meta
          name="og:title"
          content="Check if you're banned | mldkyt's website"
        />
        <meta
          name="description"
          content="Check if you're banned on mldkyt's Discord server"
        />
        <meta
          name="og:description"
          content="Check if you're banned on mldkyt's Discord server"
        />
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
        <h1>Check your ban reason on mldkyt's server</h1>
        <Form.Text>
          Enter your username below to check why you have been banned:
        </Form.Text>
        <Form.Control
          type="text"
          placeholder="Username"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <br />
        <Button onClick={check} variant="primary" type="submit">
          Check
        </Button>
        <br />
        <br />
        <br />
        <ViewTracker />
      </Container>
    </div>
  );
}
