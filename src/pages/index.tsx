import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import Navbar from "@/components/NavBar";
import Head from "next/head";
import { useEffect, useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const hasRan = useRef(false);

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
        <meta name="author" content="Programmer Astolfo | mldkyt" />
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
            className="h-96"
            initial={{ opacity: 0, transform: "scale(0.8) translateY(-100px)" }}
            animate={{ opacity: 1, transform: "scale(1) translateY(0)" }}
            transition={{ duration: 1, ease: "backOut" }}
          >
            <div className="relative px-[10%] top-1/2 -translate-y-1/2">
              <div className="flex">
                <div className="relative top-6">
                  <img
                    src="/pfp.png"
                    alt="Astolfo Profile Picture"
                    className="rounded-full w-24"
                  />
                </div>
                <div className="ml-4">
                  <h1 className="text-5xl my-4 text-white">Programmer</h1>
                  <h1 className="text-5xl my-4 text-white">Astolfo</h1>
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
          <div className="relative px-[10%] py-[3%]">
            <h1 className="text-3xl text-white font-bold">About me</h1>
            <p className="my-4 text-white">
              I write code in many different languages, those include C#, C++,
              C, Python, Java, Kotlin, JavaScript, TypeScript, HTML and CSS. My
              experience in programming is very high, as I have been writing
              code for over 10 years.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="relative px-[10%] py-[3%]">
            <h1 className="text-3xl text-white font-bold">
              Programmer Astolfo's Projects
            </h1>
            <div className="mt-6">
              <h2 className="text-xl text-white font-bold">Astolph0/place</h2>
              <p className="text-white">An r/place clone</p>
              <a
                className="text-white bg-blue-600 p-1 px-2 rounded-md"
                href="https://place.mldkyt.com/"
              >
                <button className="mt-2">Open</button>
              </a>
            </div>
            <div className="mt-4">
              <h2 className="text-xl text-white font-bold">
                Astolfo Resource Pack
              </h2>
              <p className="text-white">A resource pack for Minecraft</p>
              <a
                className="text-white bg-blue-600 p-1 px-2 rounded-md"
                href="/project/astolforesourcepack"
              >
                <button className="mt-2">Download</button>
              </a>
            </div>
            <div className="mt-4">
              <h2 className="text-xl text-white font-bold">Asphalt Roads</h2>
              <p className="text-white">A mod for My Summer Car</p>
              <a
                className="text-white bg-blue-600 p-1 px-2 rounded-md"
                href="/project/asphaltroads"
              >
                <button className="mt-2">Download</button>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="relative px-[10%] py-[3%]">
            <h1 className="text-3xl text-white font-bold">
              Stalk Programmer Astolfo
            </h1>
            <div className="mt-6">
              <h2 className="text-xl text-white font-bold">
                <span className="text-red-500">You</span>Tube
              </h2>
              <a
                className="text-white bg-blue-600 p-1 px-2 rounded-md"
                href="https://youtube.com/@mldkyt"
              >
                <button className="mt-2">Subscribe</button>
              </a>
            </div>
            <div className="mt-4">
              <h2 className="text-xl text-white font-bold">
                <span className="text-[#25f4ee]">Tik</span>
                <span className="text-[#ee1d52]">Tok</span>
              </h2>
              <a
                className="text-white bg-blue-600 p-1 px-2 rounded-md"
                href="https://tiktok.com/@astolph0_"
              >
                <button className="mt-2">Follow</button>
              </a>
            </div>
            <div className="mt-4">
              <h2 className="text-xl text-white font-bold">
                <span className="text-[#a970ff]">Twitch</span>
              </h2>
              <a
                className="text-white bg-blue-600 p-1 px-2 rounded-md"
                href="https://twitch.tv/mldkyt"
              >
                <button className="mt-2">Follow</button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <Navbar sel="home" />
    </div>
  );
}
