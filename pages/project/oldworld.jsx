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
                <title>Old World | mldkyt.com</title>
            </Head>
            <NavBar />
            <Typography variant="h3">Old World</Typography>
            <p></p>
            <Typography>
            This mod removes new map decorations from My Summer Car and makes the game map look like it was during the game's initial release. The mod also allows you to switch to road and grass textures from pre-releases of My Summer Car, giving you a more classic and nostalgic feel.
            </Typography>
            <p></p>
            <Typography variant="h5">How to use</Typography>
            <Typography>
            To use this mod, you will need the MSCLoader mod loader. Simply download and install the mod using the MSCLoader and start your game. Once in-game, you will be able to select the road and grass textures you want from the mod menu in the MSCLoader.
            </Typography>
            <p></p>
            <Typography variant="h5">Features:</Typography>
            <Typography>&bull; Removes new map decorations and makes the game map look like it was during the game's initial release.</Typography>
            <Typography>&bull; Allows you to switch to road and grass textures from pre-releases of My Summer Car.</Typography>
            <Typography>&bull; Easy to install and use with MSCLoader.</Typography>
            <Typography>&bull; Hosted on NexusMods for easy access and download.</Typography>
            <p></p>
            <Alert color="info" icon={<Info />}>
                <Typography>This mod is not compatible with any other mods that affect the game's map or road and grass textures. Please make sure to remove any conflicting mods before using this mod.</Typography>
            </Alert>
            <p></p>
            <Button variant="contained" onClick={_ => router.push('https://www.nexusmods.com/mysummercar/mods/1059')}>Go to NexusMods page</Button>
        </>
    )
}