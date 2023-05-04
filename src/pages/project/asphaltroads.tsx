import Watermark from "@/components/Watermark";
import Head from "next/head";
import NavBar from "../../components/NavBar";

export default function AsphaltRoads() {
    return (
        <>
            <Head>
                <title>Asphalt Roads | mldkyt.com</title>
                <meta name="title" content="Asphalt Roads mod | mldkyt's website" />
                <meta name="description" content="Adds asphalt roads into My Summer Car." />
                <meta name="author" content="mldkyt" />
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187" crossOrigin="anonymous"></script>
            </Head>
            <NavBar/>
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
            <p className="bg-gradient-to-b from-red-600 to-red-400 m-2 rounded-lg drop-shadow-lg px-2 py-1 text-white">This mod is not compatible with any other mods that affect the roads. Please make sure to remove any conflicting mods before using this mod.</p>
            <p></p>
            <a href="https://www.nexusmods.com/mysummercar/mods/3052" className="bg-orange-500 m-2 px-4 py-2 rounded-lg drop-shadow-lg">Go to NexusMods</a>
            <Watermark />
        </>
    )
}