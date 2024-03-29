import Head from "next/head";
import BlogSection from "@/components/blogSection/blogSection";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export default function Index(){
    return <>
        <Head>
            <title>مقالات سرپ انجین</title>
            <meta name="description" content="سرپ انجین سایت تحلیل صفحات سایت شما برای رقابت در گوگل" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="سرپ انجین" />
            <meta property="og:description" content="سرپ انجین سایت تحلیل صفحات سایت شما برای رقابت در گوگل" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/logo.webp" />
        </Head>
        <div className="container">
            <Header/>
            <h2 className={"mt-5"}>
                <img src={'/imgHeader.svg'} alt={"header style list"}/>
                مقالات
            </h2>
            <BlogSection/>
            <BlogSection/>
            <BlogSection/>
            <BlogSection/>
            <Footer/>
        </div>
    </>
}
