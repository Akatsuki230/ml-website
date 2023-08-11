import {useEffect, useRef, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import load = Simulate.load;
import Head from "next/head";

function renderRedirect(url: string, label: string, redirTime: number) {
    return (
        <>
            <h1 className='text-3xl'>Redirecting you to {label} in {redirTime} seconds...</h1>
        </>
    )
}

function renderImage(url: string, label: string) {
    return (
        <>
            <h1 className='text-3xl'>{label}</h1>
            <img src={url} alt={label}/>
        </>
    )
}

function renderFile(url: string, label: string) {
    function f() {
        document.location.href = url
    }

    return (
        <>
            <h1 className='text-3xl'>{label}</h1>
            <br/>
            <button onClick={f} className='bg-blue-600 rounded-lg px-2 py-1'>
                Download
            </button>
        </>
    )
}

function renderError(label: string) {
    return (
        <>
            <h1 className='text-3xl text-red-500'>Error</h1>
            <h2>{label}</h2>
        </>
    )
}

export default function Redirection() {
    const [loading, setLoading] = useState(true)

    const [linkType, setLinkType] = useState('' as 'image' | 'redirect' | 'file' | 'error')
    const [linkURL, setLinkURL] = useState("")
    const [linkLabel, setLinkLabel] = useState("")

    const [redirectTime, setRedirectTime] = useState(3)

    const hasRan = useRef(false)

    const [screenHeight, setScreenHeight] = useState(0)

    function resizeEvent() {
        setScreenHeight(window.innerHeight)
    }
    useEffect(function () {
        window.addEventListener('resize', resizeEvent)

        if (!hasRan.current) {
            hasRan.current = true
            setScreenHeight(window.innerHeight)
            fetch(`/api/redirect/get?path=${document.location.pathname.substring(1)}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(x => x.json()).then(x => {
                setLoading(false)
                if (x.error) {
                    setLinkType('error')
                    setLinkLabel(x.error)
                }
                else {
                    setLinkType(x.type)
                    setLinkURL(x.url)
                    setLinkLabel(x.label)

                    if (x.type == 'redirect') {
                        let temp1 = redirectTime
                        setInterval(function () {
                            temp1 -= 1
                            if (temp1 > 0) {
                                setRedirectTime(temp1)
                            }
                            else {
                                setRedirectTime(0)
                                document.location.href = x.url
                            }
                        }, 1000)
                    }
                }
            })
        }

        return function () {
            window.removeEventListener('resize', resizeEvent)
        }
    }, [])

    return (
        <>
            <Head>
                <title>Custom page</title>
                <meta name="title" content="Custom page"/>
                <meta name="description" content="This page can contain a redirect, image or download."/>
                <meta name="theme-color" content="#00FFFF"/>
            </Head>
            <h1 className='text-2xl'>mldkyt has shared something with you:</h1>
            <br/>
            <br/>
            <div className='text-center absolute left-1/2 -translate-x-1/2 -translate-y-1/2' style={{
                top: `${screenHeight / 2}px`
            }}>
                {loading ? (
                    <>
                        <h1 className='text-3xl'>Loading...</h1>
                    </>
                ) : (
                    <>
                        {linkType == 'redirect' && renderRedirect(linkURL, linkLabel, redirectTime)}
                        {linkType == 'image' && renderImage(linkURL, linkLabel)}
                        {linkType == 'file' && renderFile(linkURL, linkLabel)}
                        {linkType == 'error' && renderError(linkLabel)}
                    </>
                )}
            </div>
        </>
    )
}