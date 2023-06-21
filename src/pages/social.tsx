import Watermark from "@/components/Watermark";
import Head from "next/head";
import React from "react";
import Script from "next/script";
import { motion } from "framer-motion";

export default function Social() {
    return (
        <>
            <Head>
                <title>Social links</title>
                <meta name="title" content="Social links | mldkyt's website" />
                <meta name="description" content="List of mldkyt's social links." />
                <meta name="author" content="mldkyt" />
                <Script async src={process.env.ADS_URL} crossOrigin="anonymous"></Script>
            </Head>
            <br />
            <h1 className="text-3xl m-4 mb-1 font-bold">Social links</h1>
            <p className="mx-8 text-lg">Welcome to my social link page! Here you can find all of my social networks where I connect with fans from around the world. You can join my <a className="text-blue-500" href="https://redir.mldkyt.com/discord">Discord server</a> and chat with me and other members about our shared interests. <a href="https://reddit.com/r/mldkyt" className="text-blue-500">Reddit</a> is where I engage in discussions and share my thoughts on various topics. On <a href="https://youtube.com/@mldkyt" className="text-blue-500">YouTube</a>, I upload videos about my hobbies and adventures, while <a href="https://instagram.com/mldkyt" className="text-blue-500">Instagram</a> is where I share updates through photos.</p>
            <div className="m-2 p-2 rounded-lg border-2 border-white" style={{
                width: "calc(100% - 1rem)"
            }}>
                <h2 className="text-lg">Discord server</h2>
                <p>My Discord server is where I post updates and you can chat.</p>

                <motion.div className="w-max" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <a target="_blank" href="https://redir.mldkyt.com/discord" className="border-2 border-white p-0.5 px-1 rounded-lg right-2 top-2">Join</a>
                </motion.div>
            </div>
            <div className="m-2 p-2 rounded-lg border-2 border-white" style={{
                width: "calc(100% - 1rem)"
            }}>
                <h2 className="text-lg">YouTube</h2>
                <p>My YouTube channel is where I upload my videos.</p>
                <motion.div className="w-max" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <a target="_blank" className="border-2 border-white p-0.5 px-1 rounded-lg" href="https://youtube.com/@mldkyt">Subscribe</a>
                </motion.div>
            </div>
            <div className="m-2 p-2 rounded-lg border-2 border-white" style={{
                width: "calc(100% - 1rem)"
            }}>
                <h2 className="text-lg">Instagram</h2>
                <p>My Instagram account is where I post some updates.</p>
                <motion.div className="w-max" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <a target="_blank" className="border-2 border-white p-0.5 px-1 rounded-lg" href="https://instagram.com/mldkyt">Follow</a>
                </motion.div>
            </div>
            <div className="m-2 p-2 rounded-lg border-2 border-white" style={{
                width: "calc(100% - 1rem)"
            }}>
                <h2 className="text-lg">Twitch</h2>
                <p>My Twitch channel is where I (rarely) stream.</p>

                <motion.div className="w-max" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <a className="border-2 border-white p-0.5 px-1 rounded-lg" href="https://twitch.tv/mldkyt">Follow</a>
                </motion.div>
            </div>
            <div className="m-2 p-2 rounded-lg border-2 border-white" style={{
                width: "calc(100% - 1rem)"
            }}>
                <h2 className="text-lg">Twitter</h2>
                <p>My Twitter channel is where I post updates.</p>

                <motion.div className="w-max" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><a className="border-2 border-white p-0.5 px-1 rounded-lg" href="https://twitter.com/mldkyt">Follow</a></motion.div>
            </div>
            <div className="m-2 p-2 rounded-lg border-2 border-white" style={{
                width: "calc(100% - 1rem)"
            }}>
                <h2 className="text-lg">NexusMods</h2>
                <p>This is my mod publishing profile.</p>

                <motion.div className="w-max" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <a className="border-2 border-white p-0.5 px-1 rounded-lg" href="https://www.nexusmods.com/users/57424716">Open profile</a>
                </motion.div>
            </div>
            <Watermark />
        </>
    )
}