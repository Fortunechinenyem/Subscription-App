import { AppProps } from "next/app";
import "../styles/globals.css";
import Head from "next/head";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fortunata",
  description: "A Subscription App",
};

const Fortunata = ({ Component, ...appProps }: AppProps) => {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <main>
        <Component {...appProps} />
      </main>
    </>
  );
};

export default Fortunata;
