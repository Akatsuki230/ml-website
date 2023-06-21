import Watermark from "@/components/Watermark";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Mods() {
    return (
        <>
            <Head>
                <title>mldkyt's website</title>
                <meta name="title" content="Projects | mldkyt's website" />
                <meta name="description" content="List of mldkyt's projects, whether online or offline." />
                <meta name="author" content="mldkyt" />
            </Head>
            <br />
            <h1 className="text-3xl font-bold px-2">mldkyt's project list</h1>
            <p className="ml-6">These are all of mldkyt's projects.</p>
            <h2 className="text-2xl underline px-4">My Summer Car mods</h2>

            <p></p>

            <div className="bg-black border-2 border-white m-4 py-2 rounded-lg drop-shadow-none">
                <h3 className="px-2 text-xl text-white">
                    Asphalt Roads
                </h3>
                <p className="px-4 text-white">
                    Changes dirt roads to asphalt roads. Also changes the feel of the roads.
                </p>
                <motion.div className="w-max ml-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                    <Link className="bg-black rounded-lg p-0.5 px-1 border-2 border-white" href="/project/asphaltroads">Visit project's page</Link>
                </motion.div>
            </div>

            <p></p>

            <div className="bg-black border-2 border-white m-4 py-2 rounded-lg drop-shadow-none">
                <h3 className="px-2 text-xl text-white">
                    MSC Tweaks
                </h3>
                <p className="px-4 text-white">
                    A set of tweaks for My Summer Car.
                </p>
                <motion.div className="w-max ml-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                    <Link className="bg-black rounded-lg p-0.5 px-1 border-2 border-white" href="/project/msctweaks">Visit project's page</Link>
                </motion.div>
            </div>

            <p></p>

            <div className="bg-black border-2 border-white m-4 py-2 rounded-lg drop-shadow-none">
                <h3 className="px-2 text-xl text-white">
                    OldCarSounds
                </h3>
                <p className="px-4 text-white">
                    OldCarSounds is a mod that changed the Satsuma to the old state.
                </p>
                <motion.div className="w-max ml-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                    <Link className="bg-black rounded-lg p-0.5 px-1 border-2 border-white" href="/project/oldcarsounds">Visit project's page</Link>
                </motion.div>
            </div>

            <p></p>

            <div className="bg-black border-2 border-white m-4 py-2 rounded-lg drop-shadow-none">
                <h3 className="px-2 text-xl text-white">
                    Old highway cars
                </h3>
                <p className="px-4 text-white">
                    Old highway cars replaces cars on highway with satsumas from build 171
                </p>
                <motion.div className="w-max ml-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                    <Link className="bg-black rounded-lg p-0.5 px-1 border-2 border-white" href="/project/oldhighwaycars">Visit project's page</Link>
                </motion.div></div>

            <p></p>

            <div className="bg-black border-2 border-white m-4 py-2 rounded-lg drop-shadow-none">
                <h3 className="px-2 text-xl text-white">
                    Old hayosiko
                </h3>
                <p className="px-4 text-white">
                    Old hayosiko returned the hayosiko to its old state.
                </p>
                <motion.div className="w-max ml-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                    <Link className="bg-black rounded-lg p-0.5 px-1 border-2 border-white" href="/project/oldhayosiko">Visit project's page</Link>
                </motion.div></div>

            <p></p>

            <div className="bg-black border-2 border-white m-4 py-2 rounded-lg drop-shadow-none">
                <h3 className="px-2 text-xl text-white">
                    Old world
                </h3>
                <p className="px-4 text-white">
                    Old world returned the world to its old state.
                </p>
                <motion.div className="w-max ml-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                    <Link className="bg-black rounded-lg p-0.5 px-1 border-2 border-white" href="/project/oldworld">Visit project's page</Link>
                </motion.div></div>

            <p></p>

            <div className="bg-black border-2 border-white m-4 py-2 rounded-lg drop-shadow-none">
                <h3 className="px-2 text-xl text-white">
                    Kekmet more gears
                </h3>
                <p className="px-4 text-white">
                    Kekmet more gears allows you to buy more gears to the kekmet.
                </p>
                <motion.div className="w-max ml-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                    <Link className="bg-black rounded-lg p-0.5 px-1 border-2 border-white" href="/project/kekmetmoregears">Visit project's page</Link>
                </motion.div></div>

            <p></p>

            <div className="bg-black border-2 border-white m-4 py-2 rounded-lg drop-shadow-none">
                <h3 className="px-2 text-xl text-white">
                    Kekmet speedometer
                </h3>
                <p className="px-4 text-white">
                    A slightly broken mod that replaces the tachometer with a speedometer in the kekmet.
                </p>
                <motion.div className="w-max ml-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                    <Link className="bg-black rounded-lg p-0.5 px-1 border-2 border-white" href="/project/kekmetspeedometer">Visit project's page</Link>
                </motion.div></div>



            <h2 className="text-2xl underline px-4">Other projects</h2>


            <div className="bg-black border-2 border-white m-4 py-2 rounded-lg drop-shadow-none">
                <h3 className="px-2 text-xl text-white">
                    IRL Simulator
                </h3>
                <p className="px-4 text-white">
                    IRL Simulator is a game where you simulate your life.
                </p>
                <motion.div className="w-max ml-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                    <Link className="bg-black rounded-lg p-0.5 px-1 border-2 border-white" href="/project/irlsimulator">Visit project's page</Link>
                </motion.div></div>


            <h2 className="text-2xl underline px-4">Online utilities</h2>

            <div className="bg-black border-2 border-white m-4 py-2 rounded-lg drop-shadow-none">
                <h3 className="px-2 text-xl text-white">
                    Number Converters
                </h3>
                <p className="px-4 text-white">
                    Converts numbers to different bases and vice versa.
                </p>
                <motion.div className="w-max ml-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                    <Link className="bg-black rounded-lg p-0.5 px-1 border-2 border-white" href="/util/number-converter">Visit utility's page</Link>
                </motion.div>
            </div>
            <div className="bg-black border-2 border-white m-4 py-2 rounded-lg drop-shadow-none">
                <h3 className="px-2 text-xl text-white">
                    Discord Timestamp Generator
                </h3>
                <p className="px-4 text-white">
                    Allows you to generate timestamps for Discord.
                </p>
                <motion.div className="w-max ml-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                    <Link className="bg-black rounded-lg p-0.5 px-1 border-2 border-white" href="/util/discord/timestamp-generator">Visit utility's page</Link>
                </motion.div>
            </div>
            <div className="bg-black border-2 border-white m-4 py-2 rounded-lg drop-shadow-none">
                <h3 className="px-2 text-xl text-white">
                    Discord Mention Generator
                </h3>
                <p className="px-4 text-white">
                    Allows you to generate mentions for Discord.
                </p>
                <motion.div className="w-max ml-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                    <Link className="bg-black rounded-lg p-0.5 px-1 border-2 border-white" href="/util/discord/mention-generator">Visit utility's page</Link>
                </motion.div>
            </div>
            <Watermark />
        </>
    )
}