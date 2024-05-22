import MainDashboard from "@/components/MainDashboard";
import {useEffect, useState} from "react";
import axios from "axios";
import {changeDate, getToken, MY_URL} from "@/components/http/indexs";
import Link from "next/link";
import 'react-confirm-alert/src/react-confirm-alert.css';
import ToastError from "@/components/ToastError/ToastError";
import {toast} from "react-toastify";
import style from './style.module.css';

export default function Blogs() {

    const [notification,setNotification] = useState([]);
    const notify = () => toast("حذف شد.");

    function getData(){
        axios.get(MY_URL+"notification", getToken())
            .then(response=>response.data)
            .then(response=>{
                setNotification(response?.content);
            }).catch(ToastError);
    }

    useEffect(()=>{
        getData();
    },[]);


    const deleteBlog = (id) => {
        if (confirm("Sure?")) {
            axios.delete(MY_URL+`notification/${id}`, getToken())
                .then(response=>response.data)
                .then(()=>{
                    notify();
                    getData();
                })
                .catch(ToastError);
        }
    }

    const element = notification.map((blog,index)=>
        <tr key={index}>
            <td>{index+1}</td>
            <td>{blog?.title}</td>
            <td>{blog?.message}</td>
            <td>{changeDate(blog?.creationDate)}</td>
            <td>{changeDate(blog?.disableDate)}</td>
            <td>
                <button onClick={()=>deleteBlog(blog.id)} className={"btn btn-danger"}>حذف</button>
            </td>
        </tr>
    )

    return <>
        <MainDashboard child={
            <div className={"p-5"}>
                <h1>
                   نوتیف ها
                </h1>
                <Link href={"/admin/notification/save"} className={"btn btn-success "+ style.addBtn}>افزودن </Link>
                <table className="table">
                    <thead className="table-light">
                    <tr>
                        <td>#</td>
                        <td>عنوان</td>
                        <td>متن</td>
                        <td>زمان ایجاد</td>
                        <td>زمان اتمام</td>
                        <td>...</td>
                    </tr>
                    </thead>
                    <tbody>
                    {element}
                    </tbody>
                </table>
            </div>
        }/>
    </>
}
