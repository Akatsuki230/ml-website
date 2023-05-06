import Head from 'next/head'
import NavBar from '../components/NavBar'
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import Watermark from '@/components/Watermark';

const Home = () => {
  const [visits, setVisits] = useState('loading ');
  const hasLoaded = useRef(false);

  useEffect(() => {
    if (!hasLoaded.current) {
      fetch('/api/getVisits')
        .then(res => res.json())
        .then(data => {
          setVisits(data.visits);
        });
      hasLoaded.current = true;
    }
  }, [])

  return (
    <div>
      <Head>
        <title>mldkyt's website</title>
        <meta name="title" content="mldkyt's website" />
        <meta name="description" content="Welcome to mldkyt's website!" />
        <meta name="author" content="mldkyt" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187" crossOrigin="anonymous"></script>
      </Head>
      <NavBar />
      <br/>
        <h1 className='text-3xl mx-2 font-bold'>Welcome to mldkyt's website!</h1>
        <p className='mx-4'>{visits} visits</p>
        <div className='flex flex-row'>
          <div className='w-24 text-center bg-gradient-to-t from-gray-600 to-gray-800 text-white pb-3 pt-2 rounded-lg m-2 drop-shadow-lg'>
            <span>Projects</span>
            <br/>
            <br/>
            <a href="/projects" className='p-1 px-2 bg-green-600 rounded-lg border-2 border-black'>Show</a>
          </div>
          <div className='w-28 text-center bg-gradient-to-t from-gray-600 to-gray-800 text-white pb-3 pt-2 rounded-lg m-2 drop-shadow-lg'>
            <span>Social links</span>
            <br/>
            <br/>
            <a href="/social" className='p-1 px-2 bg-green-600 rounded-lg border-2 border-black'>Show</a>
          </div>
        </div>
        <h2 className='text-2xl mx-2'>About me</h2>
        <p className='mx-1'>
          Hello there! I'm a programmer with a passion for creating immersive and entertaining experiences in the gaming world. My expertise lies in modding games, and one of my current hobbies is making mods for the popular game My Summer Car to enhance the user experience.
        </p>
        <p className='mx-1'>
          In addition to modding, I'm also developing my own game called IRL Simulator, which is a unique blend of simulation and role-playing. The game is still in development, but I'm excited to bring it to life and offer gamers a new and exciting way to play. <i>The development is a bit stalled but I'm trying to work on it.</i>
        </p>

        <h2 className='text-2xl mx-2'>My mods</h2>
        <p className='mx-1'>
          As a passionate game modder, I've created a variety of mods for the popular game My Summer Car. Each of these mods is designed to enhance the player experience and offer something new and exciting to the game.
        </p>
        <p className='mx-1'>
          One of my most popular mods is <a className='text-blue-500' href='/project/asphaltroads'>Asphalt roads</a>, which replaces the standard dirt roads in the game with smooth, realistic asphalt roads. This mod not only adds a new level of realism to the game but also makes driving smoother and more enjoyable.
        </p>
        <p className='mx-1'>
          Another popular mod of mine is <a className='text-blue-500' href='/project/oldcarsounds'>OldCarSounds</a>, which brings back the classic look and feel of the Satsuma from the earlier versions of My Summer Car. This mod includes a variety of tweaks and changes to the Satsuma's graphics and functionality, offering a nostalgic trip down memory lane for old alpha testers of the game.
        </p>
        <p className='mx-1'>
          For players who enjoy driving the kekmet in My Summer Car, I've created several mods to enhance their experience. <a className='text-blue-500' href='/project/kekmetspeedometer'>Kekmet Speedometer</a> and <a className='text-blue-500' href='/project/kekmetmoregears'>Kekmet More Gears</a> offer new options for monitoring speed and shifting gears, respectively, making driving the kekmet even more fun.
        </p>
        <p className='mx-1'>
          If you're a fan of classic cars, my <a className='text-blue-500' href='/project/oldworld'>Old World</a> and <a className='text-blue-500' href='/project/oldhighwaycars'>Old Highway Cars</a> mods are perfect for you. <a className='text-blue-500' href='/project/oldworld'>Old World</a> replaces the game's modern vehicles with classic cars from the 1960s and 70s, while <a className='text-blue-500' href='/project/oldhighwaycars'>Old Highway Cars</a> adds a variety of vintage cars to the game's traffic.
        </p>
        <p className='mx-1'>
          For those who want to add a touch of nostalgia to their game, I've created <a className='text-blue-500' href='https://www.nexusmods.com/mysummercar/mods/912'>Windows Sounds</a>, which replaces the game's default sounds with classic Windows sound effects from Windows 7.
        </p>
        <p className='mx-1'>
          Finally, for fans of the game's iconic Hayosiko vehicle, my <a className='text-blue-500' href='/project/oldhayosiko'>Old Hayosiko</a> mod changes textures and sounds of the vehicle, making it feel more nostalgic to drive.
        </p>
        
        <h2 className='text-2xl mx-2'>IRL Simulator</h2>
        <p className='mx-1'>
          <a className='text-blue-500' href='/project/irlsimulator'>IRL Simulator</a> is an upcoming game that I'm currently developing, and I couldn't be more excited to share it with you. This game is all about simulating real-life experiences, from driving a car to buying groceries and everything in between.
        </p>
        <p className='mx-1'>
          So far, I've implemented a variety of features that bring this game world to life, including a fully-realized terrain system, a detailed house and garage, and a functioning time system complete with a day/night cycle.
        </p>
        <p className='mx-1'>
          But the real fun is just getting started. In the coming months, I'll be adding even more features and content to <a className='text-blue-500' href='/project/irlsimulator'>IRL Simulator</a>, including fully-realized roads and a variety of vehicles to drive, from a small car to a transport truck and everything in between.
        </p>
        <p className='mx-1'>
          To make the experience even more immersive, there will be two towns to explore, each with its own stores and mechanics. And for those who need to stay connected, there will be a variety of electronics shops where you can buy everything from phones and tablets to laptops.
        </p>
        <p className='mx-1'>
          In order to add more realism to the game, I will implement a feature where batteries will have a certain amount of cycles and will lose capacity over time. This means you'll have to replace your batteries every so often, just like in real life.
        </p>

        <p className='text-sm mx-1'>
        Please note that I am not a professional page designer, so I apologize if the aesthetics of this page are not up to par. My main focus is on creating engaging and informative content, rather than on page design. Nonetheless, I hope you find the information here helpful and enjoyable. Thank you for your understanding.
        </p>
        <Watermark />
    </div>
  )
}

export default Home
