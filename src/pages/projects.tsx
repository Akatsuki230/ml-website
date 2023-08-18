import Head from "next/head";
import {motion} from "framer-motion";
import React, {CSSProperties, useEffect, useRef, useState} from "react";

const itemStyle: CSSProperties = {
    width: 'calc(100% - 45px)'
}

export default function Mods() {
    const [live, setLive] = useState(false);
    const [liveLink, setLiveLink] = useState('');
    const hasRan = useRef(false);

    useEffect(() => {
        if (!hasRan.current) {
            hasRan.current = true;

            fetch('/api/live/get').then(x => x.json()).then(x => {
                if (x.live) {
                    setLive(true);
                    setLiveLink(x.link);
                }
            })
        }
    }, []);

    return (
        <>
            <Head>
                <title>mldkyt's website</title>
                <meta name="title" content="Projects | mldkyt's website"/>
                <meta name="description" content="List of mldkyt's projects, whether online or offline."/>
                <meta name="author" content="mldkyt"/>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187"
                        crossOrigin="anonymous"></script>
            </Head>

            {live && (
                <div className='border-2 border-red-600 rounded-md m-2'>
                    <h3 className='text-2xl m-2'>mldkyt's currently live!</h3>
                    <p className='ml-4'>You can go watch his stream <a className='text-blue-400' href={liveLink}>here</a>.</p>
                </div>
            )}

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
                    OldCarSounds is a mod for My Summer Car that replaces the sounds of the Satsuma with the sounds of the old Satsuma from old builds.
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

            <h2 className="text-2xl px-4">Online utilities</h2>

            <div style={itemStyle} className="bg-[#2B0029] m-4 py-2 rounded-lg drop-shadow-none">
                <h3 className="px-2 text-xl text-white">
                    Number Converters
                </h3>
                <p className="px-4 text-white">
                    Converts numbers to different bases and vice versa.
                </p>
                <motion.div className="w-max ml-2"
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}>
                    <a className="bg-blue-600 rounded-lg p-0.5 px-1"
                          href="/util/number-convert">Visit utility's page</a>
                </motion.div>
            </div>
            <div style={itemStyle} className="bg-[#2B0029] m-4 py-2 rounded-lg drop-shadow-none">
                <h3 className="px-2 text-xl text-white">
                    Text to Binary Translator
                </h3>
                <p className="px-4 text-white">
                    Translates text to binary and vice versa. Also has the ability to use true/false instead of 1/0.
                </p>
                <motion.div className="w-max ml-2"
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}>
                    <a className="bg-blue-600 rounded-lg p-0.5 px-1"
                          href="/util/text-binary-converter">Visit utility's page</a>
                </motion.div>
            </div>
            <div style={itemStyle} className="bg-[#2B0029] m-4 py-2 rounded-lg drop-shadow-none">
                <h3 className="px-2 text-xl text-white">
                    Discord Timestamp Generator
                </h3>
                <p className="px-4 text-white">
                    Allows you to generate timestamps for Discord.
                </p>
                <motion.div className="w-max ml-2"
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}>
                    <a className="bg-blue-600 rounded-lg p-0.5 px-1"
                          href="/util/discord/timestamp-generator">Visit utility's page</a>
                </motion.div>
            </div>
            <div style={itemStyle} className="bg-[#2B0029] m-4 py-2 rounded-lg drop-shadow-none">
                <h3 className="px-2 text-xl text-white">
                    Discord Mention Generator
                </h3>
                <p className="px-4 text-white">
                    Allows you to generate mentions for Discord.
                </p>
                <motion.div className="w-max ml-2"
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}>
                    <a className="bg-blue-600 rounded-lg p-0.5 px-1"
                          href="/util/discord/mention-generator">Visit utility's page</a>
                </motion.div>
            </div>
        </>
    )
}