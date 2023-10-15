import { Inter } from "next/font/google";
import { color, motion } from "framer-motion";
import Navbar from "@/components/NavBar";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import FemboyFridayVirtualHeadpat from "@/components/FemboyFridayVirtualHeadpat";
import Astolfo from "@/components/Astolfo";

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
        <meta
          name="description"
          content="Welcome to Programmer Astolfo's website!"
        />
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
            className="h-64"
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
                  <h1
                    className="text-5xl my-4"
                    style={{
                      background:
                        "linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    Programmer Astolfo
                  </h1>
                </div>
              </div>
              <p className="text-white">
                Czech | Femboy | 17 | Programmer
              </p>
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
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-blue-500 cursor-pointer"
                  onClick={() => setReadMore(false)}
                >
                  Show less &#x2190;
                </motion.button>
              </>
            )}

            {readMore || (
              <>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
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
          transition={{ duration: 1, delay: 0.7 }}
        >
          <div className="relative px-[10%] py-[10px] bg-gray-900">
            <h1
              className="text-3xl text-white font-bold w-max"
              style={{
                background:
                  "linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Hang out in my Discord server
            </h1>
            <p className="my-2 text-white">
              My Discord server with a custom bot.
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
                <button>Show it to me in detail :3</button>
              </a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <div className="relative px-[10%] py-[10px]">
            <h1 className="text-3xl text-white font-bold">
              Programmer Astolfo's Projects
            </h1>
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
            <div className="mt-4">
              <h2
                className="text-xl text-white font-bold w-max"
                style={{
                  background:
                    "linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Other projects
              </h2>
              <motion.div
                className="w-max"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <a
                  className="text-white bg-blue-600 p-1 px-2 rounded-md"
                  href="/projects"
                >
                  <button className="mt-2">View a full list :3</button>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <div className="relative px-[10%] py-[10px]">
            <h1 className="text-3xl text-white font-bold">
              Stalk Programmer Astolfo
            </h1>
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
                  href="https://youtube.com/@programmer.astolfo"
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
                  href="https://tiktok.com/@programmer.astolfo"
                >
                  <button className="mt-2">Follow</button>
                </a>
              </motion.div>
            </div>
            <div className="mt-4">
              <h2
                className="text-xl font-bold w-max"
                style={{
                  background:
                    "linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Other social links
              </h2>
              <motion.div
                className="w-max"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <a
                  className="text-white bg-blue-600 p-1 px-2 rounded-md"
                  href="/social"
                >
                  <button className="mt-2">View the full list :3</button>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <Astolfo />
        <FemboyFridayVirtualHeadpat />
      </div>

      <Navbar sel="home" />
    </div>
  );
}
