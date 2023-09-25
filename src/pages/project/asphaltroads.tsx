import FemboyFridayVirtualHeadpat from "@/components/FemboyFridayVirtualHeadpat";
import Navbar from "@/components/NavBar";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function AsphaltRoads() {
  return (
    <div className={inter.className}>
      <Head>
        <title>Asphalt Roads | Programmer Astolfo's website</title>
        <meta name="og:title" content="Asphalt Roads" />
        <meta
          name="description"
          content="Asphalt Roads is a mod for My Summer Car which replaces dirt roads with asphalt roads."
        />
        <meta
          name="og:image"
          content="https://staticdelivery.nexusmods.com/mods/2600/images/3670/3670-1691406498-1770392602.png"
        />
        <meta name="theme-color" content="#FF77FF" />
        <meta name="author" content="Programmer Astolfo" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <div className="border-2 border-orange-500 m-2 rounded-lg">
        <p className="text-2xl font-bold ml-2 text-white">WARNING</p>
        <p className="mx-4 text-white">
          The information you are about to read is for a mod that has been
          deprecated and will only get bug fixes or functionality fixes.
        </p>
      </div>
      <h1 className="text-center text-5xl font-bold text-white">
        Asphalt Roads
      </h1>
      <p className="mx-2 text-white">
        Asphalt Roads stands out as a modification (commonly referred to as a
        "mod") designed for the popular video game My Summer Car. This
        particular mod has a specific purpose: it transforms the traditional
        dirt roads within the game into sleek and modern asphalt roads. This
        alteration can significantly impact gameplay by providing a smoother and
        faster driving experience for players navigating the virtual world of My
        Summer Car.
      </p>
      <img
        className="rounded-lg ml-4"
        src="https://staticdelivery.nexusmods.com/mods/2600/images/3670/3670-1691406498-1770392602.png"
        alt="image i guess"
      />
      <h2 className="ml-2 text-2xl font-bold text-white">Download this mod</h2>
      <p className="ml-4 text-white">
        You can download it on NexusMods, where is the latest version:
      </p>
      <a
        className="ml-4 px-2 py-1 bg-orange-500 rounded-lg text-white"
        href="https://www.nexusmods.com/mysummercar/mods/3670"
      >
        <button className="mt-2">Download</button>
      </a>
      <p className="ml-4 text-white">
        You can also build it from source on GitHub:{" "}
      </p>
      <a
        className="ml-4 px-2 py-1 bg-black border-2 border-white rounded-lg text-white"
        href="https://github.com/ProgrammerAstolfo/AsphaltRoads"
      >
        <button className="mt-2">Source Code</button>
      </a>
      <br />
      <br />
      <h2 className="ml-2 text-2xl">Contributing</h2>
      <p className="mx-4">
        Since the GitHub repository is archived, you'll have to create a fork,
        then you <code>git clone</code> the repository, add references to My
        Summer Car libraries and modify the code.
      </p>
      <p className="mx-4">
        You push your changes on GitHub, and upload the mod on NexusMods,{" "}
        <u>where you link me as the original author of the mod</u>.
      </p>
      <FemboyFridayVirtualHeadpat />
      <Navbar sel="project" />
    </div>
  );
}
