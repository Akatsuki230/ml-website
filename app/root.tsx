import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import globalStyle from "./global.css";
import { FakeLoad } from "~/components/FakeLoad";
import { motion } from "framer-motion";
import React from "react";
import { Analytics } from '@vercel/analytics/react';

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: globalStyle },
];

export default function App() {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <div className="bg-[#111] text-white min-h-screen min-w-full top-0 absolute">
          <br />
          <br />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            variants={{
              "1": {
                opacity: 0,
                scale: 0.8,
              },
              "2": {
                opacity: 1,
                scale: 1
              },
            }}
            animate={loaded ? "2" : "1"}
            transition={{ duration: 0.5, ease: 'backInOut' }}
          >
            <Outlet />
          </motion.div>
        </div>
        <FakeLoad loadedCallback={() => setLoaded(true)} />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Analytics />
      </body>
    </html>
  );
}
