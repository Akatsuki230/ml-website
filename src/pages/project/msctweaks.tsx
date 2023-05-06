import Watermark from "@/components/Watermark";
import Head from "next/head";
import NavBar from "../../components/NavBar";

export default function MSCTweaks() {
    return (
        <>
            <Head>
                <title>MSC Tweaks | mldkyt.com</title>
                <meta name="title" content="MSC Tweaks | mldkyt's website" />
                <meta name="description" content="Changes Satsuma's sounds for the old ones." />
                <meta name="author" content="mldkyt" />
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187" crossOrigin="anonymous"></script>
            </Head>
            <NavBar />
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
            <br/>
            <a href="https://www.nexusmods.com/mysummercar/mods/3248" className="bg-orange-500 m-2 px-4 py-2 rounded-lg drop-shadow-lg">Go to NexusMods page</a>
            <a href="https://forms.gle/CXvB8hVuqbEEaann9" className="bg-purple-500 m-2 px-4 py-2 rounded-lg drop-shadow-lg">Suggest a new feature</a>
            <Watermark />
        </>
    )
}