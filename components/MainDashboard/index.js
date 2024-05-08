import style from "@/components/MainDashboard/style.module.css";
import Sidebar from "@/components/Sidebar/sidebar";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

export default function MainDashboard({child}){
    return <>
        <div className={style.body}>
            <ToastContainer />
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
