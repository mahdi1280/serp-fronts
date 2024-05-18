import Head from "next/head";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import style from './style.module.css';

export default function Learning() {
    return <>
        <Head><script type="text/JavaScript"
                      src="https://www.aparat.com/embed/oss761w?data[rnddiv]=79963509681&data[responsive]=yes"></script>
            <script type="text/JavaScript"
                    src="https://www.aparat.com/embed/mro13ti?data[rnddiv]=83784382860&data[responsive]=yes"></script>
            <title>ریت واچ</title>
            <meta name="description" content="آموزش های سایت ریت واچ برای کار کردن با ابزار seo"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content="ریت واچ"/>
            <meta property="og:description" content="آموزش های سایت ریت واچ برای کار کردن با ابزار seo"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/logo.webp"/>
        </Head>

        <div className="container">
            <Header/>
            <div>
                <div className={style.video} id={"79963509681"}></div>
                <div id="83784382860"></div>
            </div>
            <Footer/>

        </div>
    </>
}
