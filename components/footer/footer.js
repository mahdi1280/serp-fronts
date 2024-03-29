import style from './style.module.css'
import Link from "next/link";
export default function Footer(){
    return <>
        <footer className={"row mt-5 "+ style.footer}>
            <div className="col-12 col-lg-1">
                <img src={'/logo.webp'} className={style.logo} alt={"logo"}/>

            </div>
            <div className="col-12 col-lg-4">
                <h3>تحلیل سایت شما با ریت واچ</h3>
                <p>تحلیل المان های صفحات و پتیبانی 24 ساعته</p>
            </div>
            <div className="col-12 col-lg-4">
                <h3>بخشش های سایت</h3>
                <p>وبلاگ</p>
                <p>درباره ما</p>
                <p>نظرات کاربران</p>
                <br/>
                <br/>
                <span className={style.svg}><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-njucem" focusable="false"
                           aria-hidden="true" viewBox="0 0 24 24" data-testid="InstagramIcon"><path
                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg></span>
                <span className={style.svg}><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-njucem" focusable="false"
                           aria-hidden="true" viewBox="0 0 24 24" data-testid="TelegramIcon"><path
                    d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"></path></svg></span>
                <Link target={"_blank"} href={"https://github.com/mahdi1280"} className={style.svg}><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-njucem" focusable="false"
                           aria-hidden="true" viewBox="0 0 24 24" data-testid="GitHubIcon"><path
                    d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path></svg></Link>

            </div>
            <div className="col-12 col-lg-2">
                <img src={'/logo.webp'} className={style.logo} alt={"logo"}/>
            </div>
            <div className="col-12">
                <p>ساحته شده با ❤️ توسط مهدی کریمی</p>
            </div>
        </footer>
    </>
}
