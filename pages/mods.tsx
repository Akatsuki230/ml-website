import Head from "next/head";
import NavBar from "../components/NavBar";

export default function Mods() {
    return (
        <>
            <Head>
                <title>MLDKYT's website</title>
            </Head>
            <NavBar selected={""} />
            <div className="bg-gray-900 text-white h-screen">
                <h1 className="p-8 text-5xl text-center">MLDKYT's mods</h1>
            </div>
        </>
    )
}