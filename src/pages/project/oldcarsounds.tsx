import Info from "@mui/icons-material/Info";
import { Typography, Alert, Button } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import NavBar from "../../components/NavBar";

export default function OldTruckSounds() {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>OldCarSounds | mldkyt.com</title>
            </Head>
            <NavBar selected={""} />
            <Typography variant="h3">OldCarSounds</Typography>
            <p></p>
            <Typography>
            This mod changes the car sounds in My Summer Car to their pre-release or release versions. With this mod, you can bring a touch of nostalgia to your gameplay by experiencing the sounds of My Summer Car's early days.
            </Typography>
            <p></p>
            <Typography variant="h5">How to use</Typography>
            <Typography>
            To use this mod, you will need the MSCLoader mod loader. Simply download and install the mod using the MSCLoader and start your game. Once in-game, you can select between the pre-release and release versions of the car sounds from the mod menu in the MSCLoader.
            </Typography>
            <p></p>
            <Typography variant="h5">Features (pre-release):</Typography>
            <Typography>&bull; Disables door, knob, and foot sounds.</Typography>
            <Typography>&bull; Adds an information text in the left top corner.</Typography>
            <Typography>&bull; Changes the dashboard to the old version.</Typography>
            <Typography>&bull; Changes the car sounds to the pre-release versions.</Typography>
            <Typography>&bull; Adds assemble sounds.</Typography>
            <Typography>&bull; Adds shift delay.</Typography>
            <p></p>
            <Typography variant="h5">Features (release):</Typography>
            <Typography>&bull; Changes the car sounds to the release versions.</Typography>
            <p></p>
            <Alert color="info" icon={<Info />}>
                <Typography>This mod is not compatible with any other mods that affect the car sounds in My Summer Car. Please make sure to remove any conflicting mods before using this mod.</Typography>
            </Alert>
            <p></p>
            <Button variant="contained" onClick={_ => router.push('https://www.nexusmods.com/mysummercar/mods/464')}>Go to NexusMods page</Button>
        </>
    )
}