import Watermark from "@/components/Watermark";
import Head from "next/head";
import Sidebar from "../../components/Sidebar";
import { motion } from "framer-motion";
import Script from "next/script";

export default function OldTruckSounds() {
    return (
        <>
            <Head>
                <title>Old World | mldkyt.com</title>
                <meta name="title" content="Old World | mldkyt's website" />
                <meta name="description" content="Returns the ingame world to the older version in My Summer Car." />
                <meta name="author" content="mldkyt" />
                <Script async src={process.env.ADS_URL} crossOrigin="anonymous"></Script>
            </Head>
            <br />
            <h1 className="text-3xl font-bold mx-2">Old World</h1>
            <p className="mx-6">
                This mod removes new map decorations from My Summer Car and makes the game map look like it was during the game's initial release. The mod also allows you to switch to road and grass textures from pre-releases of My Summer Car, giving you a more classic and nostalgic feel.
            </p>
            <h2 className="text-xl font-bold mx-4">How to use</h2>
            <p className="mx-6">
                To use this mod, you will need the MSCLoader mod loader. Simply download and install the mod using the MSCLoader and start your game. Once in-game, you will be able to select the road and grass textures you want from the mod menu in the MSCLoader.
            </p>
            <h2 className="text-xl font-bold mx-4">Features:</h2>
            <p className="mx-6">&bull; Removes new map decorations and makes the game map look like it was during the game's initial release.</p>
            <p className="mx-6">&bull; Allows you to switch to road and grass textures from pre-releases of My Summer Car.</p>
            <p className="mx-6">&bull; Easy to install and use with MSCLoader.</p>
            <p className="mx-6">&bull; Hosted on NexusMods for easy access and download.</p>

            <p className="m-2 rounded-lg px-2 py-1 border-2 border-red-500 text-white">This mod is not compatible with any other mods that affect the game's map or road and grass textures. Please make sure to remove any conflicting mods before using this mod.</p>
            <br />
            <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="w-max">
                <a href="https://www.nexusmods.com/mysummercar/mods/1059" className="border-2 border-white m-2 px-2 py-1 rounded-lg">Go to NexusMods page</a>
            </motion.div>
            <Watermark />
        </>
    )
}