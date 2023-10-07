import { useState } from "react";
import Navbar from "@/components/NavBar";
import { Inter } from "next/font/google";
import Head from "next/head";
import FemboyFridayVirtualHeadpat from "@/components/FemboyFridayVirtualHeadpat";
import Astolfo from "@/components/Astolfo";

const inter = Inter({ subsets: ["latin"] });

export default function AstolfoResourcePack() {
  const [hideImages, setHideImages] = useState(false);

  const toggleImages = () => setHideImages(!hideImages);

  return (
    <div className={inter.className}>
      <Head>
        <title>Astolfo Resource Pack | Programmer Astolfo's website</title>
        <meta name="og:title" content="Astolfo Resource Pack" />
        <meta
          name="description"
          content="Astolfo Resource Pack is a resource pack for Minecraft which replaces the loading screen, logo and ending screen to be more Astolfo themed."
        />
        <meta
          name="og:image"
          content="https://mldkyt.com/javaw_9CTZlO2WlC.png"
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
        className="text-5xl mt-2 mx-auto text-center font-bold text-white w-max"
        style={{
          background:
            "linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Astolfo Resource Pack
      </h1>
      <p className="text-2xl font-bold text-center mx-2 text-white">
        MINECRAFT: :3 EDITION LETS GOOOO
      </p>
      <p className="mx-2 text-white">
        This resource pack changes the Minecraft loading screen, logo, totem of
        undying and ending screen to be more Astolfo themed.
      </p>
      <h2 className="text-xl mx-2  text-white">
        Images{" "}
        <button className="text-blue-500 cursor-pointer" onClick={toggleImages}>
          {hideImages ? "show" : "hide"}
        </button>
      </h2>

      <p className="mx-2 text-white">Installer version: 1.0</p>
      <a href="https://github.com/Astolph0/AstolfoResourcePackInstaller/releases/download/release-1.0/AstolfoResourcePackInstaller.exe">
        <button className="mx-2 m-1 p-2 px-4 bg-blue-500 rounded-md text-white">
          Download installer (recommended!)
        </button>
      </a>
      <a href="https://github.com/Astolph0/AstolfoResourcePack/releases/tag/releases">
        <button className="mx-2 m-1 p-2 px-4 bg-gray-500 rounded-md text-white">
          Manual download and installation instructions
        </button>
      </a>

      {hideImages || (
        <>
          <img
            className="mx-2 rounded-md"
            src="/javaw_XU7cPPUNy2.png"
            alt="Astolfo Resource Pack"
          />
          <img
            className="mx-2 rounded-md"
            src="/javaw_9CTZlO2WlC.png"
            alt="Astolfo Resource Pack"
          />
          <img
            className="mx-2 rounded-md"
            src="/javaw_fcqiaAZDlS.png"
            alt="Astolfo Resource Pack"
          />
        </>
      )}

      <p className="ml-2 text-white">Installer version: 1.0</p>
      <a href="https://github.com/Astolph0/AstolfoResourcePackInstaller/releases/download/release-1.0/AstolfoResourcePackInstaller.exe">
        <button className="mx-2 m-1 p-2 px-4 bg-blue-500 rounded-md text-white">
          Download installer (recommended!)
        </button>
      </a>
      <a href="https://github.com/Astolph0/AstolfoResourcePack/releases/tag/releases">
        <button className="mx-2 m-1 p-2 px-4 bg-gray-500 rounded-md text-white">
          Manual download and installation instructions
        </button>
      </a>

      <Astolfo />
      <FemboyFridayVirtualHeadpat />
      <Navbar sel="project" />
    </div>
  );
}
