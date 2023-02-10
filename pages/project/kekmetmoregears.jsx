import { Typography, Alert, Button } from "@mui/material";
import Head from "next/head";
import NavBar from "../../components/NavBar";
import InfoIcon from '@mui/icons-material/Info';
import { useRouter } from "next/router";

export default function KekmetMoreGears() {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Kekmet more gears | mldkyt.com</title>
            </Head>
            <NavBar />
            <Typography variant="h3">Kekmet more gears</Typography>
            <p></p>
            <Typography>
            This mod allows you to upgrade your Kekmet with more gears and a better engine, giving you the ability to handle tougher jobs and get the job done faster. With this mod, you can now enjoy the Kekmet to its fullest potential and take your farming and hauling experiences to the next level.
            </Typography>
            <p></p>
            <Typography variant="h4">How to use</Typography>
            <Typography>
            To use this mod, you will need the MSCLoader mod loader. Simply download and install the mod using the MSCLoader and start your game. Once in-game, you will be able to purchase the upgrades for the Kekmet at any auto repair shop.
            </Typography>
            <p></p>
            <Typography variant="h4">Features</Typography>
            <Typography>&bull; Adds more gears for the Kekmet, allowing for smoother and quicker gear changes.</Typography>
            <Typography>&bull; Improves the engine performance of the Kekmet, allowing for better acceleration and speed.</Typography>
            <Typography>&bull; Easy to install and use with MSCLoader.</Typography>
            <Typography>&bull; Hosted on NexusMods for easy access and download.</Typography>
            <p></p>
            <Alert color="info" icon={<InfoIcon />}>
                <Typography>This mod is not compatible with any other mods that affect the Kekmet. Please make sure to remove any conflicting mods before using this mod.</Typography>
            </Alert>
            <p></p>
            <Typography variant="body2">
                This content was generated using AI. If you find any errors, please report them to me on Discord (mldkyt#2555) or on Twitter (@mldkyt).
            </Typography>
            <p></p>
            <Button variant="contained" onClick={_ => router.push('https://www.nexusmods.com/mysummercar/mods/1578')}>Go to NexusMods</Button>
        </>
    )
}