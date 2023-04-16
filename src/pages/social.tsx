import Watermark from "@/components/Watermark";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import NavBar from '../components/NavBar';

export default function Social() {
    return (
        <>
            <Head>
                <title>Social links</title>
                <meta name="title" content="Social links | mldkyt's website" />
                <meta name="description" content="List of mldkyt's social links." />
                <meta name="author" content="mldkyt" />
            </Head>
            <NavBar />
            <br />
            <h1 className="text-3xl m-4 mb-1 font-bold">Social links</h1>
            <p className="mx-8 text-lg">Welcome to my social link page! Here you can find all of my online platforms where I connect with people from around the world. On Discord, you can join my server and chat with me and other members about our shared interests. Reddit is where I engage in discussions and share my thoughts on various topics. On YouTube, I upload videos about my hobbies and adventures, while Instagram is where I share snippets of my daily life through photos and stories.</p>
            <div className="flex flex-wrap">
                <div className="m-2 p-2 bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg drop-shadow-lg w-max">
                    <h2 className="text-lg">Discord server</h2>
                    <p>My Discord server is where I post updates and you can chat.</p>
                    <Link href="https://redir.mldkyt.com/discord" className="border-2 border-black p-0.5 px-1 rounded-lg bg-green-500 drop-shadow-lg">Join</Link>
                </div>
                <div className="m-2 p-2 bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg drop-shadow-lg w-max">
                    <h2 className="text-lg">Discord bot</h2>
                    <p>This is a bot I made.</p>
                    <Link className="border-2 border-black p-0.5 px-1 rounded-lg bg-green-500 drop-shadow-lg" href="https://bot.mldkyt.com">Read more</Link>
                </div>
                <div className="m-2 p-2 bg-gradient-to-b from-red-400 to-red-600 rounded-lg drop-shadow-lg w-max">
                    <h2 className="text-lg">YouTube</h2>
                    <p>My YouTube channel is where I upload my videos.</p>
                    <Link className="border-2 border-black p-0.5 px-1 rounded-lg bg-green-500 drop-shadow-lg" href="https://youtube.com/@mldkyt">Subscribe</Link>
                </div>
                <div className="m-2 p-2 bg-gradient-to-b from-purple-400 to-purple-600 rounded-lg drop-shadow-lg w-max">
                    <h2 className="text-lg">Twitch</h2>
                    <p>My Twitch channel is where I (rarely) stream.</p>
                    <Link className="border-2 border-black p-0.5 px-1 rounded-lg bg-green-500 drop-shadow-lg" href="https://twitch.tv/mldkyt">Follow</Link>
                </div>
                <div className="m-2 p-2 bg-gradient-to-b from-blue-200 to-blue-400 rounded-lg drop-shadow-lg w-max">
                    <h2 className="text-lg">Twitter</h2>
                    <p>My Twitter channel is where I (rarely) post stream notifications and (never) post YouTube releases.</p>
                    <Link className="border-2 border-black p-0.5 px-1 rounded-lg bg-green-500 drop-shadow-lg" href="https://twitter.com/mldkyt">Follow</Link>
                </div>
                <div className="m-2 p-2 bg-gradient-to-b from-orange-200 to-orange-400 rounded-lg drop-shadow-lg w-max">
                    <h2 className="text-lg">NexusMods</h2>
                    <p>This is my mod publishing profile.</p>
                    <Link className="border-2 border-black p-0.5 px-1 rounded-lg bg-green-500 drop-shadow-lg" href="https://www.nexusmods.com/users/57424716">Profile</Link>
                </div>
                <div className="m-2 p-2 bg-gradient-to-b from-orange-400 to-orange-600 rounded-lg drop-shadow-lg w-max">
                    <h2 className="text-lg">Subreddit</h2>
                    <p>This is my subreddit on Reddit.</p>
                    <Link className="border-2 border-black p-0.5 px-1 rounded-lg bg-green-500 drop-shadow-lg" href="https://reddit.com/r/mldkyt">Join</Link>
                </div>
                <div className="m-2 p-2 bg-gradient-to-b from-orange-400 to-orange-600 rounded-lg drop-shadow-lg w-max">
                    <h2 className="text-lg">Reddit profile</h2>
                    <p>This is my user page on Reddit.</p>
                    <Link className="border-2 border-black p-0.5 px-1 rounded-lg bg-green-500 drop-shadow-lg" href="https://reddit.com/u/mldkyt">Follow</Link>
                </div>
            </div>
            <Watermark />
        </>
    )
}