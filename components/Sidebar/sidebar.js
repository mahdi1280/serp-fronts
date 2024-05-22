import style from "@/components/MainDashboard/style.module.css";
import Link from "next/link";

export default function Sidebar(){
    return <>
        <div className="col-2 d-none d-lg-flex">
            <div className={style.sidebar}>
                <ul>
                    <li>داشبود</li>
                    <li><Link href={"/admin/blogs"}>وبلاگ ها</Link></li>
                    <li> <Link href={"/admin/ticket"}>تیکت ها</Link></li>
                    <li><Link href={"/admin/notification"}>نوتیفیکیشن</Link></li>
                    <li><Link href={"/admin/error"}>خطا ها</Link></li>
                    <li><Link href={"/admin/users"}>کاربران</Link></li>
                    <li><Link href={"/"}>دیدن سایت</Link></li>
                </ul>
            </div>
        </div>;
    </>
}
