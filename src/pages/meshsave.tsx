import Navbar from "@/components/NavBar";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import Head from "next/head";
import { CSSProperties } from "react";

const imageStyle: CSSProperties = {
  margin: "10px",
  width: "calc(100% - 20px)",
};

const inter = Inter({ subsets: ['latin'] })

export default function Meshsave() {
  function dl() {
    location.href = "/meshsave.txt";
  } 
  return (
    <div className={inter.className}>
      <Head>
        <title>Programmer Astolfo's Meshsave</title>
        <meta name="og:title" content="Programmer Astolfo's Meshsave" />
        <meta
          name="description"
          content="Programmer Astolfo's (fucked up) meshsave for My Summer Car."
        />
        <meta name="og:image" content="https://media.discordapp.net/attachments/768887055438053476/1042910848529739777/shitsuma1.png" />
        <meta name="theme-color" content="#FF77FF"></meta>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187"
     crossOrigin="anonymous"></script>
      </Head>

      <h1 className="text-3xl font-bold ml-2">My meshsave</h1>
      <p className="ml-4">
        In my save, the car looks like it has been through a war zone. The car's
        body is badly damaged and has been crashed at high speed multiple times.
        The mesh of the car is severely damaged and it looks like it has been
        pieced back together.{" "}
      </p>

      <div className="">
        <img
          className="drop-shadow-lg"
          style={imageStyle}
          src="https://media.discordapp.net/attachments/768887055438053476/1042910848529739777/shitsuma1.png"
          alt="shitsuma1"
        ></img>
        <img
          className="drop-shadow-lg"
          style={imageStyle}
          src="https://media.discordapp.net/attachments/768887055438053476/1042910848886259782/shitsuma2.png"
          alt="shitsuma2"
        ></img>
        <img
          className="drop-shadow-lg"
          style={imageStyle}
          src="https://media.discordapp.net/attachments/768887055438053476/1042910849192435812/shitsuma3.png"
          alt="shitsuma3"
        ></img>
        <img
          className="drop-shadow-lg"
          style={imageStyle}
          src="https://media.discordapp.net/attachments/768887055438053476/1042910849477652481/shitsuma4.png"
          alt="shitsuma4"
        ></img>
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-blue-600 text-white rounded-md px-2 py-1 ml-2"
        onClick={dl}
      >
        Download the meshsave
      </motion.button>
      <br />
      <br />
      <Navbar sel="meshsave" />
    </div>
  )
}