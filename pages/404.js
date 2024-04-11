import Head from "next/head";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import style from './style404.module.css';

export default function Custom404() {

    return <>
        <Head>
            <title>404 ریت واچ</title>
            <meta name="description" content="صفحه 404 ریت واچ" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="سرپ انجین" />
            <meta property="og:description" content="صفحه 404ریت واچ" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/logo.webp" />
            <link href='https://fonts.googleapis.com/css?family=Carter+One' rel='stylesheet' type='text/css'/>

        </Head>
        <div className="container">
            <Header/>
            <div id="main" className={style.main}>
                <div className={style.fof}>
                    <h1>Error 404</h1>
                    <p>این صفحه یافت نشد!!</p>
                </div>
            </div>
            <Footer/>

        </div>

    </>
}
