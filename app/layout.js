/* eslint-disable @next/next/no-script-component-in-head */
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { analytics } from "./firebase/config";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pantry Tracker - Your Smart Pantry Management Solution",
  description: `
    Pantry Tracker is a modern web application designed to streamline your pantry management with cutting-edge technologies. Built with Next.js, React, and Material UI, it leverages TensorFlow.js for intelligent recipe suggestions and Firebase for secure user authentication. Features include interactive charts for inventory analysis, real-time webcam integration for item capture, and robust API support for seamless data interaction. Ideal for anyone looking to keep their pantry organized and make data-driven decisions about their food inventory.
  `,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#ffffff" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-29SXBQTQTX"
        ></Script>
        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', ${"${process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID}"});
          `}
        </Script>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
