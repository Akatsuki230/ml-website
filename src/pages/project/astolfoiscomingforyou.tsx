import FinalNavbar from "@/components/NavBar";
import ViewTracker from "@/components/ViewTracker";
import Head from "next/head";
import { Button, Container, Image } from "react-bootstrap";

export default function AstolfoIsComingForYou() {
    return (
        <div>
            <Head>
                <title>Astolfo Is Coming For You | mldkyt's website</title>
                <meta name="og:title" content="Astolfo Is Coming For You" />
                <meta name="description" content="Astolfo Is Coming For You is a program that if you run on your PC, Astolfo will come to your house, or turn your PC off, depending on the variant." />
                <meta name="og:image" content="https://mldkyt.com/astolfoiscomingforyou_safe_1.webp" />
                <meta name="theme-color" content="#FF77FF" />
                <meta name="author" content="mldkyt" />
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187" crossOrigin="anonymous"></script>
            </Head>
            <FinalNavbar />

            <Container>
                <h1>Astolfo is coming for you</h1>

                <h2>The safe variant</h2>
                <p>The safe variant has a countdown from 100 to 0 and then Astolfo gives you a lot of compliments &lt;3</p>
                <Button as="a" href="https://github.com/mldkyt/AstolfoIsComingForYou/releases">
                    Download
                </Button>
                <br />
                <br />
                <details>
                    <summary>Pictures</summary>

                    <Image style={{ width: "100%" }} rounded src="/astolfoiscomingforyou_safe_1.webp" alt="Coming for you"></Image>
                    <br />
                    <Image style={{ width: "100%" }} rounded src="/astolfoiscomingforyou_safe_2.webp" alt="Compliments <3"></Image>
                    <br />
                </details>
                <br />

                <h2>The evil variant</h2>

                <p>The evil variant has a countdown from 100 to 0 and then Astolfo shuts down your PC.</p>
                <Button as="a" href="https://github.com/mldkyt/AstolfoIsComingForYou/releases">
                    Download
                </Button>
                <br />
                <br />
                <details>
                    <summary>Pictures</summary>
                    <Image style={{ width: "100%" }} rounded src="/astolfoiscomingforyou_evil_1.webp" alt="Coming for you, angry >:3"></Image>
                    <br />
                    <Image style={{ width: "100%" }} rounded src="/astolfoiscomingforyou_evil_2.webp" alt="Shutting down your PC >:3"></Image>
                    <br />
                </details>
                <br />
                <ViewTracker />
            </Container>
        </div>
    );
}
