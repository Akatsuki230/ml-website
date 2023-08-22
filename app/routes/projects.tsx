import {motion} from "framer-motion";
import type {CSSProperties} from "react";
import React from "react";
import type {V2_MetaFunction} from "@remix-run/node";
import Navbar from "~/components/Navbar";

export const meta: V2_MetaFunction = () => {
  return [
    {title: "mldkyt's projects"},
    {name: "title", content: "Projects | mldkyt's website"},
    {name: "description", content: "List of mldkyt's projects, whether they're finished or not"},
    {name: "author", content: "mldkyt"}
  ]
}

const itemStyle: CSSProperties = {
  width: 'calc(100% - 45px)'
}

export default function Mods() {
  return (
    <>
      <h1 className="text-3xl font-bold px-2">mldkyt's project list</h1>
      <p className="ml-6">These are all of mldkyt's projects.</p>
      <h2 className="text-2xl px-4">Discord Bots</h2>
      <div style={itemStyle} className="bg-[#2B0029] m-4 py-2 rounded-lg drop-shadow-none">
        <h3 className="px-2 text-xl text-white">
          Requisha
        </h3>
        <p className="px-4 text-white">
          Requisha, the love bot for my friends' Discord server.
        </p>
        <motion.div className="w-max ml-2"
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}>
          <a className="bg-blue-600 rounded-lg p-0.5 px-1"
             href="/requisha">Bot's page</a>
        </motion.div>
      </div>

      <h2 className="text-2xl px-4">My Summer Car mods</h2>

      <div style={itemStyle} className="bg-[#2B0029] m-4 py-2 rounded-lg drop-shadow-none">
        <h3 className="px-2 text-xl text-white">
          Asphalt Roads
        </h3>
        <p className="px-4 text-white">
          Asphalt roads is a mod that replaces dirt roads with asphalt roads in My Summer Car.
        </p>
        <motion.div className="w-max ml-2"
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}>
          <a className="bg-blue-600 rounded-lg p-0.5 px-1"
             href="/project/asphaltroads">View</a>
        </motion.div>
      </div>
      <div style={itemStyle} className="bg-[#2B0029] m-4 py-2 rounded-lg drop-shadow-none">
        <h3 className="px-2 text-xl text-white">
          OldCarSounds
        </h3>
        <p className="px-4 text-white">
          OldCarSounds is a mod for My Summer Car that replaces the sounds of the Satsuma with the sounds of the old
          Satsuma from old builds.
        </p>
        <motion.div className="w-max ml-2"
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}>
          <a className="bg-blue-600 rounded-lg p-0.5 px-1"
             href="/project/oldcarsounds">View</a>
        </motion.div>
      </div>
      <div style={itemStyle} className="bg-[#2B0029] m-4 py-2 rounded-lg drop-shadow-none">
        <h3 className="px-2 text-xl text-white">
          MSC Tweaks
        </h3>
        <p className="px-4 text-white">
          MSC Tweaks is a set of tweaks for My Summer Car.
        </p>
        <motion.div className="w-max ml-2"
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}>
          <a className="bg-blue-600 rounded-lg p-0.5 px-1"
             href="/project/msctweaks">View</a>
        </motion.div>
      </div>

      <Navbar sel="project"/>
    </>
  )
}