import Watermark from "@/components/Watermark";
import Head from "next/head";
import Sidebar from "../../components/Sidebar";
import { motion } from "framer-motion";
import Script from "next/script";

export default function OldTruckSounds() {
    return (
        <>
            <Head>
                <title>Old Hayosiko | mldkyt.com</title>
                <meta name="title" content="Old Hayosiko | mldkyt's website" />
                <meta name="description" content="Returns the Hayosiko to look like from the old versions in My Summer Car" />
                <meta name="author" content="mldkyt" />
                <Script async src={process.env.ADS_URL} crossOrigin="anonymous"></Script>
            </Head>
            <br />
            <h1 className="text-3xl font-bold mx-2">Old Hayosiko</h1>
            <p className="mx-6">
            This mod makes the Hayosiko van in My Summer Car look like it was from the pre-release versions of the game. With this mod, you can give your Hayosiko van a classic and nostalgic feel.
            </p>
            <h2 className="text-xl font-bold mx-4">How to use</h2>
            <p className="mx-6">
            To use this mod, you will need the MSCLoader mod loader. Simply download and install the mod using the MSCLoader and start your game. Once in-game, the Hayosiko van will automatically be updated to the pre-release version.
            </p>
            <h2 className="text-xl font-bold mx-4">Features:</h2>
            <p className="mx-8">&bull; Makes the Hayosiko van look like it was from the pre-release versions of My Summer Car.</p>
            <p className="mx-8">&bull; Easy to install and use with MSCLoader.</p>
            <p className="mx-8">&bull; Hosted on NexusMods for easy access and download.</p>
            <p className="rounded-lg m-2 px-2 py-1 text-white border-2 border-red-500">This mod is not compatible with any other mods that affect the Hayosiko van. Please make sure to remove any conflicting mods before using this mod.</p>
            <br />
            <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="w-max">
                <a href="https://www.nexusmods.com/mysummercar/mods/804" className="m-2 px-2 py-1 rounded-lg border-2 border-white">Go to  NexusMods page</a>
            </motion.div>
            <Watermark />
        </>
    )
}