import FemboyFridayVirtualHeadpat from "@/components/FemboyFridayVirtualHeadpat";
import Navbar from "@/components/NavBar";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] })

export default function OldCarSounds() {
  return (
    <div className={inter.className}>
      <Head>
        <title>OldCarSounds | Programmer Astolfo</title>
        <meta name="og:title" content="OldCarSounds" />
        <meta
          name="description"
          content="OldCarSounds is a mod for My Summer Car which returns old sounds from old builds of My Summer Car and puts them in the newest version of the game."
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
      <h1 className="text-center mt-2 text-5xl font-bold  text-white">OldCarSounds</h1>
      <p className="mx-2 text-white">
        OldCarSounds (also OCS, Old Car Sounds) is a mod for My Summer Car which
        returns old sounds from old builds of My Summer Car and puts them in the
        newest version of the game.
      </p>
      <h2 className="ml-2 font-bold text-2xl text-white">Download this mod</h2>
      <p className="ml-4 text-white">
        You can download it on NexusMods, where is the latest version:
      </p>
      <a
        className="ml-4 px-2 py-1 bg-orange-500 rounded-lg text-white"
        href="https://www.nexusmods.com/mysummercar/mods/3666"
      >
      <button className="mt-1">Download</button>
      </a>
      <p className="ml-4 text-white">
        Or you can download an older release from the GitHub repository:
      </p>
      <a
        className="ml-4 px-2 py-1 bg-black border-2 border-white rounded-lg text-white"
        href="https://www.github.com/ProgrammerAstolfo/OldCarSounds/releases"
      >
        <button className="mt-1">Releases</button>
      </a>
      <br />
      <br />
      <h2 className="ml-2 text-2xl font-bold text-white">Contributing</h2>
      <p className="mx-4 text-white">
        Since the GitHub repository is archived, you'll have to create a fork,
        then you <code>git clone</code> the repository, add references to My
        Summer Car libraries and modify the code.
      </p>
      <p className="mx-4 text-white">
        You push your changes on GitHub, and upload the mod on NexusMods,{" "}
        <u>where you link me as the original author of the mod</u>.
      </p>
      <FemboyFridayVirtualHeadpat />
      <Navbar sel="project" />
    </div>
  );
}
