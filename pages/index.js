import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/header/header";
import MainSection from "@/components/mainSection/mainSection";
import IndexDetails from "@/components/indexDetils/indexDetils";
import Reading from "@/components/reading/reading";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>سرپ انجین</title>
        <meta name="description" content="سرپ انجین سایت تحلیل صفحات سایت شما برای رقابت در گوگل" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="سرپ انجین" />
          <meta property="og:description" content="سرپ انجین سایت تحلیل صفحات سایت شما برای رقابت در گوگل" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.webp" />
      </Head>
      <div className="container">
          <Header/>
          <MainSection/>
          <div className={styles.arrow}>
              <img src={"/arrow.svg"} alt="arrow for pointer"/>
          </div>
          <IndexDetails/>
          <Reading/>
      </div>

    </>
  );
}
