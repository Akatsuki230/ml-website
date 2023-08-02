import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

export default function RyowCompanion() {
    return (
        <>
            <Head>
                <meta name="og:title" content="Requisha ❤️🙏🏿"></meta>
                <meta name="og:description" content="A love bot for my friends, god bless ❤️🙏🏿"></meta>
                <title>Requisha ❤️🙏🏿</title>
            </Head>
            <h1 className="text-center text-[56px] m-4">Requisha ❤️ 🙏🏿</h1>
            <p className="m-2">A love bot for my friends</p>
            <h2 className="m-2 text-3xl font-bold">Description</h2>
            <p className="m-2">A Discord bot I made for my cuties(friends). It adds love, marrying members, raping, fucking and sucking with members and much more into my friend's Discord server.</p>
            <h2 className="m-2 text-3xl font-bold">Features</h2>
            <ul className="list-disc m-2">
                <li className="ml-4"> Kissing</li>
                <li className="ml-4"> Marrying other members</li>
                <li className="ml-4"> Fucking, sucking and raping members</li>
                <li className="ml-4"> Holding ungodly amounts of cum</li>
                <li className="ml-4"> Pins messages like "cum", "sex", "dick", "cock", "rape"</li>
                <li className="ml-4"> Allows setting yourself as underage if you are underage (duh)</li>
            </ul>
            <h2 className="text-3xl m-2">Most popular commands</h2>
            <ul className="list-disc m-2">=
                <li className="ml-4">/suck ❤️❤️❤️❤️❤️❤️</li>
                <li className="ml-4">/rape ❤️❤️❤️❤️❤️</li>
                <li className="ml-4">/marry ❤️❤️❤️❤️</li>
                <li className="ml-4">/fuck ❤️❤️❤️</li>
                <li className="ml-4">/kiss ❤️❤️</li>
            </ul>
            <h2 className="text-3xl m-2">How to experience</h2>
            <p className="ml-4">You can experience a developer hosted node on my friend's ❤️ Discord ❤️ server ❤️. ❤️❤️ 🙏🏿plz join ily ❤️</p>
            <p className="ml-4">Or if you are more technical, you can self host the bot, instructions are in the cutest README ❤️ on GitHub ❤️.</p>
            <br />
            <div className="flex flex-nowrap">
                <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="w-max whitespace-nowrap">
                    <Link href='https://discord.gg/UsxXxaSwVZ' className="p-2 bg-blue-600 rounded-xl m-2">Join my friend's Discord server 🙏🏿</Link>  
                </motion.div>
                <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="w-max whitespace-nowrap">
                    <Link href='https://github.com/mldkyt/Requisha' className="p-2 border-2 border-white rounded-xl m-2">GitHub Repository</Link>
                </motion.div>
            </div>
        </>
    );
}