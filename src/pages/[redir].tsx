import { useEffect, useRef, useState } from "react";
import FinalNavbar from "@/components/NavBar";
import process from "process";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import FemboyFridayVirtualHeadpat from "@/components/FemboyFridayVirtualHeadpat";
import { Inter } from "next/font/google";
import { Container } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { redir } = ctx.params as { redir: string };
  if (!redir) return { notFound: true };
  if (!redir)
    return {
      props: {
        data: {
          error: true,
          errorMessage: "No custom path provided / Internal error",
        },
      },
    };

  const data = await (
    await fetch(`${process.env.FIREBASE_URL}/redirects/${redir}.json`)
  ).json();
  if (data == null) {
    return {
      props: {
        data: {
          error: true,
          errorMessage: "Redirect not found",
        },
      },
    };
  }

  if (!data.views) data.views = 0;
  data.views++;
  await fetch(`${process.env.FIREBASE_URL}/redirects/${redir}.json`, {
    method: "PATCH",
    body: JSON.stringify({
      views: data.views,
    }),
  });

  return {
    props: {
      data,
    },
  };
}

function renderRedirect(url: string, label: string, redirTime: number) {
  return (
    <>
      <div>
        <h2 className="text-5xl">{label}</h2>
        <p>Redirecting you in {redirTime} seconds...</p>
      </div>
    </>
  );
}

function renderImage(url: string, label: string) {
  return (
    <>
      <h1>{label}</h1>
      <img
        src={url}
        alt={label}
        style={{
          height: "calc(100vh - 160px)",
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
    </>
  );
}

function renderFile(url: string, label: string) {
  function f() {
    document.location.href = url;
  }

  return (
    <>
      <h1>{label}</h1>
      <br />
      <button onClick={f} className="bg-blue-600 rounded-lg px-2 py-1">
        Download
      </button>
    </>
  );
}

function renderError(label: string) {
  return (
    <>
      <h1 className="text-5xl text-red-500">Error</h1>
      <h2>{label}</h2>
    </>
  );
}

export default function Redirect(props: { data: any }) {
  const [redirectTime, setRedirectTime] = useState(5);
  const [screenHeight, setScreenHeight] = useState(0);

  const hasRan = useRef(false);
  const countDown = useRef(5);

  function resizeEvent() {
    setScreenHeight(window.innerHeight);
  }

  useEffect(
    function () {
      window.addEventListener("resize", resizeEvent);

      if (!hasRan.current) {
        hasRan.current = true;
        resizeEvent();
        if (props.data.type == "redirect") {
          setInterval(function () {
            if (countDown.current > 1) {
              countDown.current--;
              setRedirectTime(countDown.current);
            } else {
              setRedirectTime(0);
              document.location.href = props.data.url;
            }
          }, 1000);
        }
      }

      return function () {
        window.removeEventListener("resize", resizeEvent);
      };
    },
    [props.data.type, props.data.url]
  );

  return (
    <div className={inter.className}>
      <Head>
        {props.data.type == "redirect" && (
          <>
            <title>Redirect by mldkyt</title>
            <meta name="og:title" content="Redirect by mldkyt" />
            <meta
              name="description"
              content={`Redirects to ${props.data.label}`}
            />
            <meta name="theme-color" content="#FF77FF" />
            <meta name="author" content="mldkyt" />
          </>
        )}
        {props.data.type == "image" && (
          <>
            <title>Image shared by mldkyt</title>
            <meta
              name="og:title"
              content="mldkyt has shared an image with you"
            />
            <meta name="description" content={`Image ${props.data.label}`} />
            <meta name="theme-color" content="#FF77FF" />
            <meta name="og:image" content={props.data.url} />
            <meta name="author" content="mldkyt" />
          </>
        )}
        {props.data.type == "file" && (
          <>
            <title>File shared by mldkyt</title>
            <meta name="og:title" content="mldkyt has shared a file with you" />
            <meta name="description" content={`File ${props.data.label}`} />
            <meta name="theme-color" content="#FF77FF" />
            <meta name="author" content="mldkyt" />
          </>
        )}
        {props.data.type == "error" && (
          <>
            <title>Error</title>
            <meta name="og:title" content="Error" />
            <meta name="description" content={`Error ${props.data.label}`} />
            <meta name="theme-color" content="#FF77FF" />
            <meta name="author" content="mldkyt" />
          </>
        )}
      </Head>

      <FinalNavbar />

      {!props.data.error && (
        <>
          {props.data.themeType == "colour" && (
            <div
              className="w-screen h-screen fixed left-0 top-0"
              style={{
                backgroundColor: props.data.themeBgValue,
              }}
            ></div>
          )}
          {(props.data.themeType == "imageTile" ||
            props.data.themeType == "imageFit" ||
            props.data.themeType == "imageStretch") && (
            <div
              className="w-screen h-screen fixed left-0 top-0"
              style={{
                backgroundImage: `url(${props.data.themeBgValue})`,
                backgroundSize:
                  props.data.themeType == "imageStretch"
                    ? "cover"
                    : props.data.themeType == "imageFit"
                    ? "contain"
                    : "auto",
                backgroundRepeat:
                  props.data.themeType == "imageTile" ? "repeat" : "no-repeat",
              }}
            ></div>
          )}
        </>
      )}

      <Container>
        <FemboyFridayVirtualHeadpat />
        <h1>mldkyt has shared something with you:</h1>
        <div
          className="text-center absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            top: `${screenHeight / 2}px`,
          }}
        >
          {props.data.error ? (
            <>{renderError(props.data.errorMessage)}</>
          ) : (
            <>
              {props.data.type == "redirect" &&
                renderRedirect(props.data.url, props.data.label, redirectTime)}
              {props.data.type == "image" &&
                renderImage(props.data.url, props.data.label)}
              {props.data.type == "file" &&
                renderFile(props.data.url, props.data.label)}
            </>
          )}
          {props.data.error || (
            <div
              className="mt-2"
              style={{
                color: props.data.themeTextColor,
              }}
            >
              Views: {props.data.views}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
