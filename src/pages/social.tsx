import Watermark from "@/components/Watermark";
import { Button, Paper, Stack, Typography } from "@mui/material";
import Head from "next/head";
import React from "react";
import NavBar from '../components/NavBar';

export default function Social() {
    return (
        <>
            <Head>
                <title>Social links</title>
            </Head>
            <NavBar selected="" />

            <Stack spacing={1}>
                <Typography variant="h4">Social links</Typography>
                <Typography variant="h6">Welcome to the social links page! Here you can find all of my social links.</Typography>
                <Paper elevation={3} sx={{padding: '1rem'}}>
                    <Typography variant="h5">Discord</Typography>
                    <Typography>My Discord server is where I post updates and you can chat.</Typography>
                    <Button href="https://discord.gg/3TvJFJMZrf" variant="contained">Join</Button>
                </Paper>
                <Paper elevation={3} sx={{padding: '1rem', marginTop: '1rem'}}>
                    <Typography variant="h5">YouTube</Typography>
                    <Typography>My YouTube channel is where I upload my videos.</Typography>
                    <Button href="https://youtube.com/@mldkyt" variant="contained">Subscribe</Button>
                </Paper>
                <Paper elevation={3} sx={{padding: '1rem', marginTop: '1rem'}}>
                    <Typography variant="h5">Twitch</Typography>
                    <Typography>My Twitch channel is where I (rarely) stream.</Typography>
                    <Button href="https://twitch.tv/mldkyt" variant="contained">Follow</Button>
                </Paper>
                <Paper elevation={3} sx={{padding: '1rem', marginTop: '1rem'}}>
                    <Typography variant="h5">Twitter</Typography>
                    <Typography>My Twitter channel is where I (rarely) post stream notifications and (never) post YouTube releases.</Typography>
                    <Button href="https://twitter.com/mldkyt" variant="contained">Follow</Button>
                </Paper>
                <Paper elevation={3} sx={{padding: '1rem', marginTop: '1rem'}}>
                    <Typography variant="h5">NexusMods</Typography>
                    <Typography>This is my mod publishing profile.</Typography>
                    <Button href="https://www.nexusmods.com/users/57424716" variant="contained">Profile</Button>
                </Paper>
                <Paper elevation={3} sx={{padding: '1rem', marginTop: '1rem'}}>
                    <Typography variant="h5">Subreddit</Typography>
                    <Typography>This is my subreddit on Reddit.</Typography>
                    <Button href="https://reddit.com/r/mldkyt" variant="contained">Join</Button>
                </Paper>
                <Paper elevation={3} sx={{padding: '1rem', marginTop: '1rem'}}>
                    <Typography variant="h5">Reddit profile</Typography>
                    <Typography>This is my user page on Reddit.</Typography>
                    <Button href="https://reddit.com/u/mldkyt" variant="contained">Follow</Button>
                </Paper>
            </Stack>
            <Watermark />
        </>
    )
}