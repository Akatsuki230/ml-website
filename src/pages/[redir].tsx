import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/NavBar";
import process from "process";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    const { redir } = ctx.params as { redir: string };
    if (!redir) return { notFound: true };
    if (!redir)
        return {
            props: {
                data: {
                    error: true,
                    errorMessage: "No custom path provided / Internal error",
                }
            }
        };

    const data = await (
        await fetch(`${process.env.FIREBASE_URL}/redirects/${redir}.json`)
    ).json();
    console.log('Data', data);
    if (data == null) {
        return {
            props: {
                data: {
                    error: true,
                    errorMessage: "Redirect not found",
                }
            }
        };
    }

    if (!data.views) data.views = 0;
    data.views++;
    await fetch(`${process.env.FIREBASE_URL}/redirects/${redir}.json`, {
        method: "PATCH",
        body: JSON.stringify({
            views: data.views,
        }),
    });

    console.log(data);

    return {
        props: {
            data
        }
    }
}

function renderRedirect(
    url: string,
    label: string,
    redirTime: number,
    text: string,
    textBg: string
) {
    const r = parseInt(textBg.substring(3, 5), 16);
    const g = parseInt(textBg.substring(5, 7), 16);
    const b = parseInt(textBg.substring(8, 9), 16);
    const a = parseInt(textBg.substring(1, 3), 16) / 255;

    return (
        <>
            <div
                className="text-3xl w-screen"
                style={{
                    color: text,
                    backgroundColor: `rgba(${r}, ${g}, ${b}, ${a})`,
                }}
            >
                <h1>{label}</h1>
                <h1>Redirecting you in {redirTime} seconds...</h1>
            </div>
        </>
    );
}

function renderImage(url: string, label: string, text: string, textBg: string) {
    const r = parseInt(textBg.substring(3, 5), 16);
    const g = parseInt(textBg.substring(5, 7), 16);
    const b = parseInt(textBg.substring(8, 9), 16);
    const a = parseInt(textBg.substring(1, 3), 16) / 255;

    return (
        <>
            <h1
                className="text-3xl w-max p-1 rounded-md mb-2"
                style={{
                    color: text,
                    backgroundColor: `rgba(${r}, ${g}, ${b}, ${a})`,
                }}
            >
                {label}
            </h1>
            <img
                src={url}
                alt={label}
                style={{
                    height: "calc(100vh - 160px)",
                    position: "relative",
                    left: "50%",
                    transform: "translateX(-50%)",
                }}
            />
        </>
    );
}

function renderFile(url: string, label: string, text: string, textBg: string) {
    function f() {
        document.location.href = url;
    }

    const r = parseInt(textBg.substring(3, 5), 16);
    const g = parseInt(textBg.substring(5, 7), 16);
    const b = parseInt(textBg.substring(8, 9), 16);
    const a = parseInt(textBg.substring(1, 3), 16) / 255;

    return (
        <>
            <h1
                className="text-3xl p-1 rounded-md"
                style={{
                    color: text,
                    backgroundColor: `rgba(${r}, ${g}, ${b}, ${a})`,
                }}
            >
                {label}
            </h1>
            <br />
            <button onClick={f} className="bg-blue-600 rounded-lg px-2 py-1">
                Download
            </button>
        </>
    );
}

function renderError(label: string) {
    return (
        <>
            <h1 className="text-3xl text-red-500">Error</h1>
            <h2>{label}</h2>
        </>
    );
}

export default function Redirect(props: { data: any }) {
    const [redirectTime, setRedirectTime] = useState(5);
    const [screenHeight, setScreenHeight] = useState(0);

    const hasRan = useRef(false);
    const countDown = useRef(5);

    function resizeEvent() {
        setScreenHeight(window.innerHeight);
    }

    useEffect(
        function () {
            window.addEventListener("resize", resizeEvent);

            if (!hasRan.current) {
                hasRan.current = true;
                resizeEvent();
                if (props.data.type == "redirect") {
                    setInterval(function () {
                        if (countDown.current > 1) {
                            countDown.current--;
                            setRedirectTime(countDown.current);
                        } else {
                            setRedirectTime(0);
                            document.location.href = props.data.url;
                        }
                    }, 1000);
                }
            }

            return function () {
                window.removeEventListener("resize", resizeEvent);
            };
        },
        [props.data.type, props.data.url]
    );

    return (
        <>
            <Head>
                {props.data.type == "redirect" && (
                    <>
                        <title>Redirect by Programmer Astolfo</title>
                        <meta name="og:title" content="Redirect by Programmer Astolfo" />
                        <meta
                            name="description"
                            content={`Redirects to ${props.data.label}`}
                        />
                        <meta name='theme-color' content='#FF77FF' />
                        <meta name="author" content="Programmer Astolfo" />
                    </>
                )}
                {props.data.type == "image" && (
                    <>
                        <title>Image shared by Programmer Astolfo</title>
                        <meta
                            name="og:title"
                            content="Programmer Astolfo has shared an image with you"
                        />
                        <meta
                            name="description"
                            content={`Image ${props.data.label}`}
                        />
                        <meta name='theme-color' content='#FF77FF' />
                        <meta name="og:image" content={props.data.url} />
                        <meta name="author" content="Programmer Astolfo" />
                    </>
                )}
                {props.data.type == "file" && (
                    <>
                        <title>File shared by Programmer Astolfo</title>
                        <meta
                            name="og:title"
                            content="Programmer Astolfo has shared a file with you"
                        />
                        <meta
                            name="description"
                            content={`File ${props.data.label}`}
                        />
                        <meta name='theme-color' content='#FF77FF' />
                        <meta name="author" content="Programmer Astolfo" />
                    </>
                )}
                {props.data.type == "error" && (
                    <>
                        <title>Error</title>
                        <meta name="og:title" content="Error" />
                        <meta
                            name="description"
                            content={`Error ${props.data.label}`}
                        />
                        <meta name='theme-color' content='#FF77FF' />
                        <meta name="author" content="Programmer Astolfo" />
                    </>
                )}
            </Head>
            {!props.data.error && (
                <>
                    {props.data.themeType == "colour" && (
                        <div
                            className="w-screen h-screen fixed left-0 top-0"
                            style={{
                                backgroundColor: props.data.themeBgValue,
                            }}
                        ></div>
                    )}
                    {(props.data.themeType == "imageTile" ||
                        props.data.themeType == "imageFit" ||
                        props.data.themeType == "imageStretch") && (
                            <div
                                className="w-screen h-screen fixed left-0 top-0"
                                style={{
                                    backgroundImage: `url(${props.data.themeBgValue})`,
                                    backgroundSize:
                                        props.data.themeType == "imageStretch"
                                            ? "cover"
                                            : props.data.themeType == "imageFit"
                                                ? "contain"
                                                : "auto",
                                    backgroundRepeat:
                                        props.data.themeType == "imageTile" ? "repeat" : "no-repeat",
                                }}
                            ></div>
                        )}
                </>
            )}

            <h1 className="text-2xl p-4">Programmer Astolfo has shared something with you:</h1>
            <br />
            <br />
            <div
                className="text-center absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                    top: `${screenHeight / 2}px`,
                }}
            >
                {props.data.error ? (
                    <>{renderError(props.data.errorMessage)}</>
                ) : (
                    <>
                        {props.data.type == "redirect" &&
                            renderRedirect(
                                props.data.url,
                                props.data.label,
                                redirectTime,
                                props.data.themeTextColor,
                                props.data.themeTextBgColor
                            )}
                        {props.data.type == "image" &&
                            renderImage(
                                props.data.url,
                                props.data.label,
                                props.data.themeTextColor,
                                props.data.themeTextBgColor
                            )}
                        {props.data.type == "file" &&
                            renderFile(
                                props.data.url,
                                props.data.label,
                                props.data.themeTextColor,
                                props.data.themeTextBgColor
                            )}
                    </>
                )}
                {props.data.error || <div className="mt-2" style={{
                    color: props.data.themeTextColor
                }}>Views: {props.data.views}</div>}
            </div>
            <Navbar sel="" />
        </>
    );
}