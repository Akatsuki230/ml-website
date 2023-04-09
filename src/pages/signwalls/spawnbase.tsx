import Head from "next/head";
import { Inter} from 'next/font/google';
import { useEffect, useRef, useState } from "react";
import { addSign, getSigns } from "@/components/SignWalls/SpawnBase";
import NavBar from "@/components/NavBar";

const inter = Inter({subsets: ['latin']})

export default function SpawnBase() {
    const [showCreation, setShowCreation] = useState(false);
    const [creationContent, setCreationContent] = useState('');
    const [creationAuthor, setCreationAuthor] = useState('');
    const [creationSubmitting, setCreationSubmitting] = useState(false);
    const [creationError, setCreationError] = useState('' as string);

    const [signs, setSigns] = useState([] as {author: string, content: string}[]); // [ { author: string, content: string }
    const [signsLoading, setSignsLoading] = useState(true);

    const hasPerformedLoad = useRef(false);

    useEffect(() => {
        if (hasPerformedLoad.current) {
            return;
        }
        hasPerformedLoad.current = true;
        (async () => {
            const signs = await getSigns();
            setSigns(signs);
            setSignsLoading(false);
        })();
    }, []);

    const creationStartHover = () => {
        setShowCreation(true);
    }

    const  creationCloseButton = () => {
        setShowCreation(false);
    }

    const submitCreation = async () => {
        setCreationSubmitting(true);
        const data = await addSign(creationContent, creationAuthor);
        if (data.message !== "Success.") {
            setCreationSubmitting(false);
            setCreationError(data.message);
            return;
        }

        setCreationSubmitting(false);
        setCreationContent('');
        setCreationAuthor('');
        setShowCreation(false);
        setSigns([]);
        setSignsLoading(true);
        const signs = await getSigns();
        setSigns(signs);
        setSignsLoading(false);
    }

    return (
        <>
            <Head>
                <title>Spawn Base</title>
            </Head>
            <NavBar />
            <br />
            <main className={inter.className + " min-h-screen dark:bg-black"}>
                <div className="relative"> 
                    <img className="w-screen" src="/Y8SAoB1R6H.png" alt="spawnbase" />
                    <h1 className={"absolute left-1/2 top-1/2 text-3xl -translate-x-1/2 -translate-y-1/2 w-max bg-gray-500 p-2 rounded-xl text-white"}>Leave your sign at the Spawn Base!</h1>
                </div>
                <div className="bg-gray-300 dark:bg-gray-700 m-2 rounded-xl" onMouseEnter={creationStartHover}>
                    <h2 className="text-2xl p-2 px-4 text-black dark:text-white">Put your sign up!  
                        {!showCreation ? <small className="text-sm italic mx-2">hover over me to begin!</small> : null}
                    </h2>
                    {
                        showCreation ? (
                            <>
                                <label className="text-lg px-8 text-black dark:text-white" htmlFor="author">Author</label>
                                <br />
                                <input className="relative left-8 text-black dark:text-white dark:bg-gray-800 dark:border-2 rounded-lg" type="text" id="author" name="author"
                                value={creationAuthor} onChange={(x) => setCreationAuthor(x.currentTarget.value)}/>
                                <br />
                                <label className="text-lg px-8 text-black dark:text-white">Content</label>
                                <br />
                                <textarea className="relative left-8 text-black dark:text-white dark:bg-gray-800 dark:border-2 rounded-lg" 
                                value={creationContent} onChange={(x) => setCreationContent(x.currentTarget.value)}/>
                                <br />
                                {
                                    creationError != "" ? <p className="text-red-600 text-lg px-8">{creationError}</p> : null
                                }
                                <button disabled={creationSubmitting} className="relative left-8 p-1 px-4 bg-green-600 rounded-lg border-2 border-black hover:bg-green-800 disabled:cursor-not-allowed disabled:bg-gray-400 text-black dark:text-white"
                                    onClick={submitCreation}>Add my sign</button>
                                <button disabled={creationSubmitting} className="relative left-8 p-1 px-4 bg-red-600 rounded-lg border-2 border-black hover:bg-red-800 mx-2 disabled:cursor-not-allowed disabled:bg-gray-400 text-black dark:text-white"
                                    onClick={creationCloseButton}>Close</button>
                                <br />
                                <br />
                            </>
                        ) : null
                    }
                </div>
                {signsLoading ? <h1 className="text-1xl px-4 text-black dark:text-white">loading signs...</h1> : null}
                {signs.map((sign) => {
                    return (
                        <div className="bg-gray-300 dark:bg-gray-700 m-2 rounded-xl">
                            <h2 className="text-sm p-2 px-4 text-black dark:text-white">by {sign.author}</h2>
                            <p className="text-lg px-8 text-black dark:text-white">{sign.content}</p>
                        </div>
                    )
                })}
            </main>
        </>
    )
}