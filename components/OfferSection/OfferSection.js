import style from './style.module.css';

export default function OfferSection(){
    return <>
        <div className={"row"}>
            <h2 className={"mt-5"}>
                <img src={'/imgHeader.svg'} alt={"header style list"}/>
                خرید اشتراک ریت واچ
            </h2>
            <div className="col-12 col-lg-4 mt-2 mt-lg-0">
                <div className={style.bowSection +" row"}>
                    <img className={style.bow} src={'/bow.svg'}/>
                </div>
                <div className={style.cart}>
                    <p>اشتراک پایه</p>
                    <p>  <span className={style.green}>رایگان</span> / 7 روز</p>
                    <p>تعداد سایت: 3</p>
                    <p>بررسی روزانه رتبه کلمات کلیدی: بستگی به api key وارد شده در سیستم</p>
                    <button className={style.btnFree}>سفارش</button>
                </div>
            </div>
            <div className="col-12 col-lg-4 mt-5 mt-lg-0 ">
                <div className={style.middleBow +" row "}>
                    <img className={style.bow} src={'/bow.svg'}/>
                </div>
               <div className={style.middleCart+" "+style.cart}>
                   <div>
                       <div>
                           <p>اشتراک نقره ای</p>
                           <p>59 هزار تومان / ماهانه</p>
                           <p>تعداد سایت: 6</p>
                           <p>بررسی روزانه رتبه کلمات کلیدی: بستگی به api key وارد شده در سیستم</p>
                           <button className={style.btn}>سفارش</button>
                       </div>
                   </div>
               </div>
            </div>
            <div className="col-12 col-lg-4 mt-3 mt-lg-0">
                <div className={style.bowSection +" row"}>
                    <img className={style.bow} src={'/bow.svg'}/>
                </div>
                <div className={style.cart}>
                <p>اشتراک طلایی</p>
                <p>99 هزار تومان / ماهانه</p>
                <p>تعداد سایت: 20</p>
                <p>بررسی روزانه رتبه کلمات کلیدی: بستگی به api key وارد شده در سیستم</p>
                <button className={style.btn}>سفارش</button>
                </div>
            </div>
        </div>
    </>
}
