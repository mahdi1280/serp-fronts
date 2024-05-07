import MainDashboard from "@/components/MainDashboard";
import {useEffect} from "react";

export default function Ticket() {

    useEffect(()=>{

    },[]);


    return <>
        <MainDashboard child={
            <div className={"p-5"}>
                <h1>
                    وبلاگ ها
                </h1>
                <table className="table">
                    <thead className="table-light">
                        <tr>
                            <td>#</td>
                            <td>عکس</td>
                            <td>تایتل</td>
                            <td>...</td>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>test</td>
                        <td>test</td>
                        <td>
                            <button className={"btn btn-danger"}>حذف</button>
                            <button className={"btn btn-primary"}>ویرایش</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        }/>
    </>
}
