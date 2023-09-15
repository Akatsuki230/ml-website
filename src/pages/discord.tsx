import FemboyFridayVirtualHeadpat from "@/components/FemboyFridayVirtualHeadpat";
import Navbar from "@/components/NavBar";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import Head from "next/head";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Discord() {
  const [members, setMembers] = React.useState(0);
  const [onlineMembers, setOnlineMembers] = React.useState(0);
  const [loadedStats, setLoadedStats] = React.useState(false);
  const hasRan = React.useRef(false);

  React.useEffect(() => {
    if (hasRan.current) return;
    hasRan.current = true;
    fetch("/api/discord/stats")
      .then((x) => x.json())
      .then((x) => {
        setMembers(x.members);
        setOnlineMembers(x.online);
        setLoadedStats(true);
      });
  }, [setMembers, setOnlineMembers, setLoadedStats, hasRan]);

  return (
    <div className={inter.className}>
      <Head>
        <title>mldkyt's Discord server</title>
        <meta name="description" content="Join mldkyt's Discord server!" />
        <meta name="author" content="mldkyt" />
        <meta name="theme-color" content="#FF77FF" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <h1 className="mt-4 text-5xl text-center font-bold text-white">
        mldkyt's Discord server
      </h1>
      <div className="text-center">
        <a href="https://discord.gg/JgFNmSwYME">
          <button className="bg-blue-600 my-8 text-white px-4 py-2 rounded-md">
            Join now
          </button>
        </a>
      </div>
      {loadedStats ? (
        <>
          <p className="text-white ml-8 text-xl">
            <strong>{members}</strong> members
          </p>
          <p className="text-green-500 ml-8 text-xl">
            <strong>{onlineMembers}</strong> online members
          </p>
        </>
      ) : (
        <>
          <motion.p
            className="ml-8 text-xl"
            initial={{ color: "#444" }}
            animate={{ color: "#666" }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 0.5,
            }}
          >
            Loading member stats...
          </motion.p>
        </>
      )}
      <h2 className="text-3xl text-white px-4 mt-2 font-bold">
        What does the Discord server offer?
      </h2>
      <p className="px-6 text-xl text-white font-bold">Custom Discord bot</p>
      <p className="px-8 text-white">
        The Discord has a custom bot which has ChatPoints, CatPoints and more
      </p>
      <img
        src="/Discord_Rc5GfxUzw1.png"
        alt="Discord bot"
        className="mx-6 rounded-md mt-2"
      />

      <p className="text-3xl text-white px-4 mt-2 font-bold">
        Femboy and non-femboy general
      </p>
      <p className="px-8 text-white">
        The Discord has a general for femboys and a general with no femboys.
      </p>
      <img
        src="/Discord_rPGOKhh0Pi.png"
        alt="Normal channels"
        className="mx-6 rounded-md mt-2"
      />
      <img
        src="/Discord_TeiAyUoQ9J.png"
        alt="Femboy channels"
        className="mx-6 rounded-md mt-2"
      />

      <p className="text-3xl text-white px-4 mt-2 font-bold">
        My Summer Car modding support
      </p>
      <p className="px-8 text-white">
        There is a forum channel where you can get modding support for My Summer
        Car mods from the owner or from other members of the Discord server.
      </p>
      <img
        src="/Discord_rAkc4GD2Xv.png"
        alt="Modding support channel"
        className="mx-6 rounded-md mt-2"
      />

      <FemboyFridayVirtualHeadpat />
      <Navbar sel="" />
    </div>
  );
}
