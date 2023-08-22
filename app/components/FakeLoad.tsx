import React, { useEffect, useRef } from "react";
import styles from './FakeLoad.module.css';

export function FakeLoad() {
    const [showFakeLoad, setShowFakeLoad] = React.useState(true);
    const [opacity, setOpacity] = React.useState(1);
    const [fakeLoading, setFakeLoading] = React.useState(0);
    const hasRan = useRef(false)

    useEffect(function () {
        if (hasRan.current) {
            return;
        }

        const inter = setInterval(function () {
            setFakeLoading(function (prev) {
                const next = prev + Math.floor(Math.random() * 10)
                if (next >= 100) {
                    clearInterval(inter);
                    const inter2 = setInterval(function () {
                        setOpacity(function (prev) {
                            const next = prev - 0.05;
                            if (next <= 0) {
                                clearInterval(inter2);
                                setShowFakeLoad(false);
                            }
                            return next;
                        })
                    }, 10);
                    return 100;
                }
                return next;
            })
        }, 10);
    }, []);

    if (!showFakeLoad) {
        return null;
    }
    return (
        <div className="fixed w-screen left-0 top-0 h-screen bg-black cursor-wait" style={{
            opacity
        }}>
            <div className="flex flex-col items-center justify-center h-full cursor-wait">
                <progress className={`w-1/2 cursor-wait ${styles.progresscolor}`} value={fakeLoading} max="100"></progress>
            </div>
        </div>
    )
}