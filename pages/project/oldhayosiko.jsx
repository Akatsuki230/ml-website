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
                <title>Old Hayosiko | mldkyt.com</title>
            </Head>
            <NavBar />
            <Typography variant="h3">Old Hayosiko</Typography>
            <p></p>
            <Typography>
            This mod makes the Hayosiko van in My Summer Car look like it was from the pre-release versions of the game. With this mod, you can give your Hayosiko van a classic and nostalgic feel.
            </Typography>
            <p></p>
            <Typography variant="h5">How to use</Typography>
            <Typography>
            To use this mod, you will need the MSCLoader mod loader. Simply download and install the mod using the MSCLoader and start your game. Once in-game, the Hayosiko van will automatically be updated to the pre-release version.
            </Typography>
            <p></p>
            <Typography variant="h5">Features:</Typography>
            <Typography>&bull; Makes the Hayosiko van look like it was from the pre-release versions of My Summer Car.</Typography>
            <Typography>&bull; Easy to install and use with MSCLoader.</Typography>
            <Typography>&bull; Hosted on NexusMods for easy access and download.</Typography>
            <p></p>
            <Alert color="info" icon={<Info />}>
                <Typography>This mod is not compatible with any other mods that affect the Hayosiko van. Please make sure to remove any conflicting mods before using this mod.</Typography>
            </Alert>
            <p></p>
            <Button variant="contained" onClick={_ => router.push('https://www.nexusmods.com/mysummercar/mods/804')}>Go to NexusMods page</Button>
        </>
    )
}