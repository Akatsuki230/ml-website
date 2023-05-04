import Watermark from "@/components/Watermark";
import Head from "next/head";
import NavBar from "../../components/NavBar";

export default function OldTruckSounds() {
    return (
        <>
            <Head>
                <title>Old World | mldkyt.com</title>
                <meta name="title" content="Old World | mldkyt's website" />
                <meta name="description" content="Returns the ingame world to the older version in My Summer Car." />
                <meta name="author" content="mldkyt" />
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187" crossOrigin="anonymous"></script>
            </Head>
            <NavBar />
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
            
                <p className="bg-gradient-to-b from-red-600 to-red-400 m-2 rounded-lg drop-shadow-lg px-2 py-1 text-white">This mod is not compatible with any other mods that affect the game's map or road and grass textures. Please make sure to remove any conflicting mods before using this mod.</p>
            
            <a href="https://www.nexusmods.com/mysummercar/mods/1059" className="bg-orange-500 m-2 px-4 py-2 rounded-lg drop-shadow-lg">Go to NexusMods page</a>
            <Watermark />
        </>
    )
}