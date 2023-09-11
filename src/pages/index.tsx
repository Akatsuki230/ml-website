import { Inter } from 'next/font/google'
import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/NavBar';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [showProgrammingList, setShowProgrammingList] = useState(false);
  const [placeStarting, setPlaceStarting] = useState(false);

  return (
    <div className={inter.className}>
      <Head>
        <title>Programmer Astolfo's website</title>
        <meta name="description" content="Welcome to Programmer Astolfo's website!" />
        <meta name='author' content='Programmer Astolfo | mldkyt' />
        <meta name='theme-color' content='#FF77FF' />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187" crossOrigin="anonymous"></script>
      </Head>
      <h1 className="text-4xl mx-2 my-4 text-center">
        Welcome to Programmer Astolfo's website!
      </h1>
      <h2 className="text-2xl mx-2 font-bold">About me</h2>
      <div className="mx-1 text-lg">
        Your shitposting, coding, crossdressing paladin Astolfo.
      </div>
      <div className="mx-1 flex flex-row flex-wrap">
        mldkyt is a YouTuber, TikToker and was a MSC modder.
      </div>
      <div className="mx-1">
        mldkyt has experience in{" "}
        {showProgrammingList ? (
          <span>
            C#, C++, C, Python, Java, Kotlin, JavaScript, TypeScript, HTML, CSS
            and more.{" "}
            <span
              className="text-blue-400 cursor-pointer"
              onClick={() => setShowProgrammingList(false)}
            >
              hide
            </span>
          </span>
        ) : (
          <span
            className="text-blue-400 cursor-pointer"
            onClick={() => setShowProgrammingList(true)}
          >
            show languages
          </span>
        )}
      </div>
      <div className="mx-1">
        You can join my{" "}
        <a href="https://discord.gg/JgFNmSwYME" className="text-blue-400">
          Discord
        </a>{" "}
        server. You can also subscribe on{" "}
        <a href="https://youtube.com/@mldkyt" className="text-blue-400">
          YouTube
        </a>{" "}
        and follow on{" "}
        <a href="https://tiktok.com/u/mldkyt" className="text-blue-400">
          TikTok
        </a>
        .
      </div>

      <h2 className="m-2 ml-2 text-2xl font-bold">Some of my projects: </h2>

      <div className='mx-2 p-1 border-2 border-gray-800 rounded-xl bg-gray-800'>
        <div className="mx-4 mt-2 p-2 bg-[#2B0029] rounded-lg drop-shadow-xl">
          <h3 className="ml-2 text-xl">Asphalt Roads</h3>
          <p className="ml-4">
            A mod for My Summer Car that changes dirt roads to asphalt roads.
          </p>
          <a href="/project/asphaltroads">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="ml-2 bg-blue-700 hover:bg-blue-600 active:bg-blue-900 px-2 py-1 rounded-lg"
            >
              More info
            </motion.button>
          </a>
        </div>
        <div className="mx-4 mt-2 p-2 bg-[#2B0029] rounded-lg drop-shadow-xl">
          <h3 className="ml-2 text-xl">Astolfo Resource Pack</h3>
          <p className="ml-4">
            A resource pack for Minecraft that adds Astolfo.
          </p>
          <a href="/project/astolforesourcepack">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="ml-2 bg-blue-700 hover:bg-blue-600 active:bg-blue-900 px-2 py-1 rounded-lg"
            >
              More info / Download
            </motion.button>
          </a>
        </div>
        <div className="mx-4 mt-2 p-2 bg-[#2B0029] rounded-lg drop-shadow-xl">
          <h3 className="ml-2 text-xl">Astolph0/place</h3>
          <p className="ml-4">
            This is a 100x100 grid where anyone can view and if you create an account using username and password, you can also place tiles every 5 minutes.
          </p>
          <a href="https://place.mldkyt.com">
            <motion.button
              disabled={placeStarting}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="ml-2 bg-blue-700 hover:bg-blue-600 active:bg-blue-900 px-2 py-1 rounded-lg"
              onClick={() => setPlaceStarting(true)}
            >
              {placeStarting ? 'Starting, please give it a while...' : 'Start'}
            </motion.button>
          </a>
        </div>

        <br />
        <a href="/projects">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="ml-2 bg-blue-700 hover:bg-blue-600 active:bg-blue-900 px-2 py-1 rounded-lg"
          >
            Open full project list
          </motion.button>
        </a>
      </div>

      <h2 className="m-2 ml-2 text-2xl font-bold">
        Don't forget to follow me here:{" "}
      </h2>

      <div className="flex">
        <a href="https://youtube.com/@mldkyt">
          <motion.button
            initial={{
              scale: 1.0,
              backgroundImage: "linear-gradient(to bottom, #511, #511, #111)",
            }}
            whileHover={{
              scale: 1.1,
              backgroundImage: "linear-gradient(to bottom, #511, #511, #211)",
            }}
            whileTap={{
              scale: 0.9,
              backgroundImage: "linear-gradient(to bottom, #311, #111, #111)",
            }}
            className="px-8 py-4 m-2 bg-gradient-to-b rounded-xl"
          >
            YouTube
          </motion.button>
        </a>
        <a href="https://www.tiktok.com/@astolph0_">
          <motion.button
            initial={{
              scale: 1.0,
              backgroundImage: "linear-gradient(to bottom, #155, #155, #111)",
            }}
            whileHover={{
              scale: 1.1,
              backgroundImage: "linear-gradient(to bottom, #155, #155, #122)",
            }}
            whileTap={{
              scale: 0.9,
              backgroundImage: "linear-gradient(to bottom, #133, #111, #111)",
            }}
            className="px-8 py-4 m-2 bg-gradient-to-b rounded-xl"
          >
            TikTok
          </motion.button>
        </a>
        <a href="/discord">
          <motion.button
            initial={{
              scale: 1.0,
              backgroundImage: "linear-gradient(to bottom, #136, #136, #111)",
            }}
            whileHover={{
              scale: 1.1,
              backgroundImage: "linear-gradient(to bottom, #136, #136, #122)",
            }}
            whileTap={{
              scale: 0.9,
              backgroundImage: "linear-gradient(to bottom, #123, #111, #111)",
            }}
            className="px-8 py-4 m-2 bg-gradient-to-b rounded-xl"
          >
            Discord Server
          </motion.button>
        </a>
      </div>

      <h2 className="m-2 ml-2 text-2xl font-bold">Some cool links: </h2>

      <a className="ml-4 text-blue-500" href="/newestvideo">
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Latest video hotlink
        </motion.button>
      </a>
      <span
        className="text-blue-500 cursor-pointer"
        onClick={() =>
          navigator.clipboard.writeText("https://mldkyt.com/newestvideo")
        }
      >
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          (Copy link)
        </motion.button>
      </span>
      <br />
      <a className="ml-4 text-blue-500" href="/neweststream">
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Latest stream hotlink
        </motion.button>
      </a>
      <span
        className="text-blue-500 cursor-pointer"
        onClick={() =>
          navigator.clipboard.writeText("https://mldkyt.com/neweststream")
        }
      >
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          (Copy link)
        </motion.button>
      </span>

      <h2 className="m-2 ml-2 text-2xl font-bold">
        What can you find on this website:{" "}
      </h2>

      <div className="bg-[#2B0029] rounded-lg p-2 mx-4">
        <h3 className="ml-2 text-xl font-bold">Meshsave</h3>
        <p className="ml-4">
          The meshsave is a save for My Summer Car that makes the car look like
          it's been through world wars.
        </p>
        <a href="/meshsave">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="ml-2 bg-blue-600 p-1 px-2 rounded-lg hover:bg-blue-600 active:bg-blue-900"
          >
            Go
          </motion.button>
        </a>
      </div>
      <div className="bg-[#2B0029] rounded-lg p-2 mx-4 mt-2">
        <h3 className="ml-2 text-xl font-bold">Projects</h3>
        <p className="ml-4">
          This is my project list. Contains some online utilities.
        </p>
        <a href="/projects">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="ml-2 bg-blue-600 p-1 px-2 rounded-lg hover:bg-blue-600 active:bg-blue-900"
          >
            Go
          </motion.button>
        </a>
      </div>
      <div className="bg-[#2B0029] rounded-lg p-2 mx-4 mt-2">
        <h3 className="ml-2 text-xl font-bold">Socials</h3>
        <p className="ml-4">
          This is my social link list. You will find more than what you just saw
          above.
        </p>
        <a href="/social">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="ml-2 bg-blue-600 p-1 px-2 rounded-lg hover:bg-blue-600 active:bg-blue-900"
          >
            Go
          </motion.button>
        </a>
      </div>
      <div className="bg-[#2B0029] rounded-lg p-2 mx-4 mt-2">
        <h3 className="ml-2 text-xl font-bold">Pronouns</h3>
        <p className="ml-4">
          These are my pronouns. You can use them if you want to, or just use
          he/him.
        </p>
        <a href="/pron">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="ml-2 bg-blue-600 p-1 px-2 rounded-lg hover:bg-blue-600 active:bg-blue-900"
          >
            Go
          </motion.button>
        </a>
      </div>

      <br />
      <br />

      <p className="fixed bottom-2 left-2 italic">
        p.s. i am not a webpage designer and i am not native english
      </p>
      <Navbar sel="home" />
    </div>
  )
}
