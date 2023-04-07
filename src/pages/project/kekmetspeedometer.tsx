import { Typography, Alert, Button } from "@mui/material";
import Head from "next/head";
import NavBar from "../../components/NavBar";
import InfoIcon from '@mui/icons-material/Info';
import { useRouter } from "next/router";

export default function KekmetSpeedometer() {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Kekmet speedometer | mldkyt.com</title>
            </Head>
            <NavBar selected={""} />
            <Typography variant="h3">Kekmet speedometer</Typography>
            <p></p>
            <Typography>
            This mod replaces the tachometer in your Kekmet tractor with a speedometer, giving you a more accurate and precise way of measuring your speed. No more guessing or eyeballing your speed, with the Kekmet Speedometer mod, you can keep track of your speed with ease.
            </Typography>
            <p></p>
            <Typography variant="h4">How to use</Typography>
            <Typography>
            To use this mod, you will need the MSCLoader mod loader. Simply download and install the mod using the MSCLoader and start your game. Once in-game, the tachometer in your Kekmet will automatically be replaced with the speedometer.
            </Typography>
            <p></p>
            <Typography variant="h4">Features</Typography>
            <Typography>&bull; Replaces the tachometer in the Kekmet with a speedometer for more accurate speed measurement.</Typography>
            <Typography>&bull; Easy to install and use with MSCLoader.</Typography>
            <Typography>&bull; Hosted on NexusMods for easy access and download.</Typography>
            <p></p>
            <Alert color="info" icon={<InfoIcon />}>
                <Typography>This mod is not compatible with any other mods that affect the Kekmet's tachometer. Please make sure to remove any conflicting mods before using this mod.</Typography>
            </Alert>
            <p></p>
            <Typography variant="body2">
                This content was generated using AI. If you find any errors, please report them to me on Discord (mldkyt#2555) or on Twitter (@mldkyt).
            </Typography>
            <p></p>
            <Button variant="contained" onClick={_ => router.push('https://www.nexusmods.com/mysummercar/mods/1580')}>Go to NexusMods</Button>
        </>
    )
}