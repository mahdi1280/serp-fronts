import style from './header.module.css';
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import Image from "next/image";
import Logo from "@/public/logo.webp"
import Man from "@/public/man.svg"
import Shopping from "@/public//shoping.svg"

export default function Header(){
    function removeSkeletonIcon() {
        document.getElementById("removeSkeletonIcon").style.display="none";
    }

    return <header className={"row header mt-3 p-2"}>
        <div className={"logo col-3"}>
            <div id={"removeSkeletonIcon"} className={"position-ab"}>
                <Skeleton  width={80} height={80} borderRadius={50}/>
            </div>
            <Image
                src={Logo}
                alt={"لوگوی سایت ریت واچ"}
                className={"d-none d-lg-flex"}
                onLoad={removeSkeletonIcon}
            />
            <span className={"d-block d-lg-none "+ style.hamberger}>
                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-6flbmm" focusable="false"
                     aria-hidden="true" viewBox="0 0 24 24" data-testid="MenuRoundedIcon"><path
                    d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"></path></svg>
            </span>
        </div>
        <nav className={"navigation col-5 col-lg-8"}>
            <ul className={"d-none d-lg-flex "+ style.nav}>
                <li><Link href={"/"}>صفحه اصلی</Link></li>
                <li><Link href={"/blogs"}>مقالات</Link></li>
                <li><a>نظرات کاربران</a></li>
                <li><Link href={"/about-us"}>درباره ما</Link></li>
            </ul>
        </nav>
        <div className="col-3 col-lg-1 header-icon">
            <a href={"http://panel.ratewatch.ir/login"}>
                <div className={"position-ab"} id={"iconMan-load"}>
                    <Skeleton width={48} height={48} />
                </div>
                <Image
                    src={Man}
                    alt={"صفحه لاگین"} width={48} height={48}
                    onLoad={()=>document.getElementById("iconMan-load").style.display="none"}
                />
            </a>
            <div>
                <div className={"position-ab"} id={"shopping-load"}>
                    <Skeleton width={48} height={48} />
                </div>
                <Image
                    src={Shopping}
                    alt={"خرید اکانت"}
                    width={48} height={48}
                    onLoad={()=>document.getElementById("shopping-load").style.display="none"}
                />
            </div>
        </div>
    </header>;
}
