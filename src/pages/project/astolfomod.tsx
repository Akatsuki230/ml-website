import Astolfo from "@/components/Astolfo";
import FemboyFridayVirtualHeadpat from "@/components/FemboyFridayVirtualHeadpat";
import Navbar from "@/components/NavBar";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })

export default function AstolfoMod() {
  return (
    <div className={inter.className}>
      <Head>
        <title>Astolfo Forge Mod | Programmer Astolfo's website</title>
        <meta name="og:title" content="Astolfo Forge mod" />
        <meta
          name="og:description"
          content="Astolfo Forge mod adds Astolfo in 3 outfits and some items and commands for him!"
        />
        <meta
          name="og:image"
          content="https://mldkyt.com/2023-10-06_21.34.58.png"
        />
        <meta name="theme-color" content="#FF77FF" />
        <meta name="author" content="Programmer Astolfo" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <h1 className="text-5xl mt-2 text-center font-bold text-white mx-auto w-max" style={{
          background:
            "linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}>Astolfo Forge Mod</h1>
      <h2 className="mx-2 text-white text-2xl font-bold">
        This mod adds:
      </h2>

      <ul className="text-white">
        <li className="mx-4">&bull; Astolfo in 4 outfits</li>
        <li className="mx-4">&bull; Astolfo flower, which spawns a lot of Astolfo when destroyed</li>
        <li className="mx-4">&bull; Felix</li>
        <li className="mx-4">&bull; Astolfo Sword</li>
        <li className="mx-4">&bull; Astolfo Biome</li>
        <li className="mx-4">&bull; Hideri</li>
        <li className="mx-4">&bull; Venti</li>
        <li className="mx-4">&bull; Rimuru</li>
        <li className="mx-4">&bull; Nagisa</li>
        <li className="mx-4">&bull; Sieg</li>
        <li className="mx-4">&bull; Bridget</li>
        <li className="mx-4">&bull; /duplicatecuties command for more cuteness &lt;3</li>
      </ul>

      <details>
        <summary className="mx-2 text-white">Images</summary>
        <img src="/2023-10-06_21.34.58.png"></img>
        <img src="/Screenshot_20230929_132211.png"></img>
        <img src="/Screenshot_20230929_202606.png"></img>
        <img src="/Screenshot_20230929_202616.png"></img>
        <img src="/Screenshot_20230929_202626.png"></img>
        <img src="/Screenshot_20230929_202633.png"></img>
      </details>

      <details>
        <summary className="mx-2 text-white">Changelog</summary>
        <h2 className="text-xl mx-2 font-bold text-white">Version 1.2</h2>
        <ul className="mx-4 text-white">Added Hideri</ul>
        <ul className="mx-4 text-white">Added Bridget</ul>
        <ul className="mx-4 text-white">Added Venti</ul>
        <ul className="mx-4 text-white">Added /cuterain</ul>
        <ul className="mx-4 text-white">Added /despawn</ul>
        <ul className="mx-4 text-white">Added /duplicatecuties</ul>
        <ul className="mx-4 text-white">Removed /duplicateastolfos</ul>
        <ul className="mx-4 text-white">Added Rimuru</ul>
        <ul className="mx-4 text-white">Added Nagisa</ul>
        <ul className="mx-4 text-white">Added Sieg</ul>
        <h2 className="text-xl mx-2 font-bold text-white">Version 1.1</h2>
        <ul className="mx-4 text-white">Added Astolfo Sword</ul>
        <ul className="mx-4 text-white">Added Astolfo Biome</ul>
        <ul className="mx-4 text-white">Added Felix Agryle</ul>
        <h2 className="text-xl mx-2 font-bold text-white">Version 1.0</h2>
        <ul className="mx-4 text-white">First release</ul>
      </details>

      <p className="mx-2 text-white">Mod version: 1.2</p>
      <a
        href="/tracker/downloads/astolfomod">
        <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="mx-2 m-1 p-2 px-4 bg-blue-600 rounded-md text-white">
          Download the mod from GitHub
        </motion.button>
      </a>

      <p className="mx-2 text-gray-500 text-sm">Made using MCreator.</p>
      <Astolfo />
      <FemboyFridayVirtualHeadpat />
      <Navbar sel="project" />
    </div>
  )
}