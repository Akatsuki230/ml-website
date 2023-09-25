import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import Navbar from "@/components/NavBar";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import FemboyFridayVirtualHeadpat from "@/components/FemboyFridayVirtualHeadpat";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const hasRan = useRef(false);
  const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    if (hasRan.current) return;
    hasRan.current = true;

    window.scrollTo(0, 0);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  });

  return (
    <div className={inter.className}>
      <Head>
        <title>Programmer Astolfo's website</title>
        <meta name="description" content="Welcome to Programmer Astolfo's website!" />
        <meta name="author" content="Programmer Astolfo" />
        <meta name="theme-color" content="#FF77FF" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <div className="absolute left-0 top-0 w-screen">
        <div className="bg-gradient-to-b from-[#2B0029] to-black">
          <motion.div
            className="h-56"
            initial={{ opacity: 0, transform: "scale(0.8) translateY(-100px)" }}
            animate={{ opacity: 1, transform: "scale(1) translateY(0)" }}
            transition={{ duration: 1, ease: "backOut" }}
          >
            <div className="relative px-[10%] top-1/2 -translate-y-1/2">
              <div className="flex">
                <div className="relative top-5">
                  <img
                    src="/pfp.png"
                    alt="Astolfo Profile Picture"
                    className="rounded-full w-10"
                  />
                </div>
                <div className="ml-4">
                  <h1 className="text-5xl my-4 text-white">Programmer Astolfo</h1>
                </div>
              </div>
              <p className="text-white">Scroll down &#x2193;</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="relative px-[10%] py-[10px]">
            <p className="my-4 text-white bg-blue-900 p-2 px-4 rounded-lg">
              I am in the progress of changing names. My old name is mldkyt and I'm changing everywhere to "Programmer Astolfo".
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <div className="relative px-[10%] py-[10px]">
            <h1 className="text-3xl text-white font-bold">About me</h1>
            <p className="my-4 text-white">
              I am proficient in writing code across a wide array of programming
              languages, encompassing a diverse spectrum of options. These
              languages encompass C#, C++, C, Python, Java, Kotlin, JavaScript,
              TypeScript, HTML, and CSS. My experience and expertise in the
              realm of programming are substantial, having dedicated over a
              decade to crafting and refining code.
            </p>

            {readMore && (
              <>
                <motion.p
                  initial={{ opacity: 0, fontSize: "0%" }}
                  animate={{ opacity: 1, fontSize: "100%" }}
                  transition={{ duration: 1 }}
                  className="my-4 text-white"
                >
                  Over the course of my extensive journey in the realm of
                  programming, I've delved into the nuances and intricacies of
                  various languages, each with its unique syntax and
                  application. C# and C++ offer robust capabilities for software
                  development, while C itself provides a foundational
                  understanding of programming principles. Python, renowned for
                  its simplicity and versatility, has been a valuable tool in
                  numerous projects. Java and Kotlin enable cross-platform
                  compatibility, bolstering my repertoire for mobile and web
                  applications. JavaScript and TypeScript empower me to create
                  dynamic and interactive web experiences, while HTML and CSS
                  lay the foundation for web development.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, fontSize: "0%" }}
                  animate={{ opacity: 1, fontSize: "100%" }}
                  transition={{ duration: 1 }}
                  className="my-4 text-white"
                >
                  My decade-long voyage in programming has been marked by
                  continuous learning and adaptation. Staying abreast of the
                  latest advancements and best practices has been integral to my
                  growth as a programmer. Throughout this journey, I've
                  undertaken diverse projects, tackling challenges and honing my
                  problem-solving skills.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, fontSize: "0%" }}
                  animate={{ opacity: 1, fontSize: "100%" }}
                  transition={{ duration: 1 }}
                  className="my-4 text-white"
                >
                  In essence, my proficiency across these programming languages,
                  coupled with my extensive experience, positions me as a
                  versatile and capable programmer, equipped to navigate the
                  multifaceted landscape of software development with finesse.
                </motion.p>
                <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}
                  className="text-blue-500 cursor-pointer"
                  onClick={() => setReadMore(false)}
                >
                  Show less &#x2190;
                </motion.button>
              </>
            )}

            {readMore || (
              <>
                <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}
                  className="text-blue-500 cursor-pointer"
                  onClick={() => setReadMore(true)}
                >
                  Show more &#x2192;
                </motion.button>
              </>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <div className="relative px-[10%] py-[10px]">
            <h1 className="text-3xl text-white font-bold">
              Hang out in my Discord server
            </h1>
            <p className="my-2 text-white">
              A Discord server full of femboys and non-femboys. It has a custom bot.
              I also have a section dedicated to My Summer Car modding and help.
            </p>
            <motion.div
              className="w-max"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                className="text-white bg-blue-600 p-1 px-2 rounded-md"
                href="/discord"
              >
                <button>Hop in!</button>
              </a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <div className="relative px-[10%] py-[10px]">
            <h1 className="text-3xl text-white font-bold">Programmer Astolfo's Projects</h1>
            <div className="mt-6">
              <h2 className="text-xl text-white font-bold">Astolph0/place</h2>
              <p className="text-white">An r/place clone</p>
              <motion.div
                className="w-max"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <a
                  className="text-white bg-blue-600 p-1 px-2 rounded-md"
                  href="https://place.mldkyt.com/"
                >
                  <button className="mt-2">Open</button>
                </a>
              </motion.div>
            </div>
            <div className="mt-4">
              <h2 className="text-xl text-white font-bold">
                Astolfo Resource Pack
              </h2>
              <p className="text-white">A resource pack for Minecraft</p>
              <motion.div
                className="w-max"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <a
                  className="text-white bg-blue-600 p-1 px-2 rounded-md"
                  href="/project/astolforesourcepack"
                >
                  <button className="mt-2">Download</button>
                </a>
              </motion.div>
            </div>
            <div className="mt-4">
              <h2 className="text-xl text-white font-bold">Asphalt Roads</h2>
              <p className="text-white">A mod for My Summer Car</p>
              <motion.div
                className="w-max"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <a
                  className="text-white bg-blue-600 p-1 px-2 rounded-md"
                  href="/project/asphaltroads"
                >
                  <button className="mt-2">Download</button>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <div className="relative px-[10%] py-[10px]">
            <h1 className="text-3xl text-white font-bold">Stalk Programmer Astolfo</h1>
            <div className="mt-6">
              <h2 className="text-xl text-white font-bold">
                <span className="text-red-500">You</span>Tube
              </h2>
              <motion.div
                className="w-max"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <a
                  className="text-white bg-blue-600 p-1 px-2 rounded-md"
                  href="https://youtube.com/@Programmer Astolfo"
                >
                  <button className="mt-2">Subscribe</button>
                </a>
              </motion.div>
            </div>
            <div className="mt-4">
              <h2 className="text-xl text-white font-bold">
                <span className="text-[#25f4ee]">Tik</span>
                <span className="text-[#ee1d52]">Tok</span>
              </h2>
              <motion.div
                className="w-max"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <a
                  className="text-white bg-blue-600 p-1 px-2 rounded-md"
                  href="https://tiktok.com/@astolph0_"
                >
                  <button className="mt-2">Follow</button>
                </a>
              </motion.div>
            </div>
            <div className="mt-4">
              <h2 className="text-xl text-white font-bold">
                <span className="text-[#a970ff]">Twitch</span>
              </h2>
              <motion.div
                className="w-max"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <a
                  className="text-white bg-blue-600 p-1 px-2 rounded-md"
                  href="https://twitch.tv/Programmer Astolfo"
                >
                  <button className="mt-2">Follow</button>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <FemboyFridayVirtualHeadpat />
      </div>

      <Navbar sel="home" />
    </div>
  );
}
