import style from "@/components/MainDashboard/style.module.css";

export default function Sidebar(){
    return <>
        <div className="col-2 d-none d-lg-flex">
            <div className={style.sidebar}>
                <ul>
                    <li>داشبود</li>
                    <li>وبلاگ ها</li>
                    <li>تیکت ها</li>
                    <li>نوتیفیکیشن</li>
                </ul>
            </div>
        </div>;
    </>
}
