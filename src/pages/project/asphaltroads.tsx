import Watermark from "@/components/Watermark";
import Head from "next/head";
import { motion } from "framer-motion";
import Script from "next/script";
import {CSSProperties} from "react";

const itemStyle: CSSProperties = {
    width: 'calc(100% - 45px)'
}

export default function AsphaltRoads() {
    return (
        <main>
            <Head>
                <title>Asphalt Roads | mldkyt.com</title>
                <meta name="title" content="Asphalt Roads mod | mldkyt's website" />
                <meta name="description" content="Adds asphalt roads into My Summer Car." />
                <meta name="author" content="mldkyt" />
                <Script async src={process.env.ADS_URL} crossOrigin="anonymous"></Script>
            </Head>
            <br />
            <h1 className="text-3xl font-bold mx-2">Asphalt Roads</h1>
            <p></p>
            <h2 className="text-xl font-bold mx-4">Features (as of now):</h2>
            <p></p>
            <p className="mx-6">&bull; Changes dirt roads to asphalt roads</p>
            <p className="mx-6">&bull; Also changes the feel of the roads</p>
            <p className="mx-6">&bull; Bonus feature where you can convert the grass to asphalt as well</p>
            {/* changelog heading */}
            <p></p>
            <h2 className="text-xl font-bold mx-4">Changelog:</h2>
            <p></p>
            <h3 className="text-xl font-bold mx-6">v1.2</h3>
            <p className="mx-8">&bull; Walking sounds is now correct.</p>
            <p className="mx-8">&bull; Removed some unused code.</p>
            <h3 className="text-xl font-bold mx-6">v1.1</h3>
            <p className="mx-8">&bull; Added more routes you can convert to asphalt.</p>
            <p className="mx-8">&bull; Fixed coloring of the asphalt.</p>
            <p className="mx-8">&bull; Improved performance.</p>
            <h3 className="text-xl font-bold mx-6">v1.0</h3>
            <h3 className="mx-8">&bull; Initial release.</h3>
            <p style={itemStyle} className="m-2 rounded-lg border-2 border-red-500 px-2 py-1 text-white">This mod is not compatible with any other mods that affect the roads. Please make sure to remove any conflicting mods before using this mod.</p>
            <p></p>
            <br />
            <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="w-max">
                <a href="https://www.nexusmods.com/mysummercar/mods/3052" className="m-2 rounded-lg border-2 border-white px-2 py-1">Go to NexusMods</a>
            </motion.div>
            <Watermark />
        </main>
    )
}