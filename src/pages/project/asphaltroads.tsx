import { Typography, Button, Alert } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import NavBar from "../../components/NavBar";

export default function AsphaltRoads() {
    const router = useRouter();
    const goToNexus = () => {
        router.push("https://www.nexusmods.com/mysummercar/mods/3052");
    }

    return (
        <>
            <Head>
                <title>Asphalt Roads | mldkyt.com</title>
            </Head>
            <NavBar selected={""} />
            <Typography variant="h3">Asphalt Roads</Typography>
            <p></p>
            <Typography variant="h5">Features (as of now):</Typography>
            <p></p>
            <Typography>&bull; Changes dirt roads to asphalt roads</Typography>
            <Typography>&bull; Also changes the feel of the roads</Typography>
            <Typography>&bull; Bonus feature where you can convert the grass to asphalt as well</Typography>
            {/* changelog heading */}
            <p></p>
            <Typography variant="h5">Changelog:</Typography>
            <p></p>
            <Typography variant="h6">v1.2</Typography>
            <Typography>&bull; Walking sounds is now correct.</Typography>
            <Typography>&bull; Removed some unused code.</Typography>
            <Typography variant="h6">v1.1</Typography>
            <Typography>&bull; Added more routes you can convert to asphalt.</Typography>
            <Typography>&bull; Fixed coloring of the asphalt.</Typography>
            <Typography>&bull; Improved performance.</Typography>
            <Typography variant="h6">v1.0</Typography>
            <Typography>&bull; Initial release.</Typography>
            <Alert color="info">
                <Typography>This mod is not compatible with any other mods that affect the roads. Please make sure to remove any conflicting mods before using this mod.</Typography>
            </Alert>
            <p></p>
            <Button variant="contained" onClick={goToNexus}>Go to NexusMods</Button>
        </>
    )
}