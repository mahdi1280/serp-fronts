import MainDashboard from "@/components/MainDashboard";
import axios from "axios";
import {changeDate, getToken, MY_URL} from "@/components/http/indexs";
import ToastError from "@/components/ToastError/ToastError";
import {useEffect, useState} from "react";
import Link from "next/link";
import {toast} from "react-toastify";

export default function Users() {
    const [users, setUsers] = useState([]);

    function getData() {
        axios.get(MY_URL + "applicationUsers", getToken())
            .then(response => response.data)
            .then((response) => {
                setUsers(response.content)
            }).catch(ToastError);
    }

    useEffect(() => {
        getData();
    }, [])

    const element = users.map((res, index) => <tr key={index}>
        <td>{index + 1}</td>
        <td>{res?.name}</td>
        <td>{res?.username}</td>
        <td>{res?.email}</td>
        <td>{res?.phoneNumber}</td>
        <td>{changeDate(res?.createDateTime)}</td>
        <td>
            <Link href={`/admin/users/site/${res.id}`} className={"btn btn-primary"}>مشاهده سایت های کاربران</Link>
        </td>
    </tr>);

    return <>
        <MainDashboard
            child={
                <div className={"p-5"}>
                    <h1> کاربران</h1>
                    <table className="table">
                        <thead className="table-light">
                        <tr>
                            <td>#</td>
                            <td>نام</td>
                            <td>نام کاربری</td>
                            <td>ایمیل</td>
                            <td>شماره تلفن</td>
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
