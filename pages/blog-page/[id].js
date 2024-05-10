import Head from "next/head";
import style from './style.module.css';
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import {fetch} from "next/dist/compiled/@edge-runtime/primitives";
import {changeDate, MY_URL} from "@/pages/http";



export default function BlogPage({data}) {




    return <>
        <Head>
            <title>{data.title}</title>
            <meta name="description" content={data.shortDescription}/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content=" ریت واچ"/>
            <meta property="og:description" content={data.shortDescription}/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/logo.webp"/>
        </Head>
        <div className="container">
            <Header/>
            <div className={style.firstSection}>
                <div className="row">
                    <div className={"col-12 col-lg-6  " + style.description}>
                        <div>
                            <h1>
                                {data.h1Text}
                            </h1>
                            <p className={style.shortDescription}>
                                {data.shortDescription}
                            </p>

                            <div className={"row"}>
                                <div className={style.purpleColor + " col-7 col-lg-8"}>
                                    <img src={"/time.svg"} alt={"time icon"}/>
                                    <span>تاریخ آخرین ویرایش: </span>
                                    <span>{changeDate(data.createdAt)}</span>
                                </div>
                                <div className={"col-5 col-lg-4  " + style.purpleColor}>
                                    <span> نویسنده:</span>
                                    <span> مهدی کریمی</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"col-12 col-lg-6 " + style.center}>
                        <img
                            src={MY_URL+`blogs/image/${data.id}`}
                            alt={"blog img description"}
                            className={style.blogImage}
                        />
                    </div>
                </div>
            </div>
            <div>
                <p className={style.mainDescription} dangerouslySetInnerHTML={{ __html: data.description }}></p>
            </div>
            {/*<h2 className={style.header}>*/}
            {/*    بلاگ سرپ انجین*/}
            {/*</h2>*/}
            {/*<p>*/}
            {/*    قبل از هر چیزی، یک دوره آموزشی باید با زبانی کاملا ساده و شیوا گفته شده باشد و به تمام و جزییات و نکاتی*/}
            {/*    که ممکن است برای مخاطب سوال به وجود آورد بپردازد. این نکته در عین سادگی‌بسیار مهم است چرا که قدم های*/}
            {/*    بعدی آموزش و یادگیری شما به درک مفاهیم پایه بستگی دارد و سعی کردیم که این کار را به بهترین نحو انجام*/}
            {/*    دهیم.*/}
            {/*</p>*/}
            {/*<h2 className={style.header}>*/}
            {/*    ویژگی های آموزشی ما*/}
            {/*</h2>*/}
            {/*<b className={style.marker}>زبان ساده و روان</b>*/}


            <Footer/>
        </div>
    </>
}

export async function getStaticPaths(){
    return {
        paths: [
            {
                params: {
                    id: "1",
                },

            },
            {
                params: {
                    id: "2",
                },

            },
        ],
        fallback: true
    }
}

export async function getStaticProps(context) {
    const {params} = context;
    const res = await fetch(MY_URL+`blogs/${params.id}`);
    const data = await res.json();
    return {
        props: {
            data
        }
    }
}
