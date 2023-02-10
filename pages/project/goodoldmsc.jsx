import { Typography, Alert, Button } from "@mui/material";
import Head from "next/head";
import NavBar from "../../components/NavBar";
import WarningIcon from '@mui/icons-material/Warning';

export default function GoodOldMSC() {
    return (
        <>
            <Head>
                <title>GoodOldMSC | mldkyt.com</title>
            </Head>
            <NavBar />
            <Typography variant="h3">GoodOldMSC</Typography>
            <p></p>
            <Typography variant="h5">Features (as of now):</Typography>
            <p></p>
            <Typography>&bull; Old sounds of Satsuma</Typography>
            <Typography>&bull; Disabling of door and walk sounds</Typography>
            <p></p>
            <Alert color="warning" icon={<WarningIcon />}>
                <Typography>As of now, the mod is in early phases.</Typography>
            </Alert>
            <p></p>
            <Button variant="contained">Go to NexusMods</Button>
        </>
    )
}