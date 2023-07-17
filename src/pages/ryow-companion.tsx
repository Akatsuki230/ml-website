import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

export default function RyowCompanion() {
    return (
        <>
            <Head>
                <meta name="og:title" content="RyowCompanion"></meta>
                <meta name="og:description" content="A bot for my friends that adds physical interaction"></meta>
            </Head>
            <h1 className="text-center text-[56px] m-4">RyowCompanion 🙏🏿</h1>
            <p className="m-2">A bot for my friends</p>
            <h2 className="m-2 text-3xl font-bold">Description</h2>
            <p>A Discord bot I made for my friends. It adds physical interaction, marrying members, making out with members and much more into my friend's Discord server.</p>
            <h2 className="m-2 text-3xl font-bold">Features</h2>
            <ul className="list-disc m-2">
                <li className="ml-4"> Kissing</li>
                <li className="ml-4"> Marrying other members</li>
                <li className="ml-4"> Having sex</li>
                <li className="ml-4"> Holding ungodly amounts of cum</li>
                <li className="ml-4"> Pins messages like "cum", "sex", "dick", "cock", "rape"</li>
            </ul>
            <h2 className="text-3xl m-2">Most popular commands</h2>
            <ul className="list-disc m-2">
                <li className="ml-4">/suck</li>
                <li className="ml-4">/rape</li>
                <li className="ml-4">/marry</li>
                <li className="ml-4">/fuck</li>
                <li className="ml-4">/kiss</li>
            </ul>
            <h2 className="text-3xl m-2">How to experience</h2>
            <p className="ml-4">You can experience a developer hosted node on my friend's Discord server. The bot is named <b>Requisha</b> there.</p>
            <p className="ml-4">Or if you are more technical, you can self host the bot, instructions are in README on GitHub.</p>
            <br />
            <div className="flex flex-nowrap">
                <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="w-max whitespace-nowrap">
                    <Link href='https://discord.gg/UsxXxaSwVZ' className="p-2 bg-blue-600 rounded-xl m-2">Join my friend's Discord server</Link>  
                </motion.div>
                <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="w-max whitespace-nowrap">
                    <Link href='https://github.com/mldkyt/RyowCompanion' className="p-2 border-2 border-white rounded-xl m-2">GitHub Repository</Link>
                </motion.div>
            </div>
        </>
    );
}