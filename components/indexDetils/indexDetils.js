import style from './style.module.css';
import Skeleton from "react-loading-skeleton";
import Link from "next/link";

export default function IndexDetails(){
    return <section className={style.minSection+" row"}>
        <div className={"col-12 col-lg-6"}>
            <h2>
                <img src={'/imgHeader.svg'} alt={"header style list"}/>
                آنالیز سئو سایت با ریت واچ
            </h2>
            <p>
                بررسی سئو سایت یکی از مهم ترین بخش‌های آنالیز سایت است که به شما کمک می‌کند تا استراتژی‌های حرفه‌ای و جذابی را برای سایت خودتان طراحی کنید.
            </p>
            <p>
                ریت واچ با تست و تحلیل سئو سایت شما می‌تواند مشکلات موجود را شناسایی کند و راهکارهای فوق‌العاده‌‌ای را در بخش‌های زیر برای بهینه‌سازی سایت به شما پیشنهاد دهد.

            </p>
            <ul>
                <li>بررسی سایت از نظر فنی و محتوایی
                </li>
                <li>تحقیق کلمات کلیدی
                </li>
                <li>ارائه ساختار محتوا
                </li>
                <li>رهگیری رتبه کلمات کلیدی
                </li>
                <li>مشاهده خطاهای فنی سایت
                </li>
                <li>تجزیه و تحلیل رقبا
                </li>
            </ul>
            <p>
                با کمک گرفتن از ابزار آنلاین آنالیز سایت جت سئو، می‌توانید هوشمندانه سئو کنید و بالاتر از رقبا دیده شوید.
            </p>
            <p>
                کافیست همین حالا عضو جت سئو شوید و با کلیک روی لینک زیر نتایج شگفت‌انگیز بررسی سئو سایت خودتان را ببینید.
            </p>
            <Link href={"http://panel.ratewatch.ir/login"} className={style.btn}>تست رایگان تحقیق کلمات کلیدی</Link>
        </div>
        <div className={"col-12 col-lg-6 "+ style.sectionBanner}>
            <img src="/bnner.webp" className={style.bannerImg} alt="banner site and detils sitea"/>
        </div>
    </section>
}
