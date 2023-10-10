import Astolfo from "@/components/Astolfo";
import FemboyFridayVirtualHeadpat from "@/components/FemboyFridayVirtualHeadpat";
import Navbar from "@/components/NavBar";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function AstolfoMod() {
  return (
    <div className={inter.className}>
      <Head>
        <title>AstolfOS | Programmer Astolfo's website</title>
        <meta name="og:title" content="AstolfOS" />
        <meta
          name="description"
          content="AstolfOS transfers your Ubuntu linux into AstolfOS!"
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
      <h1
        className="text-5xl mt-2 text-center font-bold text-white mx-auto w-max"
        style={{
          background:
            "linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        AstolfOS
      </h1>
      <h2 className="mx-2 text-white text-2xl font-bold">
        The changes that were made:
      </h2>

      <ul className="text-white">
        <li className="mx-4">&bull; Change OS name to AstolfOS</li>
        <li className="mx-4">&bull; Change KDE splash screen</li>
        <li className="mx-4">
          &bull; Change GRUB configuration to disable default logo
        </li>
        <li className="mx-4">&bull; Change neofetch configuration</li>
        <li className="mx-4">&bull; Update the terminal style</li>
      </ul>

      <details>
        <summary className="mx-2 text-white">Images/KDE</summary>
        <img src="/Screenshot_20231001_204658.png"></img>
        <img src="/Screenshot_20231001_205609.png"></img>
        <img src="/Screenshot_20231001_205725.png"></img>
      </details>

      <details>
        <summary className="mx-2 text-white">Images/Gnome</summary>
        <img src="/Screenshot from 2023-10-05 21-31-02.png"></img>
        <img src="/Screenshot from 2023-10-05 21-30-52.png"></img>
      </details>

      <details>
        <summary className="mx-2 text-white">Changelog</summary>
        <h2 className="text-xl mx-2 font-bold text-white">Version 1.1</h2>
        <ul className="mx-4 text-white">Fix neofetch installation</ul>
        <ul className="mx-4 text-white">Add editing of bash config</ul>
        <ul className="mx-4 text-white">
          Use shell commands a bit more properly
        </ul>
        <ul className="mx-4 text-white">Add support to Ubuntu Gnome</ul>
        <h2 className="text-xl mx-2 font-bold text-white">Version 1.0</h2>
        <ul className="mx-4 text-white">First release</ul>
      </details>

      <p className="mx-2 text-white">Script version: 1.1</p>

      <h2 className="text-white mx-2 text-2xl font-bold">All the documentation has moved to GitHub:</h2>
      <p className="text-white mx-2">Select "Automatic installation" if you use Ubuntu 22.04 and want to have everything done automatically.</p>
      <p className="text-white mx-2">Select "Manual installation" if you use other distro. Works on Arch too.</p>
      <p className="text-white mx-2">Select "Source code" to go straight to source code. Contains scripts as well as configuration files.</p>
      <a href="https://github.com/ProgrammerAstolfo/AstolfOS/wiki/Automatic-Installation-(Ubuntu-only)">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-600 text-white rounded-lg p-2 px-4 mx-2"
        >
          Automatic installation (recommended for Ubuntu users!)
        </motion.button>
      </a>
      <a href="https://github.com/ProgrammerAstolfo/AstolfOS/wiki/Manual-Installation">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-gray-600 text-white rounded-lg p-2 px-4 mx-2"
        >
          Manual installation (owo)
        </motion.button>
      </a>
      <a href="https://github.com/ProgrammerAstolfo/AstolfOS/wiki/Manual-Installation">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-gray-600 text-white rounded-lg p-2 px-4 mx-2"
        >
          Source code
        </motion.button>
      </a>

      <Astolfo />
      <FemboyFridayVirtualHeadpat />
      <Navbar sel="project" />
    </div>
  );
}
