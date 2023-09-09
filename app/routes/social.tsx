import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { V2_MetaFunction } from "@remix-run/node";
import Navbar from "~/components/Navbar";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Social links" },
    { name: "title", content: "Social links | mldkyt's website" },
    { name: "description", content: "List of mldkyt's social links." },
    { name: "author", content: "mldkyt" },
    { name: 'theme-color', content: '#FF77FF'}
  ];
};

const itemStyle: CSSProperties = {
  width: "calc(100% - 45px)",
};

const Socials = () => {
  return (
    <div>
      <h1 className="text-3xl m-4 mb-1 font-bold">Social links</h1>
      <p className="mx-8 text-lg">Welcome to my social link page!</p>
      <div
        className="bg-[#2B0029] m-4 py-2 rounded-lg drop-shadow-none"
        style={itemStyle}
      >
        <h2 className="px-2 text-xl text-white">MC Username</h2>
        <p className="px-4 text-white">
          My Minecraft username is "<b>Astolph0</b>".
        </p>

        <motion.div
          className="w-max ml-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            rel="noopener"
            target="_blank"
            className="bg-blue-600 rounded-lg p-0.5 px-1"
            href="https://cs.namemc.com/profile/Astolph0.1"
          >
            NameMC profile
          </a>
        </motion.div>
      </div>
      <div
        className="bg-[#2B0029] m-4 py-2 rounded-lg drop-shadow-none"
        style={itemStyle}
      >
        <h2 className="px-2 text-xl text-white">Discord server</h2>
        <p className="px-4 text-white">
          My Discord server is where I post updates about new videos and where
          you can get My Summer Car modding help. Note the server is very
          inactive
        </p>
        <motion.div
          className="w-max ml-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            rel="noopener"
            target="_blank"
            className="bg-blue-600 rounded-lg p-0.5 px-1"
            href="https://redir.mldkyt.com/discord"
          >
            Join
          </a>
        </motion.div>
      </div>
      <div
        className="bg-[#2B0029] m-4 py-2 rounded-lg drop-shadow-none"
        style={itemStyle}
      >
        <h2 className="px-2 text-xl text-white">YouTube</h2>
        <p className="px-4 text-white">
          My YouTube channel is where I upload my videos.
        </p>
        <motion.div
          className="w-max ml-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            rel="noopener"
            target="_blank"
            className="bg-blue-600 rounded-lg p-0.5 px-1"
            href="https://youtube.com/@mldkyt"
          >
            Subscribe
          </a>
        </motion.div>
      </div>
      <div
        className="bg-[#2B0029] m-4 py-2 rounded-lg drop-shadow-none"
        style={itemStyle}
      >
        <h2 className="px-2 text-xl text-white">Twitch</h2>
        <p className="px-4 text-white">
          My Twitch channel is where I (rarely) stream.
        </p>

        <motion.div
          className="w-max ml-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            rel="noopener"
            target="_blank"
            className="bg-blue-600 rounded-lg p-0.5 px-1"
            href="https://twitch.tv/mldkyt"
          >
            Follow
          </a>
        </motion.div>
      </div>
      <div
        className="bg-[#2B0029] m-4 py-2 rounded-lg drop-shadow-none"
        style={itemStyle}
      >
        <h2 className="px-2 text-xl text-white">Twitter</h2>
        <p className="px-4 text-white">
          My Twitter channel is where I post updates.
        </p>

        <motion.div
          className="w-max ml-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            rel="noopener"
            target="_blank"
            className="bg-blue-600 rounded-lg p-0.5 px-1"
            href="https://twitter.com/mldkyt"
          >
            Follow
          </a>
        </motion.div>
      </div>
      <div
        className="bg-[#2B0029] m-4 py-2 rounded-lg drop-shadow-none"
        style={itemStyle}
      >
        <h2 className="px-2 text-xl text-white">TikTok</h2>
        <p className="px-2 py-1 bg-red-500 mx-4 rounded-md">
          Note that on TikTok I am named "astolph0_", not "mldkyt"
        </p>
        <p className="px-4 text-white">
          TikTok is where I post short code tutorials.
        </p>

        <motion.div
          className="w-max ml-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            rel="noopener"
            target="_blank"
            className="bg-blue-600 rounded-lg p-0.5 px-1"
            href="https://www.tiktok.com/@astolph0_"
          >
            Follow
          </a>
        </motion.div>
      </div>
      <div
        className="bg-[#2B0029] m-4 py-2 rounded-lg drop-shadow-none"
        style={itemStyle}
      >
        <h2 className="px-2 text-xl text-white">NexusMods</h2>
        <p className="px-4 text-white">This is my mod publishing profile.</p>

        <motion.div
          className="w-max ml-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            rel="noopener"
            target="_blank"
            className="bg-blue-600 rounded-lg p-0.5 px-1"
            href="https://www.nexusmods.com/users/57424716"
          >
            Open profile
          </a>
        </motion.div>
      </div>
      <div
        className="bg-[#2B0029] m-4 py-2 rounded-lg drop-shadow-none"
        style={itemStyle}
      >
        <h2 className="px-2 text-xl text-white">Roblox</h2>
        <p className="px-4 text-white">Life is Roblox</p>

        <motion.div
          className="w-max ml-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            rel="noopener"
            target="_blank"
            className="bg-blue-600 rounded-lg p-0.5 px-1"
            href="https://www.roblox.com/users/4978678693/profile"
          >
            Open profile
          </a>
        </motion.div>
      </div>
      <Navbar sel="social" />
    </div>
  );
};

export default Socials;
