import MainDashboard from "@/components/MainDashboard";
import axios from "axios";
import {changeDate, getToken, MY_URL} from "@/pages/http";
import ToastError from "@/components/ToastError/ToastError";
import {useEffect, useState} from "react";
import style from "@/pages/admin/blogs/style.module.css";
import Link from "next/link";

export default function Ticket() {
    const [ticket,setTicket] = useState([]);
    function getData(){
        console.log(getToken());
         axios.get(MY_URL+"tickets",getToken())
             .then(response=>response.data)
             .then(response=>{
                 setTicket(response);
             }).catch(ToastError);
    }

    useEffect(()=>{
        getData();
    },[])

    const element = ticket.map((res,index)=><tr key={index}>
        <td>{index+1}</td>
        <td>{res?.title}</td>
        <td>{res?.ticketStatus}</td>
        <td>{changeDate(res?.createdAt)}</td>
        <td>
            <button  className={"btn btn-danger"}>حذف</button>
            <Link href={"/"} className={"btn btn-primary"}>جواب دادن </Link>
        </td>
    </tr>);

    return <>
        <MainDashboard
            child={
                <table className="table">
                    <thead className="table-light">
                    <tr>
                        <td>#</td>
                        <td>عنوان</td>
                        <td>وضعیت</td>
                        <td>تاریخ ایجاد</td>
                        <td>...</td>
                    </tr>
                    </thead>
                    <tbody>
                    {element}
                    </tbody>
                </table>
            }
        />
    </>
}
