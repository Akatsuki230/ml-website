import Astolfo from "@/components/Astolfo";
import DeprecatedWarning from "@/components/DeprecatedWarning";
import FemboyFridayVirtualHeadpat from "@/components/FemboyFridayVirtualHeadpat";
import Navbar from "@/components/NavBar";
import {Inter} from "next/font/google";
import Head from "next/head";

const inter = Inter({subsets: ["latin"]})

export default function MSCTweaks() {
  return (
    <div className={inter.className}>
      <Head>
        <title>MSC Tweaks | Programmer Astolfo's website</title>
        <meta name="og:title" content="MSC Tweaks"/>
        <meta
          name="description"
          content="MSC Tweaks is a mod for My Summer Car which adds a few tweaks, such as always open console, fall damage (though buggy) and more."
        />
        <meta
          name="og:image"
          content="https://staticdelivery.nexusmods.com/mods/2600/images/3665/3665-1691255198-609977580.jpeg"
        />
        <meta name="theme-color" content="#FF77FF"/>
        <meta name="author" content="Programmer Astolfo" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <DeprecatedWarning />
      <h1 className="text-5xl mt-2 text-center font-bold text-white mx-auto w-max" style={{
          background:
            "linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}>MSC Tweaks</h1>
      <p className="mx-2 text-white">
        MSC Tweaks (also My Summer Car Tweaks) is a mod for My Summer Car which
        adds a few tweaks, such as always open console, fall damage (though
        buggy) and more.
      </p>
      <h2 className="ml-2 text-2xl font-bold text-white">Download this mod</h2>
      <p className="ml-4 text-white">
        You can download it on NexusMods, where is the latest version:
      </p>
      <a
        className="ml-4 px-2 py-1 bg-orange-500 rounded-lg text-white"
        href="https://www.nexusmods.com/mysummercar/mods/3665"
      >
        <button className="mt-2">Download</button>
      </a>
      <Astolfo />
      <FemboyFridayVirtualHeadpat />
      <Navbar sel="project"/>
    </div>
  );
}
