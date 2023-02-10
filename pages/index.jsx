import Head from 'next/head'
import { useState } from 'react'
import NavBar from '../components/NavBar'
import {Accordion, AccordionDetails, AccordionSummary, Badge, Button, Link, Paper, Stack, Typography} from "@mui/material";
import {Inter} from '@next/font/google';
import { useRouter } from 'next/router';
import { MongoClient } from 'mongodb';

const inter = Inter({subsets: ['latin']});

export async function getServerSideProps(ctx) {
  let client = new MongoClient("mongodb+srv://mldkyt:Ix2s5Vr1HknaToXB@cluster0.nhsmboe.mongodb.net/Cluster0?retryWrites=true&w=majority");
  let webdata = client.db("Cluster0").collection("webdata");
  let visits = await webdata.findOne({});
  await webdata.findOneAndUpdate({}, {$set: {visits: visits.visits + 1}});
  await client.close();

  return {
    props: {
      visits: visits.visits
    }
  }
}

const Home = (props) => {
  const router = useRouter();
  
  return (
    <div className={inter.className}>
      <Head>
        <title>MLDKYT's website</title>
      </Head>
      <NavBar selected="home" />
      <Stack spacing={1}>
        <Typography variant='h3'>Welcome to my website!</Typography>
        <Typography variant='body2'>{props.visits} visits</Typography>
        <Link href='/social'>Social links</Link>
        <div>
          <Typography variant='h4'>Who is MLDKYT</Typography>
          <Typography variant='body1'>MLDKYT (mldkyt) is a YouTuber, programmer and a modder.</Typography>
          <Typography variant='body1'>Most of his mods are for a game called <Link>My Summer Car</Link>.</Typography>  
          <Typography variant='h4'>My projects</Typography>
          <br />
          <Button variant='contained' onClick={_ => router.push('/projects')}>View my projects</Button>
          <p></p>
          <Typography variant='h4'>My social links</Typography>
          <p></p>
          <Button onClick={_ => router.push('/social')} variant='contained'>Go to my social links</Button>
        
        </div>
      </Stack>
    </div>
  )
}

export default Home
