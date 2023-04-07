import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Inter } from "@next/font/google";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

const inter = Inter({subsets: ["latin"]});

export default function 
NavBar(props: {
    selected: string
}) {
    const router = useRouter();

    const hasRan = useRef(false);
    const [subs, setSubs] = useState(0);

    useEffect(() => {
        if (!hasRan.current) {
            hasRan.current = true;
            fetch('/api/mldkyt/subs').then(res => res.json()).then(data => {
                setSubs(data.subs);
            });
        }
    })

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={inter.className}>mldkyt's website</Typography>
                {subs != 0 ? <Typography sx={{marginLeft: '1rem', backgroundColor: '#000', color: '#fff', padding: '0.5rem 1rem', borderRadius: '1rem'}}>{subs} subs</Typography> : null}
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