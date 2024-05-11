import MainDashboard from "@/components/MainDashboard";
import axios from "axios";
import {changeDate, getToken, MY_URL} from "@/pages/http/indexs";
import ToastError from "@/components/ToastError/ToastError";
import {useEffect, useState} from "react";
import Link from "next/link";

export default function Error() {

    const [errors, setErrors] = useState([]);

    function getData() {
        axios.get(MY_URL + "errors", getToken())
            .then(response => response.data)
            .then(response => {
                setErrors(response.content);
            }).catch(ToastError);
    }

    useEffect(() => {
        getData();
    }, [])

    const element = errors.map((error, index) => <tr key={index}>
        <td>{index + 1}</td>
        <td>{error.id}</td>
        <td>{error?.username}</td>
        <td>{changeDate(error?.createdAt)}</td>
        <td>
            <Link href={"/admin/error/" + error.id} className={"btn btn-warning"}>مشاهده خطا</Link>
        </td>
    </tr>)

    return <>
        <MainDashboard
            child={
                <div className={"p-5"}>
                    <h1>خطا ها</h1>
                    <table className="table">
                        <thead className="table-light">
                        <tr>
                            <td>#</td>
                            <td>کد رهگیری</td>
                            <td>نام کاربری</td>
                            <td>تاریخ ایجاد</td>
                            <td>...</td>
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
