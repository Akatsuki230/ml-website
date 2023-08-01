import Watermark from "@/components/Watermark";
import Head from "next/head";
import Link from "next/link";
import {motion} from "framer-motion";
import {CSSProperties} from "react";

const itemStyle: CSSProperties = {
    width: 'calc(100% - 45px)'
}

export default function Mods() {
    return (
        <>
            <Head>
                <title>mldkyt's website</title>
                <meta name="title" content="Projects | mldkyt's website"/>
                <meta name="description" content="List of mldkyt's projects, whether online or offline."/>
                <meta name="author" content="mldkyt"/>
            </Head>
            <br/>
            <h1 className="text-3xl font-bold px-2">mldkyt's project list</h1>
            <p className="ml-6">These are all of mldkyt's projects.</p>
            
            <h2 className="text-2xl underline px-4">Online utilities</h2>

            <div style={itemStyle} className="bg-black border-2 border-white m-4 py-2 rounded-lg drop-shadow-none">
                <h3 className="px-2 text-xl text-white">
                    Number Converters
                </h3>
                <p className="px-4 text-white">
                    Converts numbers to different bases and vice versa.
                </p>
                <motion.div className="w-max ml-2"
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}>
                    <Link className="bg-black rounded-lg p-0.5 px-1 border-2 border-white"
                          href="/util/number-converter">Visit utility's page</Link>
                </motion.div>
            </div>
            <div style={itemStyle} className="bg-black border-2 border-white m-4 py-2 rounded-lg drop-shadow-none">
                <h3 className="px-2 text-xl text-white">
                    Text to Binary Translator
                </h3>
                <p className="px-4 text-white">
                    Translates text to binary and vice versa. Also has the ability to use true/false instead of 1/0.
                </p>
                <motion.div className="w-max ml-2"
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}>
                    <Link className="bg-black rounded-lg p-0.5 px-1 border-2 border-white"
                          href="/util/text-binary-converter">Visit utility's page</Link>
                </motion.div>
            </div>
            <div style={itemStyle} className="bg-black border-2 border-white m-4 py-2 rounded-lg drop-shadow-none">
                <h3 className="px-2 text-xl text-white">
                    Discord Timestamp Generator
                </h3>
                <p className="px-4 text-white">
                    Allows you to generate timestamps for Discord.
                </p>
                <motion.div className="w-max ml-2"
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}>
                    <Link className="bg-black rounded-lg p-0.5 px-1 border-2 border-white"
                          href="/util/discord/timestamp-generator">Visit utility's page</Link>
                </motion.div>
            </div>
            <div style={itemStyle} className="bg-black border-2 border-white m-4 py-2 rounded-lg drop-shadow-none">
                <h3 className="px-2 text-xl text-white">
                    Discord Mention Generator
                </h3>
                <p className="px-4 text-white">
                    Allows you to generate mentions for Discord.
                </p>
                <motion.div className="w-max ml-2"
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}>
                    <Link className="bg-black rounded-lg p-0.5 px-1 border-2 border-white"
                          href="/util/discord/mention-generator">Visit utility's page</Link>
                </motion.div>
            </div>
            <Watermark/>
        </>
    )
}