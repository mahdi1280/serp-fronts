import style from './style.module.css';
import Skeleton from "react-loading-skeleton";
import Image from "next/image";
import monitor from "@/public/monitor.webp";
import Link from "next/link";

export default function MainSection() {

    const handleImageLoad = () => {
        document.getElementById("monitorSkeleton").style.display="none";
    };


    return <section className={"row mt-3"}>
        <div className={"col-12 col-lg-6 " + style.section1 + " " + style.center}>
            <div>
                <h1 className={style.h1}>تحلیلی SEO سایت های شما با ابزار ریت واچ</h1>
                <p className={style.details}>
                    تحلیل های هدفمند، مشاهده رتبه کلمات کلیدی به صورت روزانه و برسی سایت از لحاظ ساختاری و محتوایی برای
                    راحت شدن کار برای افراد seo کار
                </p>
                <div className={"row"}>
                    <Link href={"http://panel.ratewatch.ir/login"} className={style.free7 + " col-5"}>استفاده 7 روز رایگان</Link>
                    <button className={style.comment + " col-6"}> مشاهده نظرات کاربران</button>
                </div>
            </div>
        </div>
        <div className="col-12 col-lg-6">
                <div id={"monitorSkeleton"} className={"position-ab"}>
                    <Skeleton height={532}/>
                </div>
                <Image
                    src={monitor}
                    className={style.monitor}
                    onLoad={handleImageLoad}
                    alt="نمایش مانیتور سایت ریت واچ"/>
        </div>
    </section>;
}
