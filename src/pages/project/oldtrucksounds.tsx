import Watermark from "@/components/Watermark";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import NavBar from "../../components/NavBar";

export default function OldTruckSounds() {
    return (
        <>
            <Head>
                <title>Old Truck Sounds | mldkyt.com</title>
                <meta name="title" content="Old Truck Sounds | mldkyt's website" />
                <meta name="description" content="Returns the truck to it's early alpha version in My Summer Car." />
                <meta name="author" content="mldkyt" />
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187" crossOrigin="anonymous"></script>
            </Head>
            <NavBar />
            <br />
            <h1 className="text-3xl font-bold mx-2">Old Truck Sounds</h1>
            <p className="mx-6">
            This mod changes the sounds of the Gifu truck in My Summer Car, giving it a more classic and nostalgic feel. With 3 different sound variations to choose from - unchanged, release, and beta - you can choose the sound that fits your preferred playing style. The release sounds are taken from the game's initial release, while the beta sounds are from pre-releases of My Summer Car. The mod also includes additional features, such as an old starting sound, an old style and an old load sound.
            </p>
            <h2 className="text-xl font-bold mx-4">How to use</h2>
            <p className="mx-6">
            To use this mod, you will need the MSCLoader mod loader. Simply download and install the mod using the MSCLoader and start your game. Once in-game, you will be able to select the sound variation you want from the mod menu in the MSCLoader.
            </p>
            <h2 className="text-xl font-bold mx-4">Features:</h2>
            <p className="mx-6">&bull; 3 different sound variations to choose from - unchanged, release, and beta.</p>
            <p className="mx-6">&bull; Includes additional features such as an old starting sound, an old style, and an old load sound.</p>
            <p className="mx-6">&bull; Easy to install and use with MSCLoader.</p>
            <p className="mx-6">&bull; Hosted on NexusMods for easy access and download.</p>
            <p className="bg-gradient-to-b from-red-600 to-red-400 m-2 rounded-lg drop-shadow-lg px-2 py-1 text-white">This mod is not compatible with any other mods that affect the Gifu truck sounds. Please make sure to remove any conflicting mods before using this mod.</p>
            <Link href="https://www.nexusmods.com/mysummercar/mods/1332" className="bg-orange-500 m-2 px-4 py-2 rounded-lg drop-shadow-lg">Go to NexusMods page</Link>
            <Watermark />
        </>
    )
}