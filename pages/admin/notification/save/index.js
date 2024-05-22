import MainDashboard from "@/components/MainDashboard";
import 'react-confirm-alert/src/react-confirm-alert.css';
import {useState} from "react";
import axios from "axios";
import {getToken, MY_URL} from "@/components/http/http";
import ToastError from "@/components/ToastError/ToastError";
import {useRouter} from "next/router";

export default function Save() {

    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [disableDate, setDisableDate] = useState('');
    const nav = useRouter();
    function addNotification() {
        const data = {
            title: title,
            message: message,
            disableDate: disableDate
        }
        axios.post(MY_URL+ "notification" , data , getToken())
            .then(response=>response.data)
            .then(()=>{
                nav.push("/admin/notification")
            })
            .catch(ToastError);
    }

    return <>
        <MainDashboard child={
            <div className={"p-5"}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">تایتل</label>
                    <input value={title} onChange={e => setTitle(e.target.value)} type="text" className="form-control"
                           id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">پیام</label>
                    <input value={message} onChange={e => setMessage(e.target.value)} type="text"
                           className="form-control"
                           id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">تاریخ پایان</label>
                    <input value={disableDate} onChange={e => setDisableDate(e.target.value)} type="date"
                           className="form-control"
                           id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <button type="button" onClick={addNotification} className="btn btn-primary">افزودن</button>
            </div>
        }/>
    </>
}
