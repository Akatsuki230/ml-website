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
          name="description"
          content="Astolfo Forge mod adds Astolfo in 3 outfits and some items and commands for him!"
        />
        <meta
          name="og:image"
          content="https://mldkyt.com/Screenshot_20230929_132211.png"
        />
        <meta name="theme-color" content="#FF77FF" />
        <meta name="author" content="Programmer Astolfo" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <h1 className="text-5xl mt-2 mx-2 text-center font-bold text-white">Astolfo Forge Mod</h1>
      <h2 className="mx-2 text-white text-2xl font-bold">
        This mod adds:
      </h2>

      <ul className="text-white">
        <li className="mx-4">&bull; Astolfo in Casual outfit</li>
        <li className="mx-4">&bull; Astolfo in Armour outfit</li>
        <li className="mx-4">&bull; Astolfo in another outfit</li>
        <li className="mx-4">&bull; Astolfo flower, which spawns a lot of Astolfo when destroyed</li>
        <li className="mx-4">&bull; /duplicateastolfos command for more cuteness</li>
      </ul>

      <div className="mx-2 p-2 bg-red-800 rounded-xl">
        <h3 className="text-2xl font-bold text-white">CAUTION:</h3>
        <p className="text-white">This mod disables entity cramming in the world as soon as you load it! Be sure to back up your world files before trying.</p>
      </div>

      <details>
        <summary className="mx-2 text-white">Images</summary>
        <img src="/Screenshot_20230929_132211.png"></img>
        <img src="/Screenshot_20230929_202606.png"></img>
        <img src="/Screenshot_20230929_202616.png"></img>
        <img src="/Screenshot_20230929_202626.png"></img>
        <img src="/Screenshot_20230929_202633.png"></img>
      </details>

      <details>
        <summary className="mx-2 text-white">Changelog</summary>
        <h2 className="text-xl mx-2 font-bold">Version 1.0</h2>
        <ul className="mx-4">First release</ul>
      </details>

      <p className="mx-2 text-white">Mod version: 1.0</p>
      <a
        href="/tracker/downloads/astolfomod">
        <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="mx-2 m-1 p-2 px-4 bg-blue-600 rounded-md text-white">
          Download the mod from GitHub
        </motion.button>
      </a>

      <FemboyFridayVirtualHeadpat />
      <Navbar sel="project" />
    </div>
  )
}