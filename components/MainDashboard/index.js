import style from "@/components/MainDashboard/style.module.css";
import Sidebar from "@/components/Sidebar/sidebar";

export default function MainDashboard({child}){
    return <>
        <div className={style.body}>
            <div className={""}>
                <div className="d-flex">
                    <Sidebar/>
                    <di className="col-9">
                        {child}
                    </di>
                </div>
            </div>
        </div>
    </>
}
