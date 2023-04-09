import NavBar from "@/components/NavBar";
import Watermark from "@/components/Watermark";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function SexPack() {
    const [DO_NOT_DARE_TO_TOUCH_THIS, setDO_NOT_DARE_TO_TOUCH_THIS] = useState(false);
    const [showWarning, setShowWarning] = useState(true);
    const [youSure, setYouSure] = useState(false);
    const [nahBro, setNahBro] = useState(false);

    const hasRan = useRef(false);

    useEffect(() => {
        if (!hasRan.current) {
            hasRan.current = true;
            fetch('/api/sex/slave')
        }
    })

    return (
        <div style={{
            fontFamily: 'Comic Sans MS'
        }}>
            <Head>
                <title>Sex pack</title>
            </Head>
            <NavBar />
            <br />
            <img src="/sex/sex1.jpg" alt="sex message 1" className="w-full absolute top-7 -z-10"></img>
            <h1 className="text-3xl text-white font-bold">Sex pack?!?!?!?</h1>
            <p className="ml-2 text-white">Yes, you can now penetrate your friends with better death messages in minecraft!!!!</p>
            <div className="flex w-full text-center">
                <div className="w-1/4">
                    <img src="/sex/sex2.jpg" alt="shoot me donw"></img>
                    <span className="text-white bg-black">Do not drink water!</span>
                </div>
                <div className="w-1/4">
                    <img src="/sex/sex3.jpg" alt="ofkjiogjeroirewiog"></img>
                    <span className="text-white bg-black">Get killed by creepers!</span>
                </div>
                <div className="w-1/4">
                    <img src="/sex/sex4.jpg" alt="death chat message saying catalin had hot sex with mldkyt"></img>
                    <span className="text-white bg-black">Burn to death!</span>
                </div>
                <div className="w-1/4">
                    <img src="/sex/sex5.jpg" alt="please do not cancel me"></img>
                    <span className="text-pink-300 bg-black">Have funnn!</span>
                </div>
            </div>
            <button className="bg-green-500 px-4 p-1 border-2 border-black rounded-lg ml-2 drop-shadow-lg" onMouseEnter={() => setDO_NOT_DARE_TO_TOUCH_THIS(true)} onMouseLeave={() => setDO_NOT_DARE_TO_TOUCH_THIS(false)} onClick={() => setYouSure(true)}>Download sex_pack.zip</button>
            {DO_NOT_DARE_TO_TOUCH_THIS && <p className="bg-black w-max ml-2 rounded-lg text-white">I DARE YOU..... DO NOT CLICK THAT BUTTON!!!</p>}
            {DO_NOT_DARE_TO_TOUCH_THIS && <p className="bg-black w-max ml-2 rounded-lg text-red-500">YOU WILL REGRET THIS FOR LIFE!</p>}
            <p className="bg-gradient-to-r from-green-300 to-pink-500 w-max ml-2 rounded-lg">^^^^^^^ DOWNLOAOD BABYYYYYYYY</p>
            <p className="text-white">Version: 1.0</p>
            <p style={{
                fontSize: '50px',
                // rainbow gradient
                background: 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)'
            }} className="text-white w-max rounded-lg drop-shadow-2xl border-4 border-black">Please set this as your main resource pack {'<3'}</p>
            <p>This page is intended to look like ass, other pages look decent enough lmao.</p>
            <Link href="https://www.youtube.com/watch?v=UJzE-KENUyw" className="m-2 bg-black text-white underline drop-shadow-lg p-0.5 px-1 rounded-lg">
                Watch the making out of this texture pack! Warning: Sexual (Click me to watch)
            </Link>
            <p className="text-3xl">Version 1.0</p>
            <p className="ml-2">Dying from an anvil yields: {'<'}player{'>'} squashed his ass using an anvil</p>
            <p className="ml-2">Dying from an arrow yields: {'<'}player{'>'} was remotely penetrated by {'<'}player{'>'}</p>
            <p className="ml-2">Dying from a cactus yields: {'<'}player{'>'} loved sticking a cactus up their butt</p>
            <p className="ml-2">Dying from entityCramming yields: {'<'}player{'>'} was penetrated too much</p>
            <p className="ml-2">Dying from dragon breath yields: {'<'}player{'>'} thought\"yo that dragon lookin fine today"</p>
            <p className="ml-2">Dying from drowning yields: {'<'}player{'>'} drank water instead of cum</p>
            <p className="ml-2">Dying from an explosion: {'<'}player{'>'} blew out the cum</p>
            <p className="ml-2">Dying from explosion: {'<'}player{'>'} broke his dick after falling 24 or more meters</p>
            <p className="ml-2">Dying from fireball: {'<'}player{'>'} was hot cum'd by {'<'}player{'>'}</p>
            <p className="ml-2">Dying from fireworks: {'<'}player{'>'} stuck a firework up his ass</p>
            <p className="ml-2">Dying from fireworks from another player: {'<'}player{'>'} inserted a firework into {'<'}player{'>'}'s ass</p>
            <p className="ml-2">Dying from flying into a wall (duh): {'<'}player{'>'} broke his dick against a wall</p>
            <p className="ml-2">Dying from freezing: {'<'}player{'>'}'s cock and balls fell off due to freezing</p>
            <p className="ml-2">Dying from /kill: {'<'}player{'>'} jerked off</p>
            <p className="ml-2">Dying from indirect magic (bow): {'<'}player{'>'} was remote penetrated by {'<'}player{'>'}</p>
            <p className="ml-2">Dying from in fire: {'<'}player{'>'} had hot sex</p>
            <p className="ml-2">Dying while on fire: {'<'}player{'>'} died because of hot sex</p>
            <p className="ml-2">Dying from lava: {'<'}player{'>'} had way too hot sex</p>
            <p className="ml-2">Dying from lightning bolt: {'<'}player{'>'} was penetrated by nature</p>
            <p className="ml-2">Dying from magic (witch): {'<'}player{'>'} was killed by a fucking Bitch</p>
            <p className="ml-2">Dying from melee: {'<'}player{'>'} was raped by {'<'}player{'>'}</p>
            <p className="ml-2">Dying from a stalagmite: {'<'}player{'>'} enjoyed sitting on a stalagmite</p>
            <p className="ml-2">Dying from starvation: {'<'}player{'>'} didn't get cum in time</p>
            <p className="ml-2">Dying from thorns: {'<'}player{'>'} accidentally ass poked themselves whilst trying to hurt {'<'}player{'>'}</p>
            <p className="ml-2">Dying from a wither: {'<'}player{'>'} didn't have bitches</p>
            <p className="ml-2">Dying from a fall: {'<'}player{'>'} broke his dick after falling 24 or more meters</p>
            <p className="ml-2">Dying with assistance: {'<'}player{'>'} made out with {'<'}player{'>'} way too hard</p>
            
            <div className={`${showWarning ? '' : 'hidden'} fixed left-0 top-0 w-screen h-screen bg-pink-300`}>
                <h1 style={{
                    fontSize: '100px'
                }}>WARNING!!!!!!!!!!!!!!!</h1>
                <p style={{
                    fontSize: '50px'
                }}>PROCEED WITH CAUTION.</p>
                <div className="flex w-full text-center">
                    <button onClick={() => setShowWarning(false)} className="w-1/2 h-96 bg-green-500 rounded-full">Yes!!!!!!!</button>
                    <Link className="w-1/2" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        <button className="w-full h-96 bg-red-500 rounded-full">nah</button>
                    </Link>
                </div>
            </div>

            <div className={`${youSure ? '' : 'hidden'} fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-600 w-[500px] h-48 drop-shadow-2xl rounded-lg border-4 border-black`}>
                <h1 className="text-white m-2 mx-4 font-bold">You REALLY WANNA DOWNLOAD THIS?</h1>
                <p className="ml-4 text-white">Big mistake</p>
                <div className="absolute right-5 bottom-5 p-1 px-2">
                    <Link href="https://cdn.discordapp.com/attachments/1085512203286888489/1094672423141519530/sex_pack.zip" onClick={() => { setNahBro(true); setYouSure(false); }} className="bg-green-500 rounded-lg border-2 border-black drop-shadow-xl px-2 mx-2">Yes papa please download, cum on me!!</Link>
                    <button onClick={() => setYouSure(false)} className="bg-red-500 rounded-lg border-2 border-black drop-shadow-xl px-2 mx-2">nah bro</button>
                </div>
            </div>

            <div className={`${nahBro ? '' : 'hidden'} fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 w-[500px] h-48 drop-shadow-2xl rounded-lg border-4 border-black`}>
                <h1 className="text-white m-2 mx-4 font-bold w-max rounded-lg px-2" style={{
                        // rainbow gradient
                        background: 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)'
                    }}>nah bro why did you have to do that</h1>
                <p className="ml-4 text-white">cum on me bbg {'<3'}</p>
                <div className="absolute right-5 bottom-5 p-1 px-2">
                    
                    <button onClick={() => setNahBro(false)} className="bg-green-500 rounded-lg border-2 border-black drop-shadow-xl px-2 mx-2">ok</button>
                </div>
            </div>
            <Watermark />
        </div>
    )
}