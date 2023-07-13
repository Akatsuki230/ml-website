import Watermark from "@/components/Watermark";
import { motion } from "framer-motion";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";

const WEBHOOK = "https://discord.com/api/webhooks/1049404188846727299/-TNhDH1vvj7FJuiQAJ5ZshpxnyTp22OQv3EeLRwnHr4K4t2iGwKqzkG-K8Rxrl_07E7g";
const USER_ID = "575536897141637120";

export default function SexPack() {
    const [youSure, setYouSure] = useState(false);
    const [nahBro, setNahBro] = useState(false);
    const [intro, setIntro] = useState(true);

    const hasRan = useRef(false);

    useEffect(() => {
        if (!hasRan.current) {
            hasRan.current = true;
            fetch(WEBHOOK, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    'content': `PageVisit;<@${USER_ID}>`,
                    'user': {
                        'username': '/mc/sex'
                    }
                })
            });

            setTimeout(function () {
                setIntro(false)
            }, 2000);
        }
    });

    function download() {
        setNahBro(true);
        setYouSure(false);
        fetch(WEBHOOK, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                'content': `PackDownload;<@${USER_ID}>`,
                'user': {
                    'username': '/mc/sex'
                }
            })
        });
        document.location.href = "https://cdn.discordapp.com/attachments/1085512203286888489/1094672423141519530/sex_pack.zip";
    }

    const drawName = (str: string) => {
        return str == "" ? "<player>" : str;
    }

    return (
        <div>
            <Head>
                <title>Sex pack</title>
            </Head>
            <br />

            <img src="/sex/sex1.jpg" alt="sex message 1" className="w-full absolute top-7 -z-10"></img>
            <h1 className="text-3xl font-bold m-2">Minecraft: The Sex Update</h1>
            <p className="ml-2 text-white">Yes, you can now penetrate your friends with better death messages in minecraft!!!!</p>
            <div className="flex w-full text-center">
                <div className="w-1/4">
                    <img className="rounded-md" src="/sex/sex2.jpg" alt="shoot me donw"></img>
                    <span className="text-white bg-black">Do not drink water!</span>
                </div>
                <div className="w-1/4">
                    <img className="rounded-md" src="/sex/sex3.jpg" alt="ofkjiogjeroirewiog"></img>
                    <span className="text-white bg-black">Get killed by creepers!</span>
                </div>
                <div className="w-1/4">
                    <img className="rounded-md" src="/sex/sex4.jpg" alt="death chat message saying catalin had hot sex with mldkyt"></img>
                    <span className="text-white bg-black">Burn to death!</span>
                </div>
                <div className="w-1/4">
                    <img className="rounded-md" src="/sex/sex5.jpg" alt="please do not cancel me"></img>
                    <span className="text-pink-300 bg-black">Have funnn with your men!</span>
                </div>
            </div>
            <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className='w-max'>
                <a href="https://www.youtube.com/watch?v=UJzE-KENUyw" className="m-2 text-blue-500 underline">
                    Watch the creation
                </a>
            </motion.div>
            <div className="m-2">
                <p className="text-3xl font-bold">Version 1.0 <span className='text-red-700'>HOT!</span></p>
                <p className="mx-4">&bull; Initial cum ejaculation</p>
            </div>

            <motion.button
                whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}
                className="bg-green-500 px-4 p-1 border-2 border-black rounded-lg ml-2"
                onClick={() => setYouSure(true)}>Download sex_pack.zip</motion.button>

            <motion.div
                variants={{
                    closed: {
                        transform: 'translate(-50%, -50%) scale(0.8)',
                        opacity: 0
                    },
                    open: {
                        transform: 'translate(-50%, -50%) scale(1)',
                        opacity: 1
                    }
                }}
                animate={youSure ? 'open' : 'closed'}
                className={`${youSure ? '' : 'pointer-events-none'} fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-600 w-[500px] h-48 drop-shadow-2xl rounded-lg border-4 border-black`}>
                <h1 className="text-white m-2 mx-4 font-bold">You REALLY WANNA DOWNLOAD THIS?</h1>
                <p className="ml-4 text-white">Big mistake</p>
                <div className="absolute right-5 bottom-5 p-1 px-2">
                    <motion.button
                        whileTap={{scale: 0.9}} whileHover={{scale: 1.1}}
                        onClick={download} className="bg-green-500 rounded-lg border-2 border-black drop-shadow-xl px-2 mx-2">Yes papa please download, cum on me!!</motion.button>
                    <motion.button
                        whileTap={{scale: 0.9}} whileHover={{scale: 1.1}}
                        onClick={() => setYouSure(false)} className="bg-red-500 rounded-lg border-2 border-black drop-shadow-xl px-2 mx-2">nah bro</motion.button>
                </div>
            </motion.div>

            <motion.div
                variants={{
                    closed: {
                        transform: 'translate(-50%, -50%) scale(0.8)',
                        opacity: 0
                    },
                    open: {
                        transform: 'translate(-50%, -50%) scale(1)',
                        opacity: 1
                    }
                }}
                animate={nahBro ? 'open' : 'closed'}
                className={`${nahBro ? '' : 'pointer-events-none'} fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 w-[500px] h-48 drop-shadow-2xl rounded-lg border-4 border-black`}>
                <h1 className="text-white m-2 mx-4 font-bold w-max rounded-lg px-2" style={{
                    // rainbow gradient
                    background: 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)'
                }}>NAHHHHHHHHHHHHHHHHH WHY</h1>
                <p className="ml-4 text-white">cum on me bbg {'<3'}</p>
                <div className="absolute right-5 bottom-5 p-1 px-2">
                    <motion.button
                        whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}
                        onClick={() => setNahBro(false)}
                        className="bg-green-500 rounded-lg border-2 border-black drop-shadow-xl px-2 mx-2">ok</motion.button>
                </div>
            </motion.div>

            {
                intro && (
                    <motion.div className="bg-black absolute left-0 top-0 w-screen h-screen"
                                initial={{opacity: 1}}
                                animate={{opacity: 0}}
                                transition={{delay: 1, duration: 1}}>
                        <motion.div
                            style={{ transform: 'translate(-50%, -50%)', top: '50%', left: '50%', textAlign: 'center' }}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1 }}>
                            <h1 style={{ fontSize: '10vw' }}>Minecraft</h1>
                            <motion.h2
                                initial={{ fontSize: '4vw', transform: 'translateY(-50px)', opacity: 0 }}
                                animate={{ fontSize: '5vw', transform: 'translateY(0)', opacity: 1 }}
                                transition={{delay: 0.5, duration: 0.5}}>
                                THE SEX UPDATE
                            </motion.h2>
                        </motion.div>
                    </motion.div>
                )
            }

            <Watermark />
        </div>
    )
}