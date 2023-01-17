import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import NavBar from '../components/NavBar'

const Home: NextPage = () => {
  const [visits, setVisits] = useState(0)
  const isMountedRef = useRef(false);

  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      (async () => {
        const res = await fetch('/api/visits')
        const data = await res.json()
        setVisits(data.visits)
      })()
    }
  }, []);
  
  return (
    <>
      <Head>
        <title>MLDKYT's website</title>
      </Head>
      <NavBar selected="home" />
      <div className='bg-gray-900 text-white h-screen'>
        <h1 className='p-8 text-5xl text-center'>MLDKYT's official website!</h1>
        <p className='mx-8 text-green-300'>{visits == 0 ? "..." : visits} visits</p>
        
        <div className='border-4 rounded-3xl m-4'>
          <h3 className='text-4xl m-2'>Social links</h3>
          <p className='m-2'>To see my social links, go to the social links page.</p>
          <a href='/social'>
            <button className='bg-purple-600 hover:bg-purple-700 transition-all p-2 px-4 rounded-xl m-2'>Social links</button>
          </a>
        </div>
        
        <p className='text-4xl px-4'>Who is MLDKYT?</p>
        <p className='p-2'>
          MLDKYT is a YouTuber who makes videos on YouTube and streams on Twitch. He is also a developer who makes websites, apps and mods for games.
        </p>
        <p className='p-2'>
          A prime example of his work is his website, which you are currently on. The most popular mod he has made is the <a href='/mods/ocs' className='text-blue-500'>OldCarSounds mod</a> for My Summer Car.
        </p>
      </div>
    </>
  )
}

export default Home
