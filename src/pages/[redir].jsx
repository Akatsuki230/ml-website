import { useEffect, useRef, useState } from "react";
import FinalNavbar from "@/components/NavBar";
import process from "process";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import FemboyFridayVirtualHeadpat from "@/components/FemboyFridayVirtualHeadpat";
import { Inter } from "next/font/google";
import { Container } from "react-bootstrap";


/**
 * 
 * @param {GetServerSidePropsContext} ctx 
 * @returns 
 */
export async function getServerSideProps(ctx) {
  const { redir } = ctx.params
  if (!redir) return { notFound: true };
  if (!redir)
    return {
      notFound: true,
    };

  const data = await (
    await fetch(`${process.env.FIREBASE_URL}/redirects/${redir}.json`)
  ).json();
  if (data == null) {
    return {
      notFound: true,
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

const inter = Inter({ subsets: ["latin"] });

export default function Redirect(props) {
  useEffect(() => {
    setTimeout(() => {
      location.href = props.data.url
    }, props.data.waitTime * 1000)
  })

  return (
    <div className={inter.className}>
      <Head>
        <title>{props.data.pageTitle}</title>
        <meta name="og:title" content={props.data.embedTitle} />
        <meta
          name="description"
          content={props.data.embedDescription}
        />
        <meta name="theme-color" content={props.data.embedColor} />
        <meta name="author" content={props.data.embedAuthor} />
      </Head>

      <FinalNavbar />

      <Container>
        <FemboyFridayVirtualHeadpat />
        <h1>{props.data.siteTitle}</h1>
        <p>{props.data.siteDescription}</p>
        <p><small>{props.data.views} views</small></p>
      </Container>
    </div>
  );
}
