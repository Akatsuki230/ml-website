import Head from "next/head";
import NavBar from "../../components/NavBar";
import { useRouter } from "next/router";
import Link from "next/link";
import Watermark from "@/components/Watermark";

export default function KekmetSpeedometer() {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Kekmet speedometer | mldkyt.com</title>
            </Head>
            <NavBar />
            <br />
            <h1 className="text-3xl font-bold mx-2">Kekmet speedometer</h1>
            <p className="mx-6">
            This mod replaces the tachometer in your Kekmet tractor with a speedometer, giving you a more accurate and precise way of measuring your speed. No more guessing or eyeballing your speed, with the Kekmet Speedometer mod, you can keep track of your speed with ease.
            </p>
            <h2 className="text-xl font-bold mx-4">How to use</h2>
            <p className="mx-6">
            To use this mod, you will need the MSCLoader mod loader. Simply download and install the mod using the MSCLoader and start your game. Once in-game, the tachometer in your Kekmet will automatically be replaced with the speedometer.
            </p>
            <h2 className="text-xl font-bold mx-4">Features</h2>
            <p className="mx-6">&bull; Replaces the tachometer in the Kekmet with a speedometer for more accurate speed measurement.</p>
            <p className="mx-6">&bull; Easy to install and use with MSCLoader.</p>
            <p className="mx-6">&bull; Hosted on NexusMods for easy access and download.</p>
            <p className="bg-gradient-to-b from-red-600 to-red-400 m-2 rounded-lg drop-shadow-lg px-2 py-1 text-white">This mod is not compatible with any other mods that affect the Kekmet's tachometer. Please make sure to remove any conflicting mods before using this mod.</p>
            <p className="text-sm">
                This content was generated using AI. If you find any errors, please report them to me on Discord (mldkyt#2555) or on Twitter (@mldkyt).
            </p>
            <br />
            <Link href="https://www.nexusmods.com/mysummercar/mods/1580" className="bg-orange-500 m-2 px-4 py-2 rounded-lg drop-shadow-lg">Go to NexusMods</Link>
            <Watermark />
        </>
    )
}