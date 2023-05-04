import NavBar from "@/components/NavBar";
import Watermark from "@/components/Watermark";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";

const WEBHOOK = "https://discord.com/api/webhooks/1049404188846727299/-TNhDH1vvj7FJuiQAJ5ZshpxnyTp22OQv3EeLRwnHr4K4t2iGwKqzkG-K8Rxrl_07E7g";
const USER_ID = "575536897141637120";

export default function SexPack() {
    const [DO_NOT_DARE_TO_TOUCH_THIS, setDO_NOT_DARE_TO_TOUCH_THIS] = useState(false);
    const [showWarning, setShowWarning] = useState(true);
    const [youSure, setYouSure] = useState(false);
    const [nahBro, setNahBro] = useState(false);
    const [userName, setUserName] = useState("");
    const [enemyName, setEnemyName] = useState("");
    const [fallDist, setFallDist] = useState(24);

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
            <a href="https://www.youtube.com/watch?v=UJzE-KENUyw" className="m-2 bg-black text-white underline drop-shadow-lg p-0.5 px-1 rounded-lg">
                Watch the making out of this texture pack! Warning: Sexual (Click me to watch)
            </a>
            <div className="bg-gradient-to-b from-gray-600 to-gray-400 m-2 rounded-lg">
                <p className="text-3xl">Version 1.0</p>
                <p className="text-red-600 text-3xl ml-2">HOT!</p>
                <p className="text-3xl ml-4">&bull; Initial cum release</p>
            </div>
            <div className="bg-gradient-to-b from-purple-400 to-pink-300 m-2 rounded-lg">
                <span className="text-3xl m-2">Preview area</span>
                <span className="text-3xl text-purple-700">sex</span>
                <br />
                <label className="text-red-500 ml-2">Enter your bitch's username lmao: </label>
                <input type="text" className="border-2 border-black rounded-lg text-black"
                    value={enemyName} onChange={x => setEnemyName(x.currentTarget.value)} />
                <br />
                <label className="text-green-300 ml-2">Enter your username to preview: </label>
                <input type="text" className="border-2 border-black rounded-lg text-black"
                    value={userName} onChange={x => setUserName(x.currentTarget.value)} />
                <br />
                <label>Fall distance: </label>
                <input type="range" min="24" max="2147483647" value={fallDist} onChange={x => setFallDist(x.currentTarget.valueAsNumber)} className="w-96" />
                <span>{fallDist != 2147483647 ? fallDist : '-1'} blocks</span>
                <span className="ml-2 text-gray-600">okay this is pointless</span>
                <p className="ml-2">Dying from an anvil: {drawName(userName)} squashed {drawName(enemyName)}'s ass</p>
                <p className="ml-2">Dying from an arrow: {drawName(enemyName)} was remotely penetrated by {drawName(userName)}</p>
                <p className="ml-2">Dying from a cactus: {drawName(enemyName)} sticked a cactus in his ass when {drawName(userName)} was chasing them with his dick</p>
                <p className="ml-2">Dying from entityCramming: {drawName(enemyName)} was penetrated by {drawName(userName)}</p>
                <p className="ml-2">Dying from dragon breath: {drawName(enemyName)} said "yo that dragon lookin fine today" in front of {drawName(userName)}</p>
                <p className="ml-2">Dying from drowning: {drawName(enemyName)} drank water instead of {drawName(userName)}'s cum</p>
                <p className="ml-2">Dying from an explosion: {drawName(enemyName)} blew out the cum</p>
                <p className="ml-2">Dying from explosion: {drawName(userName)} blew cum on {drawName(enemyName)}</p>
                <p className="ml-2">Dying from fireball: {drawName(enemyName)} was hot cum'd by {drawName(userName)}</p>
                <p className="ml-2">Dying from fireworks: {drawName(userName)} inserted a firework into {drawName(enemyName)}'s ass</p>
                <p className="ml-2">Dying from flying into a wall (duh): {drawName(enemyName)} broke his dick against a wall</p>
                <p className="ml-2">Dying from freezing: {drawName(userName)} helped with freezing {drawName(enemyName)}'s cock and balls, so they would fall off</p>
                <p className="ml-2">Dying from /kill: {drawName(userName)} made out with {drawName(enemyName)}</p>
                <p className="ml-2">Dying from in fire: {drawName(enemyName)} had hot sex with {drawName(userName)}</p>
                <p className="ml-2">Dying from lava: {drawName(enemyName)} had way too hot sex with {drawName(userName)}</p>
                <p className="ml-2">Dying from lightning bolt: {drawName(enemyName)} was penetrated by nature whilst fighting {drawName(userName)}</p>
                <p className="ml-2">Dying from magic (witch): {drawName(enemyName)} was killed by a fucking Bitch</p>
                <p className="ml-2">Dying from melee: {drawName(enemyName)} was raped by {drawName(userName)}</p>
                <p className="ml-2">Dying from a stalagmite: {drawName(enemyName)} enjoyed sitting on a stalagmite after {drawName(userName)} told him</p>
                <p className="ml-2">Dying from starvation: {drawName(enemyName)} didn't get cum from {drawName(userName)}</p>
                <p className="ml-2">Dying from thorns: {drawName(enemyName)} accidentally ass poked themselves whilst trying to hurt {drawName(userName)}</p>
                <p className="ml-2">Dying from a wither: {drawName(enemyName)} didn't have bitches from {drawName(userName)}</p>
                <p className="ml-2">Dying from a fall: {drawName(enemyName)} broke his dick after falling 24 or more meters</p>
                <p className="ml-2">Dying with assistance: {drawName(enemyName)} made out with {drawName(userName)} way too hard</p>
            </div>
            
            <div className={`${showWarning ? '' : 'hidden'} fixed left-0 top-0 w-screen h-screen bg-pink-300`}>
                <h1 style={{
                    fontSize: '100px'
                }}>WARNING!!!!!!!!!!!!!!!</h1>
                <p style={{
                    fontSize: '50px'
                }}>PROCEED WITH CAUTION.</p>
                <p className="text-sm">- professional page desing inc</p>
                <div className="flex w-full text-center">
                    <button onClick={() => setShowWarning(false)} className="w-1/2 h-96 bg-green-500 rounded-full">Yes!!!!!!!</button>
                    <a className="w-1/2" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        <button className="w-full h-96 bg-red-500 rounded-full">nah</button>
                    </a>
                </div>
            </div>

            <div className={`${youSure ? '' : 'hidden'} fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-600 w-[500px] h-48 drop-shadow-2xl rounded-lg border-4 border-black`}>
                <h1 className="text-white m-2 mx-4 font-bold">You REALLY WANNA DOWNLOAD THIS?</h1>
                <p className="ml-4 text-white">Big mistake</p>
                <div className="absolute right-5 bottom-5 p-1 px-2">
                    <button onClick={download} className="bg-green-500 rounded-lg border-2 border-black drop-shadow-xl px-2 mx-2">Yes papa please download, cum on me!!</button>
                    <button onClick={() => setYouSure(false)} className="bg-red-500 rounded-lg border-2 border-black drop-shadow-xl px-2 mx-2">nah bro</button>
                </div>
            </div>

            <div className={`${nahBro ? '' : 'hidden'} fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 w-[500px] h-48 drop-shadow-2xl rounded-lg border-4 border-black`}>
                <h1 className="text-white m-2 mx-4 font-bold w-max rounded-lg px-2" style={{
                        // rainbow gradient
                        background: 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)'
                    }}>NAHHHHHHHHHHHHHHHHH WHY</h1>
                <p className="ml-4 text-white">cum on me bbg {'<3'}</p>
                <div className="absolute right-5 bottom-5 p-1 px-2">
                    
                    <button onClick={() => setNahBro(false)} className="bg-green-500 rounded-lg border-2 border-black drop-shadow-xl px-2 mx-2">ok</button>
                </div>
            </div>
            <Watermark />
        </div>
    )
}