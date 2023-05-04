import Head from "next/head";
import NavBar from "../../components/NavBar";
import Watermark from "@/components/Watermark";

export default function KekmetMoreGears() {
    return (
        <>
            <Head>
                <title>Kekmet more gears | mldkyt.com</title>
                <meta name="title" content="Kekmet more gears | mldkyt's website" />
                <meta name="description" content="Adds more gears to the Kekmet in My Summer Car." />
                <meta name="author" content="mldkyt" />
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187" crossOrigin="anonymous"></script>
            </Head>
            <NavBar />
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
            <p className="bg-gradient-to-b from-red-600 to-red-400 m-2 rounded-lg drop-shadow-lg px-2 py-1 text-white">
                This mod is not compatible with any other mods that affect the Kekmet. Please make sure to remove any conflicting mods before using this mod.
            </p>
            <p className="mx-6 text-sm">
                This content was generated using AI. If you find any errors, please report them to me on Discord (mldkyt#2555) or on Twitter (@mldkyt).
            </p>
            <br />
            <a href="https://www.nexusmods.com/mysummercar/mods/1578" className="bg-orange-500 m-2 px-4 py-2 rounded-lg drop-shadow-lg">Go to NexusMods</a>
            <Watermark />
        </>
    )
}