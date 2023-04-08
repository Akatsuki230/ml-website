import Watermark from "@/components/Watermark";
import { Typography } from "@mui/material";

export default function RedirectNotFound() {
    return (
        <>
            <Typography variant="h5">This is not existant.</Typography>
            <Watermark />
        </>
    )
}