import FemboyFridayVirtualHeadpat from "@/components/FemboyFridayVirtualHeadpat";
import Navbar from "@/components/NavBar";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })

export default function AstolfoMod() {
    return (
        <div className={inter.className}>
            <Head>
                <title>AstolfOS | Programmer Astolfo's website</title>
                <meta name="og:title" content="AstolfOS" />
                <meta
                    name="description"
                    content="AstolfOS transfers your Ubuntu linux into AstolfOS!"
                />
                <meta
                    name="og:image"
                    content="https://mldkyt.com/Screenshot_20230929_132211.png"
                />
                <meta name="theme-color" content="#FF77FF" />
                <meta name="author" content="Programmer Astolfo" />
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187"
                    crossOrigin="anonymous"
                ></script>
            </Head>
            <h1 className="text-5xl mt-2 mx-2 text-center font-bold text-white">AstolfOS</h1>
            <h2 className="mx-2 text-white text-2xl font-bold">
                The changes that were made:
            </h2>

            <ul className="text-white">
                <li className="mx-4">&bull; Change OS name to AstolfOS</li>
                <li className="mx-4">&bull; Change KDE splash screen</li>
                <li className="mx-4">&bull; Change GRUB configuration to disable default logo</li>
                <li className="mx-4">&bull; Change neofetch configuration</li>
                <li className="mx-4">&bull; Update the terminal style</li>
            </ul>

            <details>
                <summary className="mx-2 text-white">Images/KDE</summary>
                <img src="/Screenshot_20231001_204658.png"></img>
                <img src="/Screenshot_20231001_205609.png"></img>
                <img src="/Screenshot_20231001_205725.png"></img>
            </details>

            <details>
                <summary className="mx-2 text-white">Images/Gnome</summary>
                <img src="/Screenshot from 2023-10-05 21-31-02.png"></img>
                <img src="/Screenshot from 2023-10-05 21-30-52.png"></img>
            </details>

            <details>
                <summary className="mx-2 text-white">Changelog</summary>
                <h2 className="text-xl mx-2 font-bold text-white">Version 1.1</h2>
                <ul className="mx-4 text-white">Fix neofetch installation</ul>
                <ul className="mx-4 text-white">Add editing of bash config</ul>
                <ul className="mx-4 text-white">Use shell commands a bit more properly</ul>
                <ul className="mx-4 text-white">Add support to Ubuntu Gnome</ul>
                <h2 className="text-xl mx-2 font-bold text-white">Version 1.0</h2>
                <ul className="mx-4 text-white">First release</ul>
            </details>

            <p className="mx-2 text-white">Script version: 1.1</p>

            <h2 className="text-white text-xl">Use this script now:</h2>

            <div className="mx-4 p-2 bg-red-800 rounded-xl">
                <h3 className="text-2xl font-bold text-white">CAUTION:</h3>
                <p className="text-white">This script comes with ABSOLUTELY NO WARRANTY. If it somehow destroys your system, it's not my fault.</p>
            </div>
            <div className="mx-4 p-2 bg-yellow-700 rounded-xl">
                <p className="text-white">This script was only tested under Ubuntu. It may work on other systems though.</p>
            </div>

            <div className="bg-gray-800 text-white p-2 mx-4 mt-2 rounded-xl font-mono">
                wget https://raw.githubusercontent.com/ProgrammerAstolfo/AstolfOS/master/install.sh<br />
                sudo chmod +x install.sh<br/>
                ./install.sh<br/>
            </div>
            <h2 className="mx-2 text-white text-xl">Or check out the repository first:</h2>
            <a
                href="https://github.com/ProgrammerAstolfo/AstolfOS">
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="mx-2 m-1 p-2 px-4 bg-blue-600 rounded-md text-white">
                    Open GitHub
                </motion.button>
            </a>

            <FemboyFridayVirtualHeadpat />
            <Navbar sel="project" />
        </div>
    )
}