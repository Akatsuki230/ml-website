import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'

const Home: NextPage = () => {
  const [video, setVideo] = useState('')
  const [videoError, setVideoError] = useState(false)
  const [videoErrorMessage, setVideoErrorMessage] = useState('')

  function render_newest_video() {
    if (videoError) {
      return (
        <p>Error while loading: {videoErrorMessage}</p>
      )
    }
    else if (video == "") {
      return (
        <p>Loading...</p>
      )
    }
    else {
      return (
        <span>
          <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </span>
      )
    }
  }

  useEffect(() => {
    (async () => {
      const channel = await fetch('/api/videos/newest')
      const json = await channel.json()
      if (json['error'] == "") {
        setVideo(json['id'])
      }
      else {
        setVideo("")
        setVideoError(true)
        setVideoErrorMessage(json['error'])
      }
    })()
  })

  return (
    <>
      <Head>
        <title>MLDKYT's website</title>
      </Head>
      <NavBar selected="home" />
      <div className='text-center'>
        <h1 className='p-16 text-5xl'>MLDKYT's official website!</h1>
        <span>Newest video: {render_newest_video()}</span>
      </div>
    </>
  )
}

export default Home
