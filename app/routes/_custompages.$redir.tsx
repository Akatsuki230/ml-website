import type {LoaderFunction, V2_MetaFunction} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";
import {useEffect, useRef, useState} from "react";
import Navbar from "~/components/Navbar";
import process from "process";

export const loader: LoaderFunction = async (ctx) => {
//   get $redir from path
  const redir = ctx.params['redir'];
  if (!redir) return {
    error: true,
    errorMessage: 'No custom path provided / Internal error'
  }

  const data = await (await fetch(`${process.env.FIREBASE_URL}/redirects/${redir}.json`)).json()
  console.log(data)

  return data
}

function renderRedirect(url: string, label: string, redirTime: number, text: string, textBg: string) {
  const r = parseInt(textBg.substring(3, 5), 16)
  const g = parseInt(textBg.substring(5, 7), 16)
  const b = parseInt(textBg.substring(8, 9), 16)
  const a = parseInt(textBg.substring(1, 3), 16) / 255

  return (
    <>
      <h1 className='text-3xl w-screen' style={{
        color: text,
        backgroundColor: `rgba(${r}, ${g}, ${b}, ${a})`
      }}>Redirecting you to {label} in {redirTime} seconds...</h1>
    </>
  )
}

function renderImage(url: string, label: string, text: string, textBg: string) {
  const r = parseInt(textBg.substring(3, 5), 16)
  const g = parseInt(textBg.substring(5, 7), 16)
  const b = parseInt(textBg.substring(8, 9), 16)
  const a = parseInt(textBg.substring(1, 3), 16) / 255

  return (
    <>
      <h1 className='text-3xl w-max p-1 rounded-md mb-2' style={{
        color: text,
        backgroundColor: `rgba(${r}, ${g}, ${b}, ${a})`
      }}>{label}</h1>
      <img src={url} alt={label}
           style={{height: 'calc(100vh - 160px)', position: "relative", left: '50%', transform: 'translateX(-50%)'}}/>
    </>
  )
}

function renderFile(url: string, label: string, text: string, textBg: string) {
  function f() {
    document.location.href = url
  }

  const r = parseInt(textBg.substring(3, 5), 16)
  const g = parseInt(textBg.substring(5, 7), 16)
  const b = parseInt(textBg.substring(8, 9), 16)
  const a = parseInt(textBg.substring(1, 3), 16) / 255

  return (
    <>
      <h1 className='text-3xl p-1 rounded-md' style={{
        color: text,
        backgroundColor: `rgba(${r}, ${g}, ${b}, ${a})`
      }}>{label}</h1>
      <br/>
      <button onClick={f} className='bg-blue-600 rounded-lg px-2 py-1'>
        Download
      </button>
    </>
  )
}

function renderError(label: string) {
  return (
    <>
      <h1 className='text-3xl text-red-500'>Error</h1>
      <h2>{label}</h2>
    </>
  )
}

export const meta: V2_MetaFunction = ({data}) => {
  switch (data.type) {
    case 'redirect':
      return [
        {title: 'Redirect by mldkyt'},
        {name: 'title', content: 'Redirect by mldkyt'},
        {name: 'description', content: `Redirects to ${data.label}`},
        {name: 'theme-color', content: '#00FFFF'},
        {name: 'author', content: 'mldkyt'}
      ]
    case 'image':
      return [
        {title: 'Image shared by mldkyt'},
        {name: 'title', content: 'mldkyt has shared an image with you'},
        {name: 'description', content: `Image ${data.label}`},
        {name: 'theme-color', content: '#00FFFF'},
        {name: 'og:image', content: data.url},
        {name: 'author', content: 'mldkyt'}
      ]
    case 'file':
      return [
        {title: 'File shared by mldkyt'},
        {name: 'title', content: 'mldkyt has shared a file with you'},
        {name: 'description', content: `File ${data.label}`},
        {name: 'theme-color', content: '#00FFFF'},
        {name: 'author', content: 'mldkyt'}
      ]
    default:
      return [
        {title: 'Error'},
        {name: 'title', content: 'Error'},
        {name: 'description', content: `Error ${data.label}`},
        {name: 'theme-color', content: '#FF0000'},
        {name: 'author', content: 'mldkyt'}
      ]
  }
}

export default function Redirect() {
  const data = useLoaderData();
  const [redirectTime, setRedirectTime] = useState(5)
  const [screenHeight, setScreenHeight] = useState(0)

  const hasRan = useRef(false)
  const countDown = useRef(5)

  function resizeEvent() {
    setScreenHeight(window.innerHeight)
  }

  useEffect(function () {
    window.addEventListener('resize', resizeEvent)

    if (!hasRan.current) {
      hasRan.current = true
      resizeEvent()
      if (data.type == 'redirect') {
        setInterval(function () {
          if (countDown.current > 1) {
            countDown.current--
            setRedirectTime(countDown.current)
          } else {
            setRedirectTime(0)
            document.location.href = data.url
          }
        }, 1000)
      }
    }

    return function () {
      window.removeEventListener('resize', resizeEvent)
    }
  }, [data.type, data.url])

  return (
    <>
      {(!data.error) && (
        <>
          {data.themeType == 'colour' && (
            <div className='w-screen h-screen fixed left-0 top-0' style={{
              backgroundColor: data.themeBgValue
            }}></div>
          )}
          {(data.themeType == 'imageTile' || data.themeType == 'imageFit' || data.themeType == 'imageStretch') && (
            <div className='w-screen h-screen fixed left-0 top-0' style={{
              backgroundImage: `url(${data.themeBgValue})`,
              backgroundSize: data.themeType == 'imageStretch' ? 'cover' : data.themeType == 'imageFit' ? 'contain' : 'auto',
              backgroundRepeat: data.themeType == 'imageTile' ? 'repeat' : 'no-repeat'
            }}></div>
          )}
        </>
      )}

      <h1 className='text-2xl p-4'>mldkyt has shared something with you:</h1>
      <br/>
      <br/>
      <div className='text-center absolute left-1/2 -translate-x-1/2 -translate-y-1/2' style={{
        top: `${screenHeight / 2}px`
      }}>
        {data.error ? (
          <>
            {renderError(data.errorMessage)}
          </>
        ) : (
          <>
            {data.type == 'redirect' && renderRedirect(data.url, data.label, redirectTime, data.themeTextColor, data.themeTextBgColor)}
            {data.type == 'image' && renderImage(data.url, data.label, data.themeTextColor, data.themeTextBgColor)}
            {data.type == 'file' && renderFile(data.url, data.label, data.themeTextColor, data.themeTextBgColor)}
          </>
        )}
      </div>
      <Navbar sel="" />
    </>
  )
}