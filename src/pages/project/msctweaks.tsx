import Watermark from "@/components/Watermark";
import Head from "next/head";
import Sidebar from "../../components/Sidebar";
import { motion } from "framer-motion";
import Script from "next/script";

export default function MSCTweaks() {
    return (
        <>
            <Head>
                <title>MSC Tweaks | mldkyt.com</title>
                <meta name="title" content="MSC Tweaks | mldkyt's website" />
                <meta name="description" content="Changes Satsuma's sounds for the old ones." />
                <meta name="author" content="mldkyt" />
                <Script async src={process.env.ADS_URL} crossOrigin="anonymous"></Script>
            </Head>
            <br />
            <h1 className="text-3xl font-bold mx-2">MSC Tweaks</h1>
            <p className="mx-6">
                This mod changes the way the game works in small ways. For example, IRL, you can't die from urine. This mod adds automatic urine draining, so you don't have to worry about dying from urine.
            </p>
            <h2 className="text-xl font-bold mx-4">How to use</h2>
            <p className="mx-6">
                To use this mod, you will need the MSCLoader mod loader. Simply download and install the mod using the MSCLoader and start your game. Once in-game, you can select between the pre-release and release versions of the car sounds from the mod menu in the MSCLoader.
            </p>
            <h2 className="text-xl font-bold mx-4">Different tweaks:</h2>
            <p className="mx-6">&bull; Disable Pena, Jani or Petteri</p>
            <p className="mx-6">&bull; Can't die from burst bladder (mentioned above)</p>
            <p className="mx-6">&bull; Saving of Satsuma's temperature</p>
            <p className="mx-6">&bull; Force enable the console</p>
            <p className="mx-6">&bull; Fall damage (buggy)</p>
            <p className="mx-6">&bull; Easier to use Window handles on the shitsuma</p>
            <br />
            {/* put on one line */}
            <div className="flex flex-row flex-wrap">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-max">
                    <a href="https://www.nexusmods.com/mysummercar/mods/3248" className="m-2 ml-4 px-2 py-1 rounded-lg border-2 border-white">Go to NexusMods page</a>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-max">
                    <a href="https://forms.gle/CXvB8hVuqbEEaann9" className="m-1 px-2 py-1 rounded-lg border-2 border-white">Suggest a new feature</a>
                </motion.div>
            </div>
            <Watermark />
        </>
    )
}