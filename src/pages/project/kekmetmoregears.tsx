import Head from "next/head";
import Sidebar from "../../components/Sidebar";
import Watermark from "@/components/Watermark";
import { motion } from "framer-motion";
import Script from "next/script";

export default function KekmetMoreGears() {
    return (
        <>
            <Head>
                <title>Kekmet more gears | mldkyt.com</title>
                <meta name="title" content="Kekmet more gears | mldkyt's website" />
                <meta name="description" content="Adds more gears to the Kekmet in My Summer Car." />
                <meta name="author" content="mldkyt" />
                <Script async src={process.env.ADS_URL} crossOrigin="anonymous"></Script>
            </Head>
            <br />
            <h1 className="text-3xl font-bold mx-2">Kekmet more gears</h1>
            <p className="mx-6">
            This mod allows you to upgrade your Kekmet with more gears and a better engine, giving you the ability to handle tougher jobs and get the job done faster. With this mod, you can now enjoy the Kekmet to its fullest potential and take your farming and hauling experiences to the next level.
            </p>
            <h2 className="text-xl font-bold mx-4">How to use</h2>
            <p className="mx-6">
            To use this mod, you will need the MSCLoader mod loader. Simply download and install the mod using the MSCLoader and start your game. Once in-game, you will be able to purchase the upgrades for the Kekmet at any auto repair shop.
            </p>
            <h2 className="text-xl font-bold mx-4">Features</h2>
            <p className="mx-6">&bull; Adds more gears for the Kekmet, allowing for smoother and quicker gear changes.</p>
            <p className="mx-6">&bull; Improves the engine performance of the Kekmet, allowing for better acceleration and speed.</p>
            <p className="mx-6">&bull; Easy to install and use with MSCLoader.</p>
            <p className="mx-6">&bull; Hosted on NexusMods for easy access and download.</p>
            <p className="m-2 rounded-lg border-2 border-red-500 px-2 py-1 text-white">
                This mod is not compatible with any other mods that affect the Kekmet. Please make sure to remove any conflicting mods before using this mod.
            </p>
            <p className="mx-6 text-sm">
                This content was generated using AI. If you find any errors, please report them to me on Discord (mldkyt#2555) or on Twitter (@mldkyt).
            </p>
            <br />
            <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="w-max">
                <a href="https://www.nexusmods.com/mysummercar/mods/1578" className="m-2 px-2 py-1 rounded-lg border-2 border-white">Go to NexusMods</a>
            </motion.div>
            <Watermark />
        </>
    )
}