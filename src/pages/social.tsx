import Watermark from "@/components/Watermark";
import Head from "next/head";
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
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187" crossOrigin="anonymous"></script>
            </Head>
            <NavBar />
            <br />
            <h1 className="text-3xl m-4 mb-1 font-bold">Social links</h1>
            <p className="mx-8 text-lg">Welcome to my social link page! Here you can find all of my social networks where I connect with fans from around the world. You can join my <a className="text-blue-500" href="https://redir.mldkyt.com/discord">Discord server</a> and chat with me and other members about our shared interests. <a href="https://reddit.com/r/mldkyt" className="text-blue-500">Reddit</a> is where I engage in discussions and share my thoughts on various topics. On <a href="https://youtube.com/@mldkyt" className="text-blue-500">YouTube</a>, I upload videos about my hobbies and adventures, while <a href="https://instagram.com/mldkyt" className="text-blue-500">Instagram</a> is where I share updates through photos.</p>
            <div className="flex flex-wrap">
                <div className="m-2 p-2 bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg drop-shadow-lg w-max">
                    <h2 className="text-lg">Discord server</h2>
                    <p>My Discord server is where I post updates and you can chat.</p>
                    <a href="https://redir.mldkyt.com/discord" className="border-2 border-black p-0.5 px-1 rounded-lg bg-green-500 drop-shadow-lg">Join</a>
                    <a href="https://redir.mldkyt.com/discord" className="border-2 border-black p-0.5 px-1 ml-2 rounded-lg bg-green-500 drop-shadow-lg" target="_blank">Join in a new tab</a>
                </div>
                <div className="m-2 p-2 bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg drop-shadow-lg w-max">
                    <h2 className="text-lg">Discord bot</h2>
                    <p>This is a bot I made.</p>
                    <a className="border-2 border-black p-0.5 px-1 rounded-lg bg-green-500 drop-shadow-lg" href="https://bot.mldkyt.com">Read more</a>
                    <a className="border-2 border-black p-0.5 px-1 ml-2 rounded-lg bg-green-500 drop-shadow-lg" href="https://bot.mldkyt.com" target="_blank">Read more in a new tab</a>
                </div>
                <div className="m-2 p-2 bg-gradient-to-b from-red-400 to-red-600 rounded-lg drop-shadow-lg w-max">
                    <h2 className="text-lg">YouTube</h2>
                    <p>My YouTube channel is where I upload my videos.</p>
                    <a className="border-2 border-black p-0.5 px-1 rounded-lg bg-green-500 drop-shadow-lg" href="https://youtube.com/@mldkyt">Subscribe</a>
                    <a className="border-2 border-black p-0.5 px-1 ml-2 rounded-lg bg-green-500 drop-shadow-lg" href="https://youtube.com/@mldkyt" target="_blank">Subscribe in a new tab</a>
                </div>
                <div className="m-2 p-2 bg-gradient-to-b from-yellow-400 to-pink-600 rounded-lg drop-shadow-lg w-max">
                    <h2 className="text-lg">Instagram</h2>
                    <p>My Instagram account is where I post some updates.</p>
                    <a className="border-2 border-black p-0.5 px-1 rounded-lg bg-green-500 drop-shadow-lg" href="https://instagram.com/mldkyt">Follow</a>
                    <a className="border-2 border-black p-0.5 px-1 ml-2 rounded-lg bg-green-500 drop-shadow-lg" href="https://instagram.com/mldkyt" target="_blank">Follow in a new tab</a>
                </div>
                <div className="m-2 p-2 bg-gradient-to-b from-purple-400 to-purple-600 rounded-lg drop-shadow-lg w-max">
                    <h2 className="text-lg">Twitch</h2>
                    <p>My Twitch channel is where I (rarely) stream.</p>
                    <a className="border-2 border-black p-0.5 px-1 rounded-lg bg-green-500 drop-shadow-lg" href="https://twitch.tv/mldkyt">Follow</a>
                    <a className="border-2 border-black p-0.5 px-1 ml-2 rounded-lg bg-green-500 drop-shadow-lg" href="https://twitch.tv/mldkyt" target="_blank">Follow in a new tab</a>
                </div>
                <div className="m-2 p-2 bg-gradient-to-b from-blue-200 to-blue-400 rounded-lg drop-shadow-lg w-max">
                    <h2 className="text-lg">Twitter</h2>
                    <p>My Twitter channel is where I (rarely) post stream notifications and (never) post YouTube releases.</p>
                    <a className="border-2 border-black p-0.5 px-1 rounded-lg bg-green-500 drop-shadow-lg" href="https://twitter.com/mldkyt">Follow</a>
                    <a className="border-2 border-black p-0.5 px-1 ml-2 rounded-lg bg-green-500 drop-shadow-lg" href="https://twitter.com/mldkyt" target="_blank">Follow in a new tab</a>
                </div>
                <div className="m-2 p-2 bg-gradient-to-b from-orange-200 to-orange-400 rounded-lg drop-shadow-lg w-max">
                    <h2 className="text-lg">NexusMods</h2>
                    <p>This is my mod publishing profile.</p>
                    <a className="border-2 border-black p-0.5 px-1 rounded-lg bg-green-500 drop-shadow-lg" href="https://www.nexusmods.com/users/57424716">Open profile</a>
                    <a className="border-2 border-black p-0.5 px-1 ml-2 rounded-lg bg-green-500 drop-shadow-lg" href="https://www.nexusmods.com/users/57424716" target="_blank">Open profile in a new tab</a>
                </div>
                <div className="m-2 p-2 bg-gradient-to-b from-orange-400 to-orange-600 rounded-lg drop-shadow-lg w-max">
                    <h2 className="text-lg">Subreddit</h2>
                    <p>This is my subreddit on Reddit.</p>
                    <a className="border-2 border-black p-0.5 px-1 rounded-lg bg-green-500 drop-shadow-lg" href="https://reddit.com/r/mldkyt">Join</a>
                    <a className="border-2 border-black p-0.5 px-1 ml-2 rounded-lg bg-green-500 drop-shadow-lg" href="https://reddit.com/r/mldkyt" target="_blank">Join in a new tab</a>
                </div>
                <div className="m-2 p-2 bg-gradient-to-b from-orange-400 to-orange-600 rounded-lg drop-shadow-lg w-max">
                    <h2 className="text-lg">Reddit profile</h2>
                    <p>This is my user page on Reddit.</p>
                    <a className="border-2 border-black p-0.5 px-1 rounded-lg bg-green-500 drop-shadow-lg" href="https://reddit.com/u/mldkyt">Follow</a>
                    <a className="border-2 border-black p-0.5 px-1 ml-2 rounded-lg bg-green-500 drop-shadow-lg" href="https://reddit.com/u/mldkyt" target="_blank">Follow in a new tab</a>
                </div>
            </div>
            <Watermark />
        </>
    )
}