import FinalNavbar from "@/components/NavBar";
import { Inter } from "next/font/google";
import Head from "next/head";
import { Button, Container, Image } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

export default function ShareX() {
    return(
        <div className={inter.className}>
            <Head>
                <title>ShareX Settings | mldkyt's website</title>
                <meta name="og:title" content="ShareX Settings" />
                <meta name="description" content="mldkyt's settings for ShareX." />
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
                <h1>mldkyt's ShareX settings</h1>
                <p>
                    These are my ShareX settings.
                </p>
                <p>
                    They create the rainbow border around my screenshots.
                </p>
                <Image rounded src="/sharex_example.webp" alt="Rainbow Border"></Image>
                <br />
                <br />
                <Button as="a" href="/RainbowBorder.sxie">
                    Download
                </Button>
            </Container>

        </div>
    )
}
