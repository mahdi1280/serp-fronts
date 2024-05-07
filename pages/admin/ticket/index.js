import MainDashboard from "@/components/MainDashboard";
import {useEffect, useState} from "react";
import axios from "axios";
import {MY_URL} from "@/pages/http";
import style from "./style.module.css";
import Link from "next/link";

export default function Ticket() {

    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
        axios.get(MY_URL+"blogs")
            .then(response=>response.data)
            .then(response=>{
                setBlogs(response?.content);
            }).catch(response=>console.log(response));
    },[]);


    const element = blogs.map((blog,index)=>
        <tr key={index}>
            <td>{index+1}</td>
            <td><img src={MY_URL+`blogs/image/${blog.id}`} alt={"blog img description"} className={style.img}/></td>
            <td>{blog?.h1Text}</td>
            <td>
                <Link href={"/"} className={"btn btn-danger"}>حذف</Link>
                <Link href={"/"} className={"btn btn-primary"}>ویرایش</Link>
            </td>
        </tr>
    )

    return <>
        <MainDashboard child={
            <div className={"p-5"}>
                <h1>
                    وبلاگ ها
                </h1>
                <button className={"btn btn-success "+ style.addBtn}>افزودن وبلاگ</button>
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
                    {element}
                    </tbody>
                </table>
            </div>
        }/>
    </>
}
