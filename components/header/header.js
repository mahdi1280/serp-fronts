import style from './header.module.css';

export default function Header(){
    return <header className={"row header mt-3 p-2"}>
        <div className={"logo col-3"}>
            <img src={"/logo.webp"} alt={"لوگوی سایت ریت واچ"} className={"d-none d-lg-flex"}/>
            <img src={"/hamberger.svg"} alt={"hmbergermenu icon"} className={"d-block d-lg-none"}/>
        </div>
        <nav className={"navigation col-6 col-lg-8"}>
            <ul className={"d-none d-lg-flex"}>
                <li><a>صفحه اصلی</a></li>
                <li><a>دوره ها</a></li>
                <li><a>نظرات دانشجویان</a></li>
                <li><a>درباره ما</a></li>
            </ul>
        </nav>
        <div className="col-1 header-icon">
            <img src={"/man.svg"} alt={"man for login page"}/>
            <img src={"/shoping.svg"} alt={"shopping card icon"}/>
        </div>
    </header>;
}