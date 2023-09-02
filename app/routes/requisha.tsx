import { motion } from "framer-motion";
import React, { useRef } from "react";
import type { V2_MetaFunction } from "@remix-run/node";
import Navbar from "~/components/Navbar";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Requisha" },
    { name: "title", content: "Requisha | mldkyt's website" },
    {
      name: "description",
      content: "A love bot for my friends, god bless ❤️🙏🏿",
    },
    { name: "author", content: "mldkyt" },
  ];
};

export default function Requisha() {
  const [countDown, setCountDown] = React.useState(3);
  const [showWarning, setShowWarning] = React.useState(true);
  const countDownRef = useRef(3);
  const countDownInterval = useRef(setTimeout(() => {}, 0));

  const startHover = () => {
    countDownInterval.current = setInterval(() => {
      countDownRef.current--;
      setCountDown(countDownRef.current);
      if (countDownRef.current <= 0) {
        clearInterval(countDownInterval.current);
        setShowWarning(false);
      }
    }, 1000);
  };

  const stopHover = () => {
    clearInterval(countDownInterval.current);
    countDownRef.current = 3;
    setCountDown(3);
  };

  return (
    <>
      <h1 className="text-center text-[56px] m-4">Requisha ❤️ 🙏🏿</h1>
      <p className="m-2">A love bot for my friends</p>
      <h2 className="m-2 text-3xl font-bold">Description</h2>
      <p className="m-2">
        A Discord bot I made for my cuties(friends). It adds love, marrying
        members, raping, fucking and sucking with members and much more into my
        friend's Discord server.
      </p>
      <h2 className="m-2 text-3xl font-bold">Features</h2>
      <ul className="list-disc m-2">
        <li className="ml-4"> Kissing</li>
        <li className="ml-4"> Marrying other members</li>
        <li className="ml-4"> Fucking, sucking and raping members</li>
        <li className="ml-4"> Holding ungodly amounts of cum</li>
        <li className="ml-4">
          {" "}
          Pins messages like "cum", "sex", "dick", "cock", "rape"
        </li>
        <li className="ml-4">
          {" "}
          Allows setting yourself as underage if you are underage (duh)
        </li>
      </ul>
      <h2 className="text-3xl m-2">Most popular commands</h2>
      <ul className="list-disc m-2">
        =<li className="ml-4">/suck ❤️❤️❤️❤️❤️❤️</li>
        <li className="ml-4">/rape ❤️❤️❤️❤️❤️</li>
        <li className="ml-4">/marry ❤️❤️❤️❤️</li>
        <li className="ml-4">/fuck ❤️❤️❤️</li>
        <li className="ml-4">/kiss ❤️❤️</li>
      </ul>
      <h2 className="text-3xl m-2">How to experience</h2>
      <p className="ml-4">
        You can experience a developer hosted node on my friend's ❤️ Discord ❤️
        server ❤️. ❤️❤️ 🙏🏿plz join ily ❤️
      </p>
      <p className="ml-4">
        Or if you are more technical, you can self host the bot, instructions
        are in the cutest README ❤️ on GitHub ❤️.
      </p>
      <br />
      <div className="flex flex-nowrap">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-max whitespace-nowrap"
        >
          <a
            href="https://discord.gg/UsxXxaSwVZ"
            className="p-2 bg-blue-600 rounded-xl m-2"
          >
            Join my friend's Discord server 🙏🏿
          </a>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-max whitespace-nowrap"
        >
          <a
            href="https://github.com/mldkyt/Requisha"
            className="p-2 border-2 border-white rounded-xl m-2"
          >
            GitHub Repository
          </a>
        </motion.div>
      </div>

      <motion.div
        className={`fixed left-0 top-0 w-screen h-screen bg-black ${
          showWarning || "pointer-events-none"
        }`}
        initial={{
          opacity: 1,
        }}
        variants={{
          open: {
            opacity: 1,
          },
          closed: {
            opacity: 0,
          },
        }}
        animate={showWarning ? "open" : "closed"}
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-4xl text-red-500">Warning</h1>
          <p>
            You are about to enter a page with NSFW content, do you want to
            continue?
          </p>
          <p>
            Hover your mouse or touch your finger on the Yes button to continue
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-2 py-1 m-2 bg-red-500 rounded-lg select-none"
            onPointerEnter={startHover}
            onPointerLeave={stopHover}
          >
            Yes (hover over for {countDown} seconds)
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="/"
            className="px-2 py-1 m-2 bg-green-500 rounded-lg"
          >
            Take me to the home page
          </motion.a>
        </div>
      </motion.div>

      <Navbar sel="project" />
    </>
  );
}
