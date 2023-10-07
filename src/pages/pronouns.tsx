import Astolfo from "@/components/Astolfo";
import FemboyFridayVirtualHeadpat from "@/components/FemboyFridayVirtualHeadpat";
import Navbar from "@/components/NavBar";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Pronouns() {
  return (
    <div className={`${inter.className} text-white`}>
      <Head>
        <title>Programmer Astolfo's pronouns</title>
        <meta name="og:title" content="Programmer Astolfo's pronouns" />
        <meta
          name="description"
          content="Pronouns that Programmer Astolfo uses. Quick summary: \nhe/him\nCalling: Programmer Astolfo, Astolfo, mldk\nAddressing: cute, love, lover, patootie, honey, sweetie, baby, babe, cutie"
        />
        <meta
          name="og:image"
          content="https://media.discordapp.net/attachments/768887055438053476/1042910848529739777/shitsuma1.png"
        />
        <meta name="theme-color" content="#FF77FF" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <h1
        className="text-5xl my-4 text-center font-bold mx-auto w-max"
        style={{
          background:
            "linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Programmer Astolfo's pronouns
      </h1>
      <h2 className="text-2xl m-1 mx-6 font-bold ">Calling me</h2>
      <p className="m-1 mx-8 ">&bull; ❤️ Programmer Astolfo</p>
      <p className="m-1 mx-8 ">&bull; 👍 Astolfo</p>
      <h2 className="text-2xl m-1 mx-6 font-bold ">Pronouns</h2>
      <p className="m-1 mx-8 ">&bull; ❤️ he/him</p>
      <p className="m-1 mx-8 ">&bull; 👍 they/them</p>
      <h2 className="text-2xl m-1 mx-6 font-bold ">
        Addressing (Any concentration of the below options)
      </h2>
      <p className="m-1 mx-8 ">&bull; ❤️ cutie</p>
      <p className="m-1 mx-8 ">&bull; ❤️ love</p>
      <p className="m-1 mx-8 ">&bull; ❤️ lover</p>
      <p className="m-1 mx-8 ">&bull; ❤️ honey</p>
      <p className="m-1 mx-8 ">&bull; ❤️ sweetie</p>
      <p className="m-1 mx-8 ">&bull; ❤️ baby</p>
      <p className="m-1 mx-8 ">&bull; ❤️ babe</p>
      <p className="m-1 mx-8 ">&bull; ❤️ cutie</p>
      <p className="m-1 mx-8 ">&bull; ❤️ pookie</p>
      <p className="m-1 mx-8 ">&bull; ❤️ femboy</p>

      <h2 className="text-3xl m-2 mx-4 font-bold ">Meaning of these icons: </h2>

      <div className="flex ml-4">
        <div className="m-2 bg-[#3C0041] rounded-md p-1">
          <p className="text-2xl font-bold">❤️</p>
          <p className="">PLEASE USE THIS MASTER</p>
        </div>
        <div className="m-2 bg-[#3C0041] rounded-md p-1">
          <p className="text-2xl font-bold">👍</p>
          <p className="">Yuh uh</p>
        </div>
        <div className="m-2 bg-[#3C0041] rounded-md p-1">
          <p className="text-2xl font-bold">👎</p>
          <p className="">Nuh uh</p>
        </div>
      </div>

      <h2 className="text-3xl m-2 mx-4 font-bold ">Explore this website: </h2>

      <div className="flex">
        <div className="ml-8 text-center w-40 h-48 bg-gradient-to-b from-[#3C0041] to-black rounded-md relative">
          <p className="text-xl font-bold ">Homepage</p>
          <p className="">This is the homepage of this website.</p>
          <a href="/" className="bottom-2 absolute left-1/2 -translate-x-1/2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-blue-700 rounded-xl p-2 px-4 mr-2 "
            >
              Explore
            </motion.button>
          </a>
        </div>

        <div className="ml-8 text-center w-40 h-48 bg-gradient-to-b from-[#3C0041] to-black rounded-md relative">
          <p className="text-xl font-bold ">Projects</p>
          <p className="">This is a list of my projects</p>
          <a
            href="/projects"
            className="bottom-2 absolute left-1/2 -translate-x-1/2"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-blue-700 rounded-xl p-2 px-4 mr-2 "
            >
              Explore
            </motion.button>
          </a>
        </div>

        <div className="ml-8 text-center w-40 h-48 bg-gradient-to-b from-[#3C0041] to-black rounded-md relative">
          <p className="text-xl font-bold ">Socials</p>
          <p className="">A list of my social links</p>
          <a
            href="/socials"
            className="bottom-2 absolute left-1/2 -translate-x-1/2"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-blue-700 rounded-xl p-2 px-4 mr-2 "
            >
              Explore
            </motion.button>
          </a>
        </div>
      </div>
      <br />
      <br />
      <Astolfo />
      <FemboyFridayVirtualHeadpat />
      <Navbar sel="pronouns" />
    </div>
  );
}
