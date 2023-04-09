import Watermark from "@/components/Watermark";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import NavBar from "../../components/NavBar";

export default function OldTruckSounds() {
    return (
        <>
            <Head>
                <title>Old highway cars | mldkyt.com</title>
            </Head>
            <NavBar />
            <br/>
            <h1 className="text-3xl font-bold mx-2">Old highway cars</h1>
            <p className="mx-6">
            This mod replaces the cars on the highway in My Summer Car with Satsumas from build 173. This mod will give you a taste of the classic and nostalgic feel of the early days of My Summer Car.
            </p>
            <h2 className="text-xl font-bold mx-4">How to use</h2>
            <p className="mx-6">
            To use this mod, you will need the MSCLoader mod loader. Simply download and install the mod using the MSCLoader and start your game. Once in-game, the cars on the highway will automatically be replaced with Satsumas from build 173.
            </p>
            <h2 className="text-xl font-bold mx-4">Features:</h2>
            <p className="mx-6">&bull; Replaces the cars on the highway with Satsumas from build 173.</p>
            <p className="mx-6">&bull; Easy to install and use with MSCLoader.</p>
            <p className="mx-6">&bull; Hosted on NexusMods for easy access and download.</p>
            <p className="bg-gradient-to-b from-red-600 to-red-400 m-2 rounded-lg drop-shadow-lg px-2 py-1 text-white">This mod is not compatible with any other mods that affect the cars on the highway. Please make sure to remove any conflicting mods before using this mod.</p>
            <p></p>
            <Link href="https://www.nexusmods.com/mysummercar/mods/997" className="bg-orange-500 m-2 px-4 py-2 rounded-lg drop-shadow-lg">Go to NexusMods page</Link>
            <Watermark />
        </>
    )
}