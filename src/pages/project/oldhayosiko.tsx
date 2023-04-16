import Watermark from "@/components/Watermark";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import NavBar from "../../components/NavBar";

export default function OldTruckSounds() {
    return (
        <>
            <Head>
                <title>Old Hayosiko | mldkyt.com</title>
                <meta name="title" content="Old Hayosiko | mldkyt's website" />
                <meta name="description" content="Returns the Hayosiko to look like from the old versions in My Summer Car" />
                <meta name="author" content="mldkyt" />
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187" crossOrigin="anonymous"></script>
            </Head>
            <NavBar />
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
            <p className="bg-gradient-to-b from-red-600 to-red-400 m-2 rounded-lg drop-shadow-lg px-2 py-1 text-white">This mod is not compatible with any other mods that affect the Hayosiko van. Please make sure to remove any conflicting mods before using this mod.</p>
            <Link href="https://www.nexusmods.com/mysummercar/mods/804" className="bg-orange-500 m-2 px-4 py-2 rounded-lg drop-shadow-lg">Go to NexusMods page</Link>
            <Watermark />
        </>
    )
}