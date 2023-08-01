import { motion } from "framer-motion";
import Link from "next/link";
import React, { CSSProperties, useEffect, useRef, useState } from "react";

const circle: CSSProperties = {
    borderRadius: '50%',
    paddingLeft: '5px',
    paddingRight: '5px',
    paddingBottom: '5px'
}

export default function Sidebar() {
    return (
        <div className="text-center">
            <img src="/pfp.png" style={circle} />
            <span className="text-lg font-bold">mldkyt's website</span>
            <br />
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                <Link className="px-2" href="/">Home</Link>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                <Link className="px-2" href="/meshsave">Meshsave</Link>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                <Link className="px-2" href="/projects">Projects</Link>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                <Link className="px-2" href="/social">Social links</Link>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                <Link className="px-2" href="/pronouns">Pronouns</Link>
            </motion.div>
            <span className="text-lg font-bold">Projects</span>
            <br />
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                <Link className="px-2 text-orange-300" href="/requisha">Requisha - The Love Bot ❤️🙏🏿</Link>
            </motion.div>
            <span className="text-lg font-bold">Generic Utilites</span>
            <br />
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                <Link className="px-2" href="/util/number-convert">Number Convert</Link>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                <Link className="px-2" href="/util/binary-operations">Binary Operations</Link>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                <Link className="px-2" href="/util/text-binary-converter">Text to binary</Link>
            </motion.div>
            <span className="text-lg font-bold">Discord Utilities</span>
            <br />
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                <Link className="px-2" href="/util/discord/timestamp-generator">Timestamp Gen</Link>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                <Link className="px-2" href="/util/discord/mention-generator">Mention Gen</Link>
            </motion.div>

        </div>
    )
}