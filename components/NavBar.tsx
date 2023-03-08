import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Inter } from "@next/font/google";
import { useRouter } from "next/router";
import React from "react";

const inter = Inter({subsets: ["latin"]});

export default function 
NavBar(props: {
    selected: string
}) {
    const router = useRouter();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={inter.className}>MLDKYT's website</Typography>
                <Button onClick={_ => router.push('/')} sx={{marginLeft: '1rem', color: 'white'}}>Home</Button>
                <Button onClick={_ => router.push('/meshsave')} sx={{color: 'white'}}>Meshsave</Button>
                <Button onClick={_ => router.push('/projects')} sx={{color: 'white'}}>Project list</Button>
                <Button onClick={_ => router.push('/project/asphaltroads')} sx={{color: 'white'}}>Asphalt Roads</Button>
                <Button onClick={_ => router.push('/project/irlsimulator')} sx={{color: 'white'}}>IRL Simulator</Button>
                <Button onClick={_ => router.push('/project/oldcarsounds')} sx={{color: 'white'}}>OldCarSounds</Button>
            </Toolbar> 
        </AppBar>
    )
}