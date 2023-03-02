import Head from 'next/head'
import NavBar from '../components/NavBar'
import {Button, Link, Stack, Typography, Alert} from "@mui/material";
import {Inter} from '@next/font/google';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { PriorityHigh } from '@mui/icons-material';

const inter = Inter({subsets: ['latin']});

const Home = () => {
  const router = useRouter();
  const [visits, setVisits] = useState('loading ');
  const hasLoaded = useRef(false);

  useEffect(() => {
    if (!hasLoaded.current) {
      fetch('/api/visits')
      .then(res => res.json())
      .then(data => {
        setVisits(data.visits);
      });
      hasLoaded.current = true;
    }
  }, [])
  
  return (
    <div className={inter.className}>
      <Head>
        <title>mldkyt's website</title>
      </Head>
      <NavBar selected="home" />
      <Stack spacing={1} alignContent='center'>
        <Typography variant='h3'>Welcome to mldkyt's website!</Typography>
        <Alert color="error" icon={<PriorityHigh />}>
          <Typography>I have released a Discord bot.</Typography>
          <Button href="https://bot.mldkyt.com">See more</Button>
        </Alert>
        <Typography variant='body2'>{visits} visits</Typography>
        <Typography variant='h4'>About MLDKYT</Typography>
        <Typography variant='body1'>MLDKYT (mldkyt) is a YouTuber, programmer and a modder.</Typography>
        <Typography variant='body1'>Most of his mods are for a game called <Link href='https://store.steampowered.com/app/516750/My_Summer_Car/'>My Summer Car</Link>.</Typography>  
        <Typography variant='h4'>My projects</Typography>
        <Button variant='contained' onClick={_ => router.push('/projects')}>View my projects</Button>
        <Typography variant='h4'>My social links</Typography>
        <Button onClick={_ => router.push('/social')} variant='contained'>Go to my social links</Button>
      </Stack>
    </div>
  )
}

export default Home
