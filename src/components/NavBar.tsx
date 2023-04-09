import { Inter } from "@next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

const inter = Inter({subsets: ["latin"]});

export default function NavBar() {

    const hasRan = useRef(false);
    const [subs, setSubs] = useState(0);

    useEffect(() => {
        if (!hasRan.current) {
            hasRan.current = true;
            fetch('/api/mldkyt/subs').then(res => res.json()).then(data => {
                setSubs(data.subs);
            });
        }
    })

    return (
        <div className="fixed top-0 h-7 text-white bg-gradient-to-b from-gray-900 to-gray-600 w-screen">
            <span className="text-xl first-letter:text-red-500">mldkyt's website</span>
            {subs !== 0 ? 
            <span className="bg-red-500 rounded-lg mx-2 p-0.5">{subs} subs ♥️</span> : null}
            <Link className="px-2" href="/">Home</Link>
            <Link className="px-2" href="/meshsave">Meshsave</Link>
            <Link className="px-2" href="/projects">Project list</Link>
            
        </div>
    )
}