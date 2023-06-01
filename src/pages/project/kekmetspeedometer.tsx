import Head from "next/head";
import Sidebar from "../../components/Sidebar";
import Watermark from "@/components/Watermark";
import { motion } from "framer-motion";
import Script from "next/script";

export default function KekmetSpeedometer() {
    return (
        <>
            <Head>
                <title>Kekmet speedometer | mldkyt.com</title>
                <meta name="title" content="Kekmet speedometer | mldkyt's website" />
                <meta name="description" content="Replaces the Kekmet's tachometer with a speedometer." />
                <meta name="author" content="mldkyt" />
                <Script async src={process.env.ADS_URL} crossOrigin="anonymous"></Script>
            </Head>
            <br />
            <h1 className="text-3xl font-bold mx-2">Kekmet speedometer</h1>
            <p className="mx-6">
            This mod replaces the tachometer in your Kekmet tractor with a speedometer, giving you a more accurate and precise way of measuring your speed. No more guessing or eyeballing your speed, with the Kekmet Speedometer mod, you can keep track of your speed with ease.
            </p>
            <h2 className="text-xl font-bold mx-4">How to use</h2>
            <p className="mx-6">
            To use this mod, you will need the MSCLoader mod loader. Simply download and install the mod using the MSCLoader and start your game. Once in-game, the tachometer in your Kekmet will automatically be replaced with the speedometer.
            </p>
            <h2 className="text-xl font-bold mx-4">Features</h2>
            <p className="mx-6">&bull; Replaces the tachometer in the Kekmet with a speedometer for more accurate speed measurement.</p>
            <p className="mx-6">&bull; Easy to install and use with MSCLoader.</p>
            <p className="mx-6">&bull; Hosted on NexusMods for easy access and download.</p>
            <p className="m-2 rounded-lg border-2 border-red-500 px-2 py-1 text-white">This mod is not compatible with any other mods that affect the Kekmet's tachometer. Please make sure to remove any conflicting mods before using this mod.</p>
            <p className="text-sm mx-6">
                This content was generated using AI. If you find any errors, please report them to me on Discord (mldkyt#2555) or on Twitter (@mldkyt).
            </p>
            <br />
            <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="w-max">
                <a href="https://www.nexusmods.com/mysummercar/mods/1580" className="m-2 px-2 py-1 rounded-lg border-2 border-white">Go to NexusMods</a>
            </motion.div>
            <Watermark />
        </>
    )
}