import style from './style.module.css';

export default function MainSection(){
    return <section className={"row mt-3"}>
        <div className={"col-12 col-lg-6 " + style.section1 + " "+ style.center}>
            <div>
                <h1 className={style.h1}>تحلیلی SEO سایت های شما با ابزار ریت واچ</h1>
                <p className={style.details}>
                    تحلیل های هدفمند، مشاهده رتبه کلمات کلیدی به صورت روزانه و برسی سایت از لحاظ ساختاری و محتوایی برای راحت شدن کار برای افراد seo کار
                </p>
                <div className={"row"}>
                    <button className={style.free7+" col-5"}>استفاده 7 روز رایگان</button>
                    <button className={style.comment +" col-6"}> مشاهده نظرات کاربران</button>
                </div>
            </div>
        </div>
        <div className="col-12 col-lg-6">
            <img src="/monitor.webp" className={style.monitor} alt=""/>
        </div>
    </section>;
}
