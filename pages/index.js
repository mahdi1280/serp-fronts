import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/header/header";
import MainSection from "@/components/mainSection/mainSection";
import IndexDetails from "@/components/indexDetils/indexDetils";
import Reading from "@/components/reading/reading";
import BlogSection from "@/components/blogSection/blogSection";
import Footer from "@/components/footer/footer";
import OfferSection from "@/components/OfferSection/OfferSection";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import Arrow from '@/public/arrow.svg'

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
              <div id={"arrow-loading"} className={"position-ab"} >
                  <Skeleton height={155} width={158}/>
              </div>
              <Image
                  src={Arrow}
                  alt="arrow for pointer"
                    onLoad={()=>document.getElementById("arrow-loading").style.display="none"}
              />
          </div>
          <IndexDetails/>
          <OfferSection/>

          <h2 className={"mt-5"}>
              <img src={'/imgHeader.svg'} alt={"header style list"}/>
              مقالات
          </h2>
          <BlogSection/>

          <Reading/>
          <Footer/>

      </div>

    </>
  );
}
