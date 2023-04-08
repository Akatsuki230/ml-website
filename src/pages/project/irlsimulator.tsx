import { Typography } from "@mui/material";
import Head from "next/head";
import NavBar from "../../components/NavBar";

const imageStyle = {
    width: '100%',
    height: 'auto'
} as any; // Workaround because the img element doesn't accept CSSProperties for some reason

export default function IRLSimulator() {
    return (
        <>
            <Head>
                <title>GoodOldMSC | mldkyt.com</title>
            </Head>
            <NavBar selected={""} />
            <Typography variant="h3">IRL Simulator</Typography>
            <Typography>
                IRL Simulator is an upcoming game that I'm currently developing, and I couldn't be more excited to share it with you. This game is all about simulating real-life experiences, from driving a car to buying groceries and everything in between.
            </Typography>
            <br />
            <Typography>
                So far, I've implemented a variety of features that bring this game world to life, including a fully-realized terrain system, a detailed house and garage, and a functioning time system complete with a day/night cycle.
            </Typography>
            <br />
            <Typography>
                But the real fun is just getting started. In the coming months, I'll be adding even more features and content to IRL Simulator, including fully-realized roads and a variety of vehicles to drive, from a small car to a transport truck and everything in between.
            </Typography>
            <br />
            <Typography>
                To make the experience even more immersive, there will be two towns to explore, each with its own grocery store, parts shop, and tuning parts shop. And for those who need to stay connected, there will be a variety of electronics shops where you can buy everything from phones and tablets to laptops.
            </Typography>
            <br />
            <Typography>
                In order to add more realism to the game, I will implement a feature where batteries will have a certain amount of cycles and will lose capacity over time. This means you'll have to replace your batteries every so often, just like in real life.
            </Typography>
            <br />
            <Typography>
                Overall, IRL Simulator is shaping up to be an exciting and engaging game that will offer players a unique and immersive experience like no other. I can't wait to share it with you, and I hope you're as excited as I am!
            </Typography>
            {/* images heading */}
            <Typography variant="h4">Images</Typography>
            <img src="/irlsimulator/1.png" alt="Image 1 of house" style={imageStyle}></img>
            <img src="/irlsimulator/2.png" alt="Image 2 of house" style={imageStyle}></img>
        </>
    )
}