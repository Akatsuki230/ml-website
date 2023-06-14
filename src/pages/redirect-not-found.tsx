import Watermark from "@/components/Watermark";
import { useEffect, useRef, useState } from "react";

export default function RedirectNotFound() {
    const [homePageTimer, setHomePageTimer] = useState(5);
    const hasExecuted = useRef(false);

    useEffect(() => {
        if (hasExecuted.current) return;
        hasExecuted.current = true;
        setInterval(() => {
            if (homePageTimer > 0)
                setHomePageTimer(homePageTimer - 1);
            else 
                document.location.href = 'https://mldkyt.com/';
        }, 1000);
    }, []);

    return (
        <>
            <div className="text-3xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <p>This redirect is not existant.</p>
                <p>Redirecting to home page in {homePageTimer} seconds...</p>
            </div>
            <Watermark />
        </>
    )
}