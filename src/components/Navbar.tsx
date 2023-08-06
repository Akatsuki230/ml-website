import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

export default function Navbar() {
    const router = useRouter();
    const [hovering, setHovering] = useState(false);
    const [fullOpacity, setFullOpacity] = useState(true);
    const [selected, setSelected] = useState('');
    function updateOpacity() {
        setFullOpacity(hovering || window.scrollY < 40);
    }

    if (!fullOpacity && hovering) setFullOpacity(true);

    let tempSelected = '';
    switch (router.pathname) {
        case '/':
            tempSelected = 'home';
            break;
        case '/meshsave':
            tempSelected = 'meshsave';
            break;
        case '/projects':
            tempSelected = 'projects';
            break;
        case '/social':
            tempSelected = 'social';
            break;
        case '/pronouns':
        case '/pron':
            tempSelected = 'pronouns';
            break;
    }

    if (tempSelected !== selected) {
        setSelected(tempSelected);
    }

    useEffect(() => {
        document.addEventListener('scroll', updateOpacity);
        return () => {
            document.removeEventListener('scroll', updateOpacity);
        }
    }, []);

    function hoverOn() {
        setHovering(true);
    }

    function hoverOff() {
        setHovering(false);
        setFullOpacity(window.scrollY < 40);
    }

    return (
        <motion.div variants={{
            'full': {
                opacity: 1,
            },
            'half': {
                opacity: 0.5,
            }
        }} animate={fullOpacity ? 'full' : 'half'} onPointerEnter={hoverOn} onPointerLeave={hoverOff} className="bg-[#2B0029] text-center flex text-white m-2 p-2 rounded-md">
            <span className="mx-2">mldkyt's website</span>
            <br />
            <a className={`ml-2 w-20 ${selected == 'home' ? 'bg-[#4A0056] rounded-md': ''}`} href="/">Home</a>
            <a className={`w-24 ${selected == 'meshsave' ? 'bg-[#4A0056] rounded-md': ''}`} href="/meshsave">Meshsave</a>
            <a className={`w-20 ${selected.startsWith('project') ? 'bg-[#4A0056] rounded-md': ''}`} href="/projects">Projects</a>
            <a className={`w-20 ${selected == 'social' ? 'bg-[#4A0056] rounded-md': ''}`} href="/social">Socials</a>
            <a className={`w-24 ${selected == 'pronouns' ? 'bg-[#4A0056] rounded-md': ''}`} href="/pronouns">Pronouns</a>
        </motion.div>
    )
}