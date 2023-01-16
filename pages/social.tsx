import Head from "next/head";
import React from "react";
import NavBar from '../components/NavBar';

export default function Social() {
    return (
        <>
            <Head>
                <title>Social links</title>
            </Head>
            <NavBar selected="" />

            <div className="bg-gray-900 text-white h-screen">
                <h1 className="px-4 text-5xl">Social links</h1>
                <p className="mx-8">Welcome to the social links page! Here you can find all of my social links.</p>

                <div className="border-4 border-gray-600 rounded-3xl m-4">
                    <h3 className="text-4xl m-2">YouTube</h3>
                    <p className="m-2 mx-8">My YouTube channel is where I upload my videos.</p>
                    <a href="https://www.youtube.com/@mldkyt">
                        <button className="bg-red-500 hover:bg-red-800 transition-all p-4 px-8 rounded-xl m-4">YouTube</button>
                    </a>
                </div>

                <div className="border-4 border-gray-600 rounded-3xl m-4">
                    <h3 className="text-4xl m-2">Twitch</h3>
                    <p className="m-2 mx-8">My Twitch channel is where I (rarely) stream.</p>
                    <a href="https://www.twitch.tv/mldkyt">
                        <button className="bg-purple-500 hover:bg-purple-800 transition-all p-4 px-8 rounded-xl m-4">Twitch</button>
                    </a>
                </div>

                <div className="border-4 border-gray-600 rounded-3xl m-4">
                    <h3 className="text-4xl m-2">Twitter</h3>
                    <p className="m-2 mx-8">My Twitter channel is where I (rarely) post stream notifications and (never) post YouTube releases.</p>
                    <a href="https://www.twitter.com/@mldkyt">
                        <button className="bg-blue-400 hover:bg-blue-500 transition-all p-4 px-8 rounded-xl m-4">Twitter</button>
                    </a>
                </div>
                
                <div className="border-4 border-gray-600 rounded-3xl m-4">
                    <h3 className="text-4xl m-2">NexusMods</h3>
                    <p className="m-2 mx-8">This is my mod publishing profile.</p>
                    <a href="https://www.nexusmods.com/users/57424716">
                        <button className="bg-orange-500 hover:bg-orange-600 transition-all p-4 px-8 rounded-xl m-4">NexusMods</button>
                    </a>
                </div>
            </div>
        </>
    )
}