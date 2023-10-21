import Astolfo from "@/components/Astolfo";
import FemboyFridayVirtualHeadpat from "@/components/FemboyFridayVirtualHeadpat";
import Navbar from "@/components/NavBar";
import ViewTracker from "@/components/ViewTracker";
import {motion} from "framer-motion";
import {Inter} from "next/font/google";
import Head from "next/head";
import {CSSProperties} from "react";

const itemStyle: CSSProperties = {
  width: "calc(100% - 45px)",
};

const inter = Inter({subsets: ["latin"]});

export default function Social() {
  return (
    <div className={`${inter.className} text-white`}>
      <Head>
        <title>Programmer Astolfo's social links</title>
        <meta name="og:title" content="Programmer Astolfo's social links"/>
        <meta name="description" content="Programmer Astolfo's social links."/>
        <meta name="theme-color" content="#FF77FF"/>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <h1 className="text-5xl mt-2 text-center font-bold mx-auto w-max" style={{
          background:
            "linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}>Programmer Astolfo's social links</h1>
      <p className="mx-8 text-lg ">Welcome to my social link page!</p>

      <div
        className="bg-[#2B0029] m-4 py-2 rounded-lg drop-shadow-none"
        style={itemStyle}
      >
        <h2 className="px-2 text-xl ">Discord Server</h2>
        <p className="px-4 ">
          Join my Discord server full of femboys and non-femboys. It has a custom bot.
          I also have a section dedicated to My Summer Car modding and help.
        </p>

        <motion.div
          className="w-max ml-2"
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
        >
          <a
            rel="noopener"
            className="bg-blue-600 rounded-lg p-0.5 px-1"
            href="/discord"
          >
            Hop in!
          </a>
        </motion.div>
      </div>

      <div
        className="bg-[#2B0029] m-4 py-2 rounded-lg drop-shadow-none"
        style={itemStyle}
      >
        <h2 className="px-2 text-xl ">MC Username</h2>
        <p className="px-4 ">
          My Minecraft username is "<b>ProgramerAstolfo</b>".
        </p>
        <p className="px-4">
          There is one M because of the 16 character limit.
        </p>

        <motion.div
          className="w-max ml-2"
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
        >
          <a
            rel="noopener"
            target="_blank"
            className="bg-blue-600 rounded-lg p-0.5 px-1"
            href="https://cs.namemc.com/profile/ProgramerAstolfo.1"
          >
            NameMC profile
          </a>
        </motion.div>
      </div>

      <div
        className="bg-[#2B0029] m-4 py-2 rounded-lg drop-shadow-none"
        style={itemStyle}
      >
        <h2 className="px-2 text-xl ">Steam</h2>

        <motion.div
          className="w-max ml-2"
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
        >
          <a
            rel="noopener"
            target="_blank"
            className="bg-blue-600 rounded-lg p-0.5 px-1"
            href="https://steamcommunity.com/id/programmerastolfo/"
          >
            Open
          </a>
        </motion.div>
      </div>

      <div
        className="bg-[#2B0029] m-4 py-2 rounded-lg drop-shadow-none"
        style={itemStyle}
      >
        <h2 className="px-2 text-xl">Discord server</h2>
        <p className="px-4 ">
          My Discord server is where I post updates about new videos and where
          you can get My Summer Car modding help. Note the server is very
          inactive
        </p>
        <motion.div
          className="w-max ml-2"
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
        >
          <a
            rel="noopener"
            target="_blank"
            className="bg-blue-600 rounded-lg p-0.5 px-1"
            href="/discord"
          >
            Join
          </a>
        </motion.div>
      </div>
      <div
        className="bg-[#2B0029] m-4 py-2 rounded-lg drop-shadow-none"
        style={itemStyle}
      >
        <h2 className="px-2 text-xl ">YouTube</h2>
        <p className="px-4 ">
          My YouTube channel is where I upload my videos.
        </p>
        <motion.div
          className="w-max ml-2"
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
        >
          <a
            rel="noopener"
            target="_blank"
            className="bg-blue-600 rounded-lg p-0.5 px-1"
            href="https://youtube.com/@programmer.astolfo"
          >
            Subscribe
          </a>
        </motion.div>
      </div>
      
      <div
        className="bg-[#2B0029] m-4 py-2 rounded-lg drop-shadow-none"
        style={itemStyle}
      >
        <h2 className="px-2 text-xl ">TikTok</h2>
        <p className="px-4 ">
          TikTok is where I post short code tutorials.
        </p>

        <motion.div
          className="w-max ml-2"
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
        >
          <a
            rel="noopener"
            target="_blank"
            className="bg-blue-600 rounded-lg p-0.5 px-1"
            href="https://www.tiktok.com/@programmer.astolfo"
          >
            Follow
          </a>
        </motion.div>
      </div>
      <div
        className="bg-[#2B0029] m-4 py-2 rounded-lg drop-shadow-none"
        style={itemStyle}
      >
        <h2 className="px-2 text-xl ">NexusMods</h2>
        <p className="px-4 ">This is my mod publishing profile.</p>

        <motion.div
          className="w-max ml-2"
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
        >
          <a
            rel="noopener"
            target="_blank"
            className="bg-blue-600 rounded-lg p-0.5 px-1"
            href="https://www.nexusmods.com/users/57424716"
          >
            Open profile
          </a>
        </motion.div>
      </div>

      <ViewTracker />
      <Astolfo />
      <FemboyFridayVirtualHeadpat />
      <Navbar sel="social"/>
    </div>
  );
}
