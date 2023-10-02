import FemboyFridayVirtualHeadpat from "@/components/FemboyFridayVirtualHeadpat";
import Navbar from "@/components/NavBar";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import Head from "next/head";
import { CSSProperties, useState } from "react";

const itemStyle: CSSProperties = {
  width: "calc(100% - 45px)",
};

const inter = Inter({ subsets: ["latin"] });

export default function Projects() {
  const [placeStarting, setPlaceStarting] = useState(false);

  return (
    <div className={inter.className}>
      <Head>
        <title>Programmer Astolfo's projects</title>
        <meta name="og:title" content="Programmer Astolfo's projects" />
        <meta name="description" content="Programmer Astolfo's projects." />
        <meta name="theme-color" content="#FF77FF" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <h1 className="text-5xl text-center font-bold px-2 my-4 text-white">
        Programmer Astolfo's project list
      </h1>
      <p className="ml-6 text-white">This is a full list of Programmer Astolfo's projects.</p>

      <h2 className="text-2xl px-4 text-white">Online Projects</h2>

      <div
        style={itemStyle}
        className="bg-[#2B0029] m-4 py-2 rounded-lg drop-shadow-none"
      >
        <h3 className="ml-2 text-xl text-white">Astolph0/place</h3>
        <p className="ml-4 text-white">
          This is a 100x100 grid where anyone can view and if you create an
          account using username and password, you can also place tiles every 5
          minutes.
        </p>
        <motion.div
          className={`w-max ml-2 ${placeStarting ? "pointer-events-none" : ""}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setPlaceStarting(true)}
        >
          <a
            className="bg-blue-600 rounded-lg p-0.5 px-1 text-white"
            href="https://place.mldkyt.com"
          >
            {placeStarting ? "Starting, please wait..." : "Start"}
          </a>
        </motion.div>
      </div>

      <h2 className="text-2xl px-4 text-white">Fun Apps</h2>

      <div
        style={itemStyle}
        className="bg-[#2B0029] m-4 py-2 rounded-lg drop-shadow-none"
      >
        <h3 className="px-2 text-xl text-white">Astolfo Is Coming For You</h3>
        <p className="px-4 text-white">
          A program that if you run on your PC, Astolfo will come to your house.
        </p>
        <motion.div
          className="w-max ml-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            className="bg-blue-600 rounded-lg p-0.5 px-1 text-white"
            href="/project/astolfoiscomingforyou"
          >
            View
          </a>
        </motion.div>
      </div>

      <h2 className="text-2xl px-4 text-white">AstolfOS</h2>

      <div
        style={itemStyle}
        className="bg-[#2B0029] m-4 py-2 rounded-lg drop-shadow-none"
      >
        <h3 className="px-2 text-xl text-white">AstolfOS</h3>
        <p className="px-4 text-white">
          The Astolfo Operating System, based on Ubuntu.
        </p>
        <motion.div
          className="w-max ml-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            className="bg-blue-600 rounded-lg p-0.5 px-1 text-white"
            href="/project/astolfos"
          >
            View
          </a>
        </motion.div>
      </div>

      <h2 className="text-2xl px-4 text-white">Minecraft Related</h2>

      <div
        style={itemStyle}
        className="bg-[#2B0029] m-4 py-2 rounded-lg drop-shadow-none"
      >
        <h3 className="px-2 text-xl text-white">Astolfo Forge mod</h3>
        <p className="px-4 text-white">
          This mod adds Astolfo into the game. It's made for Forge
        </p>
        <motion.div
          className="w-max ml-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            className="bg-blue-600 rounded-lg p-0.5 px-1 text-white"
            href="/project/astolfomod"
          >
            View
          </a>
        </motion.div>
      </div>

      <div
        style={itemStyle}
        className="bg-[#2B0029] m-4 py-2 rounded-lg drop-shadow-none"
      >
        <h3 className="px-2 text-xl text-white">Astolfo Resource Pack</h3>
        <p className="px-4 text-white">
          This resource pack Makes Minecraft: :3 Edition. It is the first
          resource pack to make Minecraft not mid.
        </p>
        <motion.div
          className="w-max ml-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            className="bg-blue-600 rounded-lg p-0.5 px-1 text-white"
            href="/project/astolforesourcepack"
          >
            View
          </a>
        </motion.div>
      </div>

      <h2 className="text-2xl px-4 text-white">My Summer Car mods</h2>

      <div
        style={itemStyle}
        className="bg-[#2B0029] m-4 py-2 rounded-lg drop-shadow-none"
      >
        <h3 className="px-2 text-xl text-white">Asphalt Roads</h3>
        <p className="px-4 text-white">
          Asphalt roads is a mod that replaces dirt roads with asphalt roads in
          My Summer Car.
        </p>
        <motion.div
          className="w-max ml-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            className="bg-blue-600 rounded-lg p-0.5 px-1 text-white"
            href="/project/asphaltroads"
          >
            View
          </a>
        </motion.div>
      </div>
      <div
        style={itemStyle}
        className="bg-[#2B0029] m-4 py-2 rounded-lg drop-shadow-none"
      >
        <h3 className="px-2 text-xl text-white">OldCarSounds</h3>
        <p className="px-4 text-white">
          OldCarSounds is a mod for My Summer Car that replaces the sounds of
          the Satsuma with the sounds of the old Satsuma from old builds.
        </p>
        <motion.div
          className="w-max ml-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            className="bg-blue-600 rounded-lg p-0.5 px-1 text-white"
            href="/project/oldcarsounds"
          >
            View
          </a>
        </motion.div>
      </div>
      <div
        style={itemStyle}
        className="bg-[#2B0029] m-4 py-2 rounded-lg drop-shadow-none"
      >
        <h3 className="px-2 text-xl text-white">MSC Tweaks</h3>
        <p className="px-4 text-white">
          MSC Tweaks is a set of tweaks for My Summer Car.
        </p>
        <motion.div
          className="w-max ml-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            className="bg-blue-600 rounded-lg p-0.5 px-1 text-white"
            href="/project/msctweaks"
          >
            View
          </a>
        </motion.div>
      </div>

      <h2 className="text-2xl px-4 text-white">GitHub</h2>

      <div
        style={itemStyle}
        className="bg-[#2B0029] m-4 py-2 rounded-lg drop-shadow-none"
      >
        <h3 className="px-2 text-xl text-white">My GitHub Profile</h3>
        <motion.div
          className="w-max ml-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            className="bg-blue-600 rounded-lg p-0.5 px-1 text-white"
            href="https://github.com/Astolph0"
          >
            View
          </a>
        </motion.div>
      </div>

      <FemboyFridayVirtualHeadpat />
      <Navbar sel="project" />
    </div>
  );
}
