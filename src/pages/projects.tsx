import Watermark from "@/components/Watermark";
import { Accordion, AccordionDetails, AccordionSummary, Paper, Typography, Button } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import NavBar from "../components/NavBar";

export default function Mods() {
    const [openAccordion, setOpenAccordion] = useState(0);
    const router = useRouter();

    return (
        <>
            <Head>
                <title>MLDKYT's website</title>
            </Head>
            <NavBar selected={""} />
            <Typography variant="h3">MLDKYT's projects</Typography>
            <Accordion expanded={openAccordion === 1} onChange={(_, x) => x ? setOpenAccordion(1) : setOpenAccordion(0)}>
                <AccordionSummary>
                    <Typography>My Summer Car mods</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="h6">I have a couple My Summer Car mods.</Typography>
                    <p></p>
                    <Paper elevation={3} sx={{padding: '1rem'}}>
                        <Typography variant="h6">
                            Asphalt Roads
                        </Typography>
                        <Typography variant="body2">
                            Changes dirt roads to asphalt roads. Also changes the feel of the roads.
                        </Typography>
                        <Button variant="contained" onClick={_ => router.push('/project/asphaltroads')}>Visit project's page</Button>
                    </Paper>
                    <p></p>
                    <Paper elevation={3} sx={{padding: '1rem'}}>
                        <Typography variant="h6">
                            OldCarSounds
                        </Typography>
                        <Typography variant="body2">
                            OldCarSounds is a mod that changed the Satsuma to the old state.
                        </Typography>
                        <Button variant="contained" onClick={_ => router.push('/project/oldcarsounds')}>Visit project's page</Button>
                    </Paper>
                    <p></p>
                    <Paper elevation={3} sx={{padding: '1rem'}}>
                        <Typography variant="h6">
                            Old highway cars
                        </Typography>
                        <Typography variant="body2">
                            Old highway cars replaces cars on highway with satsumas from build 171
                        </Typography>
                        <Button variant="contained" onClick={_ => router.push('/project/oldhighwaycars')}>Visit project's page</Button>
                    </Paper>
                    <p></p>
                    <Paper elevation={3} sx={{padding: '1rem'}}>
                        <Typography variant="h6">
                            Old hayosiko
                        </Typography>
                        <Typography variant="body2">
                            Old hayosiko returned the hayosiko to its old state.
                        </Typography>
                        <Button variant="contained" onClick={_ => router.push('/project/oldhayosiko')}>Visit project's page</Button>
                    </Paper>
                    <p></p>
                    <Paper elevation={3} sx={{padding: '1rem'}}>
                        <Typography variant="h6">
                            Old world
                        </Typography>
                        <Typography variant="body2">
                            Old world returned the world to its old state.
                        </Typography>
                        <Button variant="contained" onClick={_ => router.push('/project/oldworld')}>Visit project's page</Button>
                    </Paper>
                    <p></p>
                    <Paper elevation={3} sx={{padding: '1rem'}}>
                        <Typography variant="h6">
                            Kekmet more gears
                        </Typography>
                        <Typography variant="body2">
                            Kekmet more gears allows you to buy more gears to the kekmet.
                        </Typography>
                        <Button variant="contained" onClick={_ => router.push('/project/kekmetmoregears')}>Visit project's page</Button>
                    </Paper>
                    <p></p>
                    <Paper elevation={3} sx={{padding: '1rem'}}>
                        <Typography variant="h6">
                            Kekmet speedometer
                        </Typography>
                        <Typography variant="body2">
                            A slightly broken mod that replaces the tachometer with a speedometer in the kekmet.
                        </Typography>
                        <Button variant="contained" onClick={_ => router.push('/project/kekmetspeedometer')}>Visit project's page</Button>
                    </Paper>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={openAccordion === 2} onChange={(_, x) => x ? setOpenAccordion(2) : setOpenAccordion(0)}>
                <AccordionSummary>
                    <Typography>Other projects</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {/* IRL Simulator, link "/project/irlsimulator" */}
                    <Paper elevation={3} sx={{padding: '1rem'}}>
                        <Typography variant="h6">
                            IRL Simulator
                        </Typography>
                        <Typography variant="body2">
                            IRL Simulator is a game where you simulate your life.
                        </Typography>
                        <Button variant="contained" onClick={_ => router.push('/project/irlsimulator')}>Visit project's page</Button>
                    </Paper>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={openAccordion === 3} onChange={(_, x) => x ? setOpenAccordion(3) : setOpenAccordion(0)}>
                <AccordionSummary>
                    <Typography>Online utilities</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Paper elevation={3} sx={{padding: '1rem'}}>
                        <Typography variant="h6">
                            Discord Timestamp Generator
                        </Typography>
                        <Typography variant="body2">
                            Allows you to generate timestamps for Discord.
                        </Typography>
                        <Button variant="contained" onClick={_ => router.push('/util/discord/timestamp-generator')}>Visit utility's page</Button>
                    </Paper>
                </AccordionDetails>
            </Accordion>
            <Watermark />
        </>
    )
}