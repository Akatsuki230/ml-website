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
                <title>Old Truck Sounds | mldkyt.com</title>
            </Head>
            <NavBar />
            <Typography variant="h3">Old Truck Sounds</Typography>
            <p></p>
            <Typography>
            This mod changes the sounds of the Gifu truck in My Summer Car, giving it a more classic and nostalgic feel. With 3 different sound variations to choose from - unchanged, release, and beta - you can choose the sound that fits your preferred playing style. The release sounds are taken from the game's initial release, while the beta sounds are from pre-releases of My Summer Car. The mod also includes additional features, such as an old starting sound, an old style and an old load sound.
            </Typography>
            <p></p>
            <Typography variant="h5">How to use</Typography>
            <Typography>
            To use this mod, you will need the MSCLoader mod loader. Simply download and install the mod using the MSCLoader and start your game. Once in-game, you will be able to select the sound variation you want from the mod menu in the MSCLoader.
            </Typography>
            <p></p>
            <Typography variant="h5">Features:</Typography>
            <Typography>&bull; 3 different sound variations to choose from - unchanged, release, and beta.</Typography>
            <Typography>&bull; Includes additional features such as an old starting sound, an old style, and an old load sound.</Typography>
            <Typography>&bull; Easy to install and use with MSCLoader.</Typography>
            <Typography>&bull; Hosted on NexusMods for easy access and download.</Typography>
            <p></p>
            <Alert color="info" icon={<Info />}>
                <Typography>This mod is not compatible with any other mods that affect the Gifu truck sounds. Please make sure to remove any conflicting mods before using this mod.</Typography>
            </Alert>
            <p></p>
            <Button variant="contained" onClick={_ => router.push('https://www.nexusmods.com/mysummercar/mods/1332')}>Go to NexusMods page</Button>
        </>
    )
}