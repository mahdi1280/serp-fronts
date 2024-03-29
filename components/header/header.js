import style from './header.module.css';
import Link from "next/link";

export default function Header(){
    return <header className={"row header mt-3 p-2"}>
        <div className={"logo col-3"}>
            <img src={"/logo.webp"} alt={"لوگوی سایت ریت واچ"} className={"d-none d-lg-flex"}/>
            <span className={"d-block d-lg-none "+ style.hamberger}>
                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-6flbmm" focusable="false"
                     aria-hidden="true" viewBox="0 0 24 24" data-testid="MenuRoundedIcon"><path
                    d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"></path></svg>
            </span>
        </div>
        <nav className={"navigation col-5 col-lg-8"}>
            <ul className={"d-none d-lg-flex"}>
                <li><Link href={"/"}>صفحه اصلی</Link></li>
                <li><Link href={"/blogs"}>مقالات</Link></li>
                <li><a>نظرات کاربران</a></li>
                <li><a>درباره ما</a></li>
            </ul>
        </nav>
        <div className="col-3 col-lg-1 header-icon">
            <a href={"http://panel.ratewatch.ir/login"}><img src={"/man.svg"} alt={"man for login page"}/></a>
            <img src={"/shoping.svg"} alt={"shopping card icon"}/>
        </div>
    </header>;
}
