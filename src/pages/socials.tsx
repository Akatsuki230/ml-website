import { motion } from "framer-motion";
import Head from "next/head";
import { CSSProperties } from "react";

const itemStyle: CSSProperties = {
    width: 'calc(100% - 45px)'
}

const Socials = () => {
    return (
        <div>           
            <Head>
                <title>Social links</title>
                <meta name="title" content="Social links | mldkyt's website" />
                <meta name="description" content="List of mldkyt's social links." />
                <meta name="author" content="mldkyt" />
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187"
                        crossOrigin="anonymous"></script>
            </Head>
            <br />
            <h1 className="text-3xl m-4 mb-1 font-bold">Social links</h1>
            <p className="mx-8 text-lg">Welcome to my social link page! Here you can find all of my social networks where I connect with fans from around the world. You can join my <a className="text-blue-500" href="https://redir.mldkyt.com/discord">Discord server</a> and chat with me and other members about our shared interests. On <a href="https://youtube.com/@mldkyt" className="text-blue-500">YouTube</a>, I upload videos about my hobbies and adventures, while <a href="https://www.tiktok.com/mldkyt" className="text-blue-500">TikTok</a> is where I post short code tutorials.</p>
            <div className="bg-[#2B0029] m-4 py-2 rounded-lg drop-shadow-none" style={itemStyle}>
                <h2 className="px-2 text-xl text-white">Discord server</h2>
                <p className="px-4 text-white">My Discord server is where I post updates and you can chat.</p>

                <motion.div className="w-max ml-2" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <a target="_blank" className="bg-blue-600 rounded-lg p-0.5 px-1" href="https://redir.mldkyt.com/discord">Join</a>
                </motion.div>
            </div>
            <div className="bg-[#2B0029] m-4 py-2 rounded-lg drop-shadow-none" style={itemStyle}>
                <h2 className="px-2 text-xl text-white">YouTube</h2>
                <p className="px-4 text-white">My YouTube channel is where I upload my videos.</p>
                <motion.div className="w-max ml-2" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <a target="_blank" className="bg-blue-600 rounded-lg p-0.5 px-1" href="https://youtube.com/@mldkyt">Subscribe</a>
                </motion.div>
            </div>
            <div className="bg-[#2B0029] m-4 py-2 rounded-lg drop-shadow-none" style={itemStyle}>
                <h2 className="px-2 text-xl text-white">Twitch</h2>
                <p className="px-4 text-white">My Twitch channel is where I (rarely) stream.</p>

                <motion.div className="w-max ml-2" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <a target="_blank" className="bg-blue-600 rounded-lg p-0.5 px-1" href="https://twitch.tv/mldkyt">Follow</a>
                </motion.div>
            </div>
            <div className="bg-[#2B0029] m-4 py-2 rounded-lg drop-shadow-none" style={itemStyle}>
                <h2 className="px-2 text-xl text-white">Twitter</h2>
                <p className="px-4 text-white">My Twitter channel is where I post updates.</p>

                <motion.div className="w-max ml-2" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <a target="_blank" className="bg-blue-600 rounded-lg p-0.5 px-1" href="https://twitter.com/mldkyt">Follow</a>
                </motion.div>
            </div>
            <div className="bg-[#2B0029] m-4 py-2 rounded-lg drop-shadow-none" style={itemStyle}>
                <h2 className="px-2 text-xl text-white">TikTok</h2>
                <p className="px-4 text-white">TikTok is where I post short code tutorials.</p>

                <motion.div className="w-max ml-2" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <a target="_blank" className="bg-blue-600 rounded-lg p-0.5 px-1" href="https://tiktok.com/@mldkyt">Follow</a>
                </motion.div>
            </div>
            <div className="bg-[#2B0029] m-4 py-2 rounded-lg drop-shadow-none" style={itemStyle}>
                <h2 className="px-2 text-xl text-white">NexusMods</h2>
                <p className="px-4 text-white">This is my mod publishing profile.</p>

                <motion.div className="w-max ml-2" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <a target="_blank" className="bg-blue-600 rounded-lg p-0.5 px-1" href="https://www.nexusmods.com/users/57424716">Open profile</a>
                </motion.div>
            </div>
        </div>
    )
}


export default Socials