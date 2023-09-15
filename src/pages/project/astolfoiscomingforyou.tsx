
import FemboyFridayVirtualHeadpat from "@/components/FemboyFridayVirtualHeadpat";
import Navbar from "@/components/NavBar";
import { Inter } from "next/font/google";
import Head from "next/head";

// export const meta: V2_MetaFunction = () => {
//   return [
//     { title: "Astolfo Is Coming For You" },
//     { name: "title", content: "Astolfo Is Coming For You | mldkyt's Website" },
//     {
//       name: "description",
//       content:
//         "Astolfo Is Coming For You is a program that if you run on your PC, Astolfo will come to your house, or turn your PC off, depending on the variant.",
//     },
//     { name: "author", content: "mldkyt" },
//     { name: 'theme-color', content: '#FF77FF'}
//   ];
// };

const inter = Inter({ subsets: ["latin"] })

export default function AstolfoIsComingForYou() {
  return (
    <div className={inter.className}>
      <Head>
        <title>Astolfo Is Coming For You | mldkyt's website</title>
        <meta name="og:title" content="Astolfo Is Coming For You" />
        <meta
          name="description"
          content="Astolfo Is Coming For You is a program that if you run on your PC, Astolfo will come to your house, or turn your PC off, depending on the variant."
        />
        <meta
          name="og:image"
          content="https://mldkyt.com/VirtualBoxVM_lCURwn9Xdd.png"
        />
        <meta name="theme-color" content="#FF77FF" />
        <meta name="author" content="mldkyt" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <h1 className="text-5xl mt-2 mx-2 text-center font-bold text-white">Astolfo Is Coming For You</h1>
      <h2 className="text-2xl mx-2 font-bold text-white">1. The safe variant</h2>
      <p className="mx-2 text-white">
        The safe variant has a countdown from 100 to 0 and then Astolfo gives
        you a lot of compliments ❤️.
      </p>
      <img
        className="mx-2 rounded-md"
        src="/VirtualBoxVM_lCURwn9Xdd.png"
        alt="Astolfo Is Coming For You Countdown"
      />
      <img
        className="mx-2 rounded-md"
        src="/VirtualBoxVM_y4yGiQAs1A.png"
        alt="Astolfo Is Coming For You Compliments"
      />

      <h2 className="text-2xl mx-2 font-bold text-white">2. The unsafe variant</h2>
      <p className="mx-2 text-white">
        The unsafe variant has a countdown from 100 to 0 and then Astolfo gets
        angry at you and turns your PC off.
      </p>
      <img
        className="mx-2 rounded-md"
        src="/VirtualBoxVM_R7Oo1N36h9.png"
        alt="Astolfo Is Coming For You Evil Countdown"
      />
      <img
        className="mx-2 rounded-md"
        src="/VirtualBoxVM_cRDIvd1bG6.png"
        alt="Astolfo Is Coming For You Evil Shutdown"
      />
      <a href="https://github.com/Astolph0/AstolfoIsComingForYou/releases/">
        <button className="mx-2 m-1 p-2 px-4 bg-green-500 rounded-md text-white">
          Download
        </button>
      </a>

      <FemboyFridayVirtualHeadpat />
      <Navbar sel="project" />
    </div>
  );
}
