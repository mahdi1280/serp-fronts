import MainDashboard from "@/components/MainDashboard";
import {useEffect, useState} from "react";
import axios from "axios";
import {MY_URL} from "@/pages/http/indexs";
import style from "./style.module.css";
import Link from "next/link";
import 'react-confirm-alert/src/react-confirm-alert.css';
import ToastError from "@/components/ToastError/ToastError";
import {toast} from "react-toastify";

export default function Blogs() {

    const [blogs,setBlogs] = useState([]);
    const notify = () => toast("حذف شد.");

    function getData(){
        axios.get(MY_URL+"blogs")
            .then(response=>response.data)
            .then(response=>{
                setBlogs(response?.content);
            }).catch(response=>console.log(response));
    }

    useEffect(()=>{
        getData();
    },[]);


    const deleteBlog = (id) => {
        if (confirm("Sure?")) {
            axios.delete(MY_URL+`blogs/${id}`)
                .then(response=>response.data)
                .then(()=>{
                    notify();
                    getData();
                })
                .catch(ToastError);
        }
    }

    const element = blogs.map((blog,index)=>
        <tr key={index}>
            <td>{index+1}</td>
            <td><img src={MY_URL+`blogs/image/${blog.id}`} alt={"blog img description"} className={style.img}/></td>
            <td>{blog?.title}</td>
            <td>{blog?.h1Text}</td>
            <td>
                <button onClick={()=>deleteBlog(blog.id)} className={"btn btn-danger"}>حذف</button>
                <Link href={"/admin/addOrUpdateBlog/"+blog.id} className={"btn btn-primary"}>ویرایش</Link>
            </td>
        </tr>
    )

    return <>
        <MainDashboard child={
            <div className={"p-5"}>
                <h1>
                    وبلاگ ها
                </h1>
                <Link href={"/admin/addOrUpdateBlog"} className={"btn btn-success "+ style.addBtn}>افزودن وبلاگ</Link>
                <table className="table">
                    <thead className="table-light">
                        <tr>
                            <td>#</td>
                            <td>عکس</td>
                            <td>تایتل</td>
                            <td>تگ h1</td>
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
