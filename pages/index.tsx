import Head from 'next/head'
import NavBar from '../components/NavBar'
import { Button, Link, Stack, Typography, Alert } from "@mui/material";
import { Inter } from '@next/font/google';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { PriorityHigh } from '@mui/icons-material';

const inter = Inter({ subsets: ['latin'] });

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
          <Typography>I have a Discord bot.</Typography>
          <Button href="https://bot.mldkyt.com">See more</Button>
        </Alert>
        <Typography variant='body2'>{visits} visits</Typography>
        <Typography variant='h4'>My projects</Typography>
        <Button variant='contained' onClick={_ => router.push('/projects')}>View my projects</Button>
        <Typography variant='h4'>My social links</Typography>
        <Button onClick={_ => router.push('/social')} variant='contained'>Go to my social links</Button>
        
        <Typography variant='h4'>About me</Typography>
        <Typography>
          Hello there! I'm a programmer with a passion for creating immersive and entertaining experiences in the gaming world. My expertise lies in modding games, and one of my current projects is modifying the popular game My Summer Car to enhance the user experience.
        </Typography>
        <Typography>
          In addition to modding, I'm also developing my own game called IRL Simulator, which is a unique blend of simulation and role-playing. The game is still in development, but I'm excited to bring it to life and offer gamers a new and exciting way to play.
        </Typography>

        <Typography variant='h4'>My mods</Typography>
        <Typography>
          As a passionate game modder, I've created a variety of mods for the popular game My Summer Car. Each of these mods is designed to enhance the player experience and offer something new and exciting to the game.
        </Typography>
        <Typography>
          One of my most popular mods is Asphalt roads, which replaces the standard dirt roads in the game with smooth, realistic asphalt roads. This mod not only adds a new level of realism to the game but also makes driving smoother and more enjoyable.
        </Typography>
        <Typography>
          Another popular mod of mine is OldCarSounds, which brings back the classic look and feel of the Satsuma from its earlier versions. This mod includes a variety of tweaks and changes to the Satsuma's graphics and interface, offering a nostalgic trip down memory lane for long-time fans of the game.
        </Typography>
        <Typography>
          For players who enjoy driving the kekmet vehicle in My Summer Car, I've created several mods to enhance their experience. Kekmet speedometer and kekmet more gears offer new options for monitoring speed and shifting gears, respectively, making driving the kekmet even more fun and challenging.
        </Typography>
        <Typography>
          If you're a fan of classic cars, my Old World and Old Highway Cars mods are perfect for you. Old World replaces the game's modern vehicles with classic cars from the 1960s and 70s, while Old Highway Cars adds a variety of vintage cars to the game's traffic.
        </Typography>
        <Typography>
          For those who want to add a touch of nostalgia to their game, I've created Windows Sounds, which replaces the game's default sounds with classic Windows sound effects from previous versions of the operating system.
        </Typography>
        <Typography>
          Finally, for fans of the game's iconic Hayosiko vehicle, my Old Hayosiko and OldCarSounds mods add new textures and sounds to the vehicle, making it feel more authentic and enjoyable to drive.
        </Typography>
        <Typography>
          Overall, each of these mods is designed to offer something new and exciting to players of My Summer Car. Whether you're looking for improved graphics, new challenges, or a touch of nostalgia, my mods have you covered.
        </Typography>
        
        <Typography variant='h4'>IRL Simulator</Typography>
        <Typography>
          IRL Simulator is an upcoming game that I'm currently developing, and I couldn't be more excited to share it with you. This game is all about simulating real-life experiences, from driving a car to buying groceries and everything in between.
        </Typography>
        <Typography>
          So far, I've implemented a variety of features that bring this game world to life, including a fully-realized terrain system, a detailed house and garage, and a functioning time system complete with a day/night cycle.
        </Typography>
        <Typography>
          But the real fun is just getting started. In the coming months, I'll be adding even more features and content to IRL Simulator, including fully-realized roads and a variety of vehicles to drive, from a small car to a transport truck and everything in between.
        </Typography>
        <Typography>
          To make the experience even more immersive, there will be two towns to explore, each with its own grocery store, parts shop, and tuning parts shop. And for those who need to stay connected, there will be a variety of electronics shops where you can buy everything from phones and tablets to laptops.
        </Typography>
        <Typography>
          In order to add more realism to the game, I will implement a feature where batteries will have a certain amount of cycles and will lose capacity over time. This means you'll have to replace your batteries every so often, just like in real life.
        </Typography>
        <Typography>
          Overall, IRL Simulator is shaping up to be an exciting and engaging game that will offer players a unique and immersive experience like no other. I can't wait to share it with you, and I hope you're as excited as I am!
        </Typography>

        <Typography variant="body2">
        Please note that I am not a professional page designer, so I apologize if the aesthetics of this page are not up to par. My main focus is on creating engaging and informative content, rather than on page design. Nonetheless, I hope you find the information here helpful and enjoyable. Thank you for your understanding.
        </Typography>
      </Stack>
    </div>
  )
}

export default Home
