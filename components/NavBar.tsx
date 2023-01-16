import React from "react";

export default function NavBar(props: {
    selected: string
}) {
    function renderHome() {
        if (props.selected === "home") {
            return (
                <span className="text-1xl p-2">Home</span>
            )
        }
        
        return (
            <a href="/" className="text-1xl p-2">Home</a>
        )
    }

    function renderMeshsave() {
        if (props.selected === "meshsave") {
            return (
                <span className="text-1xl p-2">MSC meshsave</span>
            )
        }

        return (
            <a href="/meshsave" className="text-1xl p-2">MSC meshsave</a>
        )
    }

    return (
        <nav className="bg-black text-white">
            <span className="text-2xl p-4">MLDKYT's website</span>
            <span className="text-sm relative -top-3 -left-3">beta</span>
            {renderHome()}
            {renderMeshsave()}
        </nav>
    )
}