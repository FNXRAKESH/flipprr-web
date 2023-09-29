import Head from "next/head";
import { Button } from "@nextui-org/react";
import Menu from "@/components/menu";
import Intro from "@/components/intro";
 
import Footer from "@/components/Footer";
import Contact from "@/components/contact";
import FastTransfer from "@/components/fastTransfer";
import BankLevelSecurity from "@/components/BankLevelSecurity";
import CompetitiveRates from "@/components/CompetitiveRates";
import Tracking from "@/components/Tracking";
 

export default function Home() {
  return (
    <>
      <Head>
        <title>Flipprr</title>
        <meta name="description" content="Digital Payments Made Simple" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <main className="container mx-auto max-w-7xl min-h-[calc(100vh_-_64px_-_108px)] mb-12 flex-grow px-5">
        <Intro />
        {/* <KeyFeatures /> */}
        <FastTransfer />
        <BankLevelSecurity />
        <CompetitiveRates />
        <Tracking />
        <Contact />
      </main>
      <hr />
      <Footer />
    </>
  );
}
