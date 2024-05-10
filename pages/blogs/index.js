import Head from "next/head";
import BlogSection from "@/components/blogSection/blogSection";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import {fetch} from "next/dist/compiled/@edge-runtime/primitives";
import {MY_URL} from "@/pages/http";

export default function Index({data}){
    return <>
        <Head>
            <title>مقالات ریت واچ</title>
            <meta name="description" content="ریت واچ سایت تحلیل صفحات سایت شما برای رقابت در گوگل" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="ریت واچ" />
            <meta property="og:description" content="ریت واچ سایت تحلیل صفحات سایت شما برای رقابت در گوگل" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/logo.webp" />
        </Head>
        <div className="container">
            <Header/>
            <h2 className={"mt-5"}>
                <img src={'/imgHeader.svg'} alt={"header style list"}/>
                مقالات
            </h2>
            <BlogSection blogs={data.content}/>
            <Footer/>
        </div>
    </>
}

export async function getStaticProps(){
    const res = await fetch(MY_URL+"blogs");
    const data = await res.json();
    return {
        props: {
            data
        },
        revalidate: 60 * 60 * 24
    }
}
