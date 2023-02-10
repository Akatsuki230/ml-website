import { Accordion, AccordionDetails, AccordionSummary, Button, Typography } from '@mui/material'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'

export default function Meshsave() {
    const router = useRouter();
    const [imgWidth, setImgWidth] = useState(0);
    
    useEffect(() => {
        document.addEventListener('resize', function() {
            alert('resize');
            setImgWidth(window.innerWidth - 60);
        })
        setImgWidth(window.innerWidth - 60);
    });

    return (
        <>
            <Head>
                <title>mldkyt's website</title>
            </Head>
            <NavBar selected="meshsave"/>
            <Typography variant='h3'>My meshsave</Typography>
            <Typography>My Summer Car is a game where players get to build, repair and customize their own cars. However, in my save, the car looks like it has been through a war zone. The car's body is badly damaged and has been crashed at high speed multiple times. The mesh of the car is severely damaged and it looks like it has been pieced back together. </Typography>
            <Accordion>
                <AccordionSummary>
                    <Typography>Images</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <img width={imgWidth} src='https://media.discordapp.net/attachments/768887055438053476/1042910848529739777/shitsuma1.png'></img>
                    <img width={imgWidth} src='https://media.discordapp.net/attachments/768887055438053476/1042910848886259782/shitsuma2.png'></img>
                    <img width={imgWidth} src='https://media.discordapp.net/attachments/768887055438053476/1042910849192435812/shitsuma3.png'></img>
                    <img width={imgWidth} src='https://media.discordapp.net/attachments/768887055438053476/1042910849477652481/shitsuma4.png'></img>
                </AccordionDetails>
            </Accordion>
            <p></p>
            <Button variant='contained' onClick={_ => router.push('/api/meshsave')}>Download meshsave</Button>
        </>
    );
}
