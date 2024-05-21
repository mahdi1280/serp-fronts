import MainDashboard from "@/components/MainDashboard";
import axios from "axios";
import {changeDate, getToken, MY_URL} from "@/components/http/indexs";
import ToastError from "@/components/ToastError/ToastError";
import {useEffect, useState} from "react";
import Link from "next/link";
import {toast} from "react-toastify";
import {useParams} from "next/navigation";

export default function Site() {
    const [site, setSite] = useState([]);
    const param = useParams();

    function getData() {
        axios.get(MY_URL + "applicationUsers/url/"+param.id, getToken())
            .then(response => response.data)
            .then((response) => {
                setSite(response)
            }).catch(ToastError);
    }

    useEffect(() => {
        if(param)
            getData();
    }, [param])

    const element = site.map((res, index) => <tr key={index}>
        <td>{index + 1}</td>
        <td>{res?.title}</td>
        <td>{res?.deleted}</td>
        <td>{changeDate(res?.createdAt)}</td>
    </tr>);

    return <>
        <MainDashboard
            child={
                <div className={"p-5"}>
                    <h1> سایت ها</h1>
                    <table className="table">
                        <thead className="table-light">
                        <tr>
                            <td>#</td>
                            <td>عنوان</td>
                            <td>وضعیت حذف</td>
                            <td>تاریخ ایجاد</td>
                        </tr>
                        </thead>
                        <tbody>
                        {element}
                        </tbody>
                    </table>
                </div>
            }
        />
    </>
}
