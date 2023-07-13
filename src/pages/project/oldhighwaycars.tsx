import Watermark from "@/components/Watermark";
import Head from "next/head";
import { motion } from "framer-motion";
import Script from "next/script";
import {CSSProperties} from "react";

const itemStyle: CSSProperties = {
    width: 'calc(100% - 45px)'
}

export default function OldTruckSounds() {
    return (
        <>
            <Head>
                <title>Old highway cars | mldkyt.com</title>
                <meta name="title" content="Old highway cars | mldkyt's website" />
                <meta name="description" content="Returns the highway traffic to look like from build 173 of My Summer Car." />
                <meta name="author" content="mldkyt" />
                <Script async src={process.env.ADS_URL} crossOrigin="anonymous"></Script>
            </Head>
            <br/>
            <h1 className="text-3xl font-bold mx-2">Old highway cars</h1>
            <p className="mx-6">
            This mod replaces the cars on the highway in My Summer Car with Satsumas from build 173. This mod will give you a taste of the classic and nostalgic feel of the early days of My Summer Car.
            </p>
            <h2 className="text-xl font-bold mx-4">How to use</h2>
            <p className="mx-6">
            To use this mod, you will need the MSCLoader mod loader. Simply download and install the mod using the MSCLoader and start your game. Once in-game, the cars on the highway will automatically be replaced with Satsumas from build 173.
            </p>
            <h2 className="text-xl font-bold mx-4">Features:</h2>
            <p className="mx-6">&bull; Replaces the cars on the highway with Satsumas from build 173.</p>
            <p className="mx-6">&bull; Easy to install and use with MSCLoader.</p>
            <p className="mx-6">&bull; Hosted on NexusMods for easy access and download.</p>
            <p style={itemStyle} className="m-2 rounded-lg border-2 border-red-500 px-2 py-1 text-white">This mod is not compatible with any other mods that affect the cars on the highway. Please make sure to remove any conflicting mods before using this mod.</p>
            <p></p>
            <br />
            <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="w-max">
                <a href="https://www.nexusmods.com/mysummercar/mods/997" className="border-2 border-white m-2 px-2 py-1 rounded-lg">Go to NexusMods page</a>
            </motion.div>
            <Watermark />
        </>
    )
}