import { Typography } from "@mui/material";
import Link from "next/link";

export default function Watermark() {
    return (
        <>
            <Link href="/social">
                <Typography className="fixed right-5 bottom-5 p-2 px-4 bg-white rounded-lg drop-shadow-lg">
                    Made with <span className="text-red-500 text-lg">♥️</span> by mldkyt
                </Typography>
            </Link>
        </>
    )
}