import { useEffect } from "react";

export default function IRLSimulatorHTMLRedirect() {
    useEffect(() => {
        // redirect to /project/irlsimulator
        window.location.href = "/project/irlsimulator";
    })

    return (
        null
    );
}