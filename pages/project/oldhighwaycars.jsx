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
                <title>Old highway cars | mldkyt.com</title>
            </Head>
            <NavBar />
            <Typography variant="h3">Old highway cars</Typography>
            <p></p>
            <Typography>
            This mod replaces the cars on the highway in My Summer Car with Satsumas from build 173. This mod will give you a taste of the classic and nostalgic feel of the early days of My Summer Car.
            </Typography>
            <p></p>
            <Typography variant="h5">How to use</Typography>
            <Typography>
            To use this mod, you will need the MSCLoader mod loader. Simply download and install the mod using the MSCLoader and start your game. Once in-game, the cars on the highway will automatically be replaced with Satsumas from build 173.
            </Typography>
            <p></p>
            <Typography variant="h5">Features:</Typography>
            <Typography>&bull; Replaces the cars on the highway with Satsumas from build 173.</Typography>
            <Typography>&bull; Easy to install and use with MSCLoader.</Typography>
            <Typography>&bull; Hosted on NexusMods for easy access and download.</Typography>
            <p></p>
            <Alert color="info" icon={<Info />}>
                <Typography>This mod is not compatible with any other mods that affect the cars on the highway. Please make sure to remove any conflicting mods before using this mod.</Typography>
            </Alert>
            <p></p>
            <Button variant="contained" onClick={_ => router.push('https://www.nexusmods.com/mysummercar/mods/997')}>Go to NexusMods page</Button>
        </>
    )
}