import Watermark from "@/components/Watermark";
import Head from "next/head";
import Sidebar from "../../components/Sidebar";
import Script from "next/script";

const imageStyle = {
    width: 'calc(100% - 2rem)',
    height: 'auto',
    margin: '1rem',
} as any; // Workaround because the img element doesn't accept CSSProperties for some reason

export default function IRLSimulator() {
    return (
        <>
            <Head>
                <title>IRL Simulator | mldkyt.com</title>
                <meta name="title" content="IRL Simulator | mldkyt's website" />
                <meta name="description" content="IRL Simulator is a game about realism." />
                <meta name="author" content="mldkyt" />
                <Script async src={process.env.ADS_URL} crossOrigin="anonymous"></Script>
            </Head>
            <br />
            <h1 className="text-3xl font-bold mx-2">IRL Simulator</h1>
            <p className="mx-4">
                IRL Simulator is an upcoming game that I'm currently developing, and I couldn't be more excited to share it with you. This game is all about simulating real-life experiences, from driving a car to buying groceries and everything in between.
            </p>
            <p className="mx-4">
                So far, I've implemented a variety of features that bring this game world to life, including a fully-realized terrain system, a detailed house and garage, and a functioning time system complete with a day/night cycle.
            </p>
            <p className="mx-4">
                But the real fun is just getting started. In the coming months, I'll be adding even more features and content to IRL Simulator, including fully-realized roads and a variety of vehicles to drive, from a small car to a transport truck and everything in between.
            </p>
            <p className="mx-4">
                To make the experience even more immersive, there will be two towns to explore, each with its own grocery store, parts shop, and tuning parts shop. And for those who need to stay connected, there will be a variety of electronics shops where you can buy everything from phones and tablets to laptops.
            </p>
            <p className="mx-4">
                In order to add more realism to the game, I will implement a feature where batteries will have a certain amount of cycles and will lose capacity over time. This means you'll have to replace your batteries every so often, just like in real life.
            </p>
            <p className="mx-4">
                Overall, IRL Simulator is shaping up to be an exciting and engaging game that will offer players a unique and immersive experience like no other. I can't wait to share it with you, and I hope you're as excited as I am!
            </p>
            {/* images heading */}
            <h2 className="text-2xl font-bold mx-2">Images</h2>
            <img src="/irlsimulator/1.png" alt="Image 1 of house" style={imageStyle}></img>
            <img src="/irlsimulator/2.png" alt="Image 2 of house" style={imageStyle}></img>
            <Watermark />
        </>
    )
}