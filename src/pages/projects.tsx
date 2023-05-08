import Watermark from "@/components/Watermark";
import Head from "next/head";
import NavBar from "../components/NavBar";

export default function Mods() {
    return (
        <>
            <Head>
                <title>mldkyt's website</title>
                <meta name="title" content="Projects | mldkyt's website" />
                <meta name="description" content="List of mldkyt's projects, whether online or offline." />
                <meta name="author" content="mldkyt" />
            </Head>
            <NavBar />
            <br/>
            <h1 className="text-3xl font-bold px-2">mldkyt's project list</h1>
            <p>This are all of mldkyt's projects.</p>
            <h2 className="text-2xl underline px-4">My Summer Car mods</h2>

            <p></p>

            <div className="bg-gradient-to-b from-gray-600 to-gray-500 m-4 py-2 rounded-lg drop-shadow-xl">
                <h3 className="px-2 text-xl text-white">
                    Asphalt Roads
                </h3>
                <p className="px-4 text-white">
                    Changes dirt roads to asphalt roads. Also changes the feel of the roads.
                </p>
                <a className="m-2 mx-2 bg-green-500 rounded-lg p-0.5 px-1 border-2 border-black" href="/project/asphaltroads">Visit project's page</a>
            </div>

            <p></p>

            <div className="bg-gradient-to-b from-gray-600 to-gray-500 m-4 py-2 rounded-lg drop-shadow-xl">
            <h3 className="px-2 text-xl text-white">
                MSC Tweaks
            </h3>
            <p className="px-4 text-white">
                A set of tweaks for My Summer Car.
            </p>
            <a className="m-2 mx-2 bg-green-500 rounded-lg p-0.5 px-1 border-2 border-black" href="/project/msctweaks">Visit project's page</a>
            </div>

            <p></p>

            <div className="bg-gradient-to-b from-gray-600 to-gray-500 m-4 py-2 rounded-lg drop-shadow-xl">
                <h3 className="px-2 text-xl text-white">
                    OldCarSounds
                </h3>
                <p className="px-4 text-white">
                    OldCarSounds is a mod that changed the Satsuma to the old state.
                </p>
                <a className="m-2 mx-2 bg-green-500 rounded-lg p-0.5 px-1 border-2 border-black" href="/project/oldcarsounds">Visit project's page</a>
            </div>

            <p></p>

            <div className="bg-gradient-to-b from-gray-600 to-gray-500 m-4 py-2 rounded-lg drop-shadow-xl">
                <h3 className="px-2 text-xl text-white">
                    Old highway cars
                </h3>
                <p className="px-4 text-white">
                    Old highway cars replaces cars on highway with satsumas from build 171
                </p>
                <a className="m-2 mx-2 bg-green-500 rounded-lg p-0.5 px-1 border-2 border-black" href="/project/oldhighwaycars">Visit project's page</a>
            </div>

            <p></p>

            <div className="bg-gradient-to-b from-gray-600 to-gray-500 m-4 py-2 rounded-lg drop-shadow-xl">
                <h3 className="px-2 text-xl text-white">
                    Old hayosiko
                </h3>
                <p className="px-4 text-white">
                    Old hayosiko returned the hayosiko to its old state.
                </p>
                <a className="m-2 mx-2 bg-green-500 rounded-lg p-0.5 px-1 border-2 border-black" href="/project/oldhayosiko">Visit project's page</a>
            </div>

            <p></p>

            <div className="bg-gradient-to-b from-gray-600 to-gray-500 m-4 py-2 rounded-lg drop-shadow-xl">
                <h3 className="px-2 text-xl text-white">
                    Old world
                </h3>
                <p className="px-4 text-white">
                    Old world returned the world to its old state.
                </p>
                <a className="m-2 mx-2 bg-green-500 rounded-lg p-0.5 px-1 border-2 border-black" href="/project/oldworld">Visit project's page</a>
            </div>

            <p></p>

            <div className="bg-gradient-to-b from-gray-600 to-gray-500 m-4 py-2 rounded-lg drop-shadow-xl">
                <h3 className="px-2 text-xl text-white">
                    Kekmet more gears
                </h3>
                <p className="px-4 text-white">
                    Kekmet more gears allows you to buy more gears to the kekmet.
                </p>
                <a className="m-2 mx-2 bg-green-500 rounded-lg p-0.5 px-1 border-2 border-black" href="/project/kekmetmoregears">Visit project's page</a>
            </div>

            <p></p>

            <div className="bg-gradient-to-b from-gray-600 to-gray-500 m-4 py-2 rounded-lg drop-shadow-xl">
            <h3 className="px-2 text-xl text-white">
                Kekmet speedometer
            </h3>
            <p className="px-4 text-white">
                A slightly broken mod that replaces the tachometer with a speedometer in the kekmet.
            </p>
            <a className="m-2 mx-2 bg-green-500 rounded-lg p-0.5 px-1 border-2 border-black" href="/project/kekmetspeedometer">Visit project's page</a>
            </div>
            


            <h2 className="text-2xl underline px-4">Other projects</h2>


            <div className="bg-gradient-to-b from-gray-600 to-gray-500 m-4 py-2 rounded-lg drop-shadow-xl">
                <h3 className="px-2 text-xl text-white">
                    IRL Simulator
                </h3>
                <p className="px-4 text-white">
                    IRL Simulator is a game where you simulate your life.
                </p>
                <a className="m-2 mx-2 bg-green-500 rounded-lg p-0.5 px-1 border-2 border-black" href="/project/irlsimulator">Visit project's page</a>
            </div>


            <h2 className="text-2xl underline px-4">Online utilities</h2>


            <div className="bg-gradient-to-b from-gray-600 to-gray-500 m-4 py-2 rounded-lg drop-shadow-xl">
                <h3 className="px-2 text-xl text-white">
                    Discord Timestamp Generator
                </h3>
                <p className="px-4 text-white">
                    Allows you to generate timestamps for Discord.
                </p>
                <a className="m-2 mx-2 bg-green-500 rounded-lg p-0.5 px-1 border-2 border-black" href="/util/discord/timestamp-generator">Visit utility's page</a>
            </div>
            <Watermark />
        </>
    )
}