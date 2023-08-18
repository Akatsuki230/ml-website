import {motion} from "framer-motion";
import Head from "next/head";
import React, {useEffect, useRef, useState} from "react";

export default function Pronouns() {
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
                <title>mldkyt's pronouns</title>
                <script async
                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187"
                        crossOrigin="anonymous"></script>
            </Head>

            {live && (
                <div className='border-2 border-red-600 rounded-md m-2'>
                    <h3 className='text-2xl m-2'>mldkyt's currently live!</h3>
                    <p className='ml-4'>You can go watch his stream <a className='text-blue-400' href={liveLink}>here</a>.</p>
                </div>
            )}

            <h1 className="text-3xl m-2 mx-4 font-bold">mldkyt's pronouns</h1>
            <h2 className="text-2xl m-1 mx-6 font-bold">Calling me</h2>
            <p className="m-1 mx-8">&bull; ❤️ mld</p>
            <p className="m-1 mx-8">&bull; 👍 astolfo</p>
            <p className="m-1 mx-8">&bull; 👍 mldk</p>
            <p className="m-1 mx-8">&bull; 👍 mldkyt</p>
            <p className="m-1 mx-8">&bull; 👎 mild sauce</p>
            <p className="m-1 mx-8">&bull; 👎 mald</p>
            <h2 className="text-2xl m-1 mx-6 font-bold">Pronouns</h2>
            <p className="m-1 mx-8">&bull; ❤️ he/him</p>
            <p className="m-1 mx-8">&bull; 👍 they/them</p>
            <h2 className="text-2xl m-1 mx-6 font-bold">Addressing (Any concentration of the below options)</h2>
            <p className="m-1 mx-8">&bull; ❤️ cutie</p>
            <p className="m-1 mx-8">&bull; ❤️ love</p>
            <p className="m-1 mx-8">&bull; ❤️ lover</p>
            <p className="m-1 mx-8">&bull; ❤️ honey</p>
            <p className="m-1 mx-8">&bull; ❤️ sweetie</p>
            <p className="m-1 mx-8">&bull; ❤️ baby</p>
            <p className="m-1 mx-8">&bull; ❤️ babe</p>
            <p className="m-1 mx-8">&bull; ❤️ cutie</p>
            <p className="m-1 mx-8">&bull; ❤️ patootie</p>
            <p className="m-1 mx-8">&bull; ❤️ femboy</p>

            <h2 className="text-3xl m-2 mx-4 font-bold">Meaning of these icons: </h2>

            <div className="flex ml-4">
                <div className="m-2 bg-[#3C0041] rounded-md p-1">
                    <p className="text-2xl font-bold">❤️</p>
                    <p>PLEASE USE THIS MASTER</p>
                </div>
                <div className="m-2 bg-[#3C0041] rounded-md p-1">
                    <p className="text-2xl font-bold">👍</p>
                    <p>Yuh uh</p>
                </div>
                <div className="m-2 bg-[#3C0041] rounded-md p-1">
                    <p className="text-2xl font-bold">👎</p>
                    <p>Nuh uh</p>
                </div>
            </div>

            <h2 className='text-3xl m-2 mx-4 font-bold'>Explore this website: </h2>
            <div className='flex'>
                <div
                    className='ml-8 text-center w-40 h-48 bg-gradient-to-b from-[#3C0041] to-[#111] rounded-md relative'>
                    <p className='text-xl font-bold'>Homepage</p>
                    <p>This is the homepage of this website.</p>
                    <a href='/'
                       className='bottom-2 absolute left-1/2 -translate-x-1/2'>
                        <motion.button
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            className='bg-blue-700 rounded-xl p-2 px-4 mr-2'
                        >
                            Explore
                        </motion.button>
                    </a>
                </div>

                <div
                    className='ml-8 text-center w-40 h-48 bg-gradient-to-b from-[#3C0041] to-[#111] rounded-md relative'>
                    <p className='text-xl font-bold'>Projects</p>
                    <p>This is a list of my projects</p>
                    <a href='/projects'
                       className='bottom-2 absolute left-1/2 -translate-x-1/2'>
                        <motion.button
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            className='bg-blue-700 rounded-xl p-2 px-4 mr-2'
                        >
                            Explore
                        </motion.button>
                    </a>
                </div>

                <div
                    className='ml-8 text-center w-40 h-48 bg-gradient-to-b from-[#3C0041] to-[#111] rounded-md relative'>
                    <p className='text-xl font-bold'>Socials</p>
                    <p>A list of my social links</p>
                    <a href='/socials'
                       className='bottom-2 absolute left-1/2 -translate-x-1/2'>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className='bg-blue-700 rounded-xl p-2 px-4 mr-2'
                        >
                            Explore
                        </motion.button>
                    </a>
                </div>
            </div>
        </>
    )
}