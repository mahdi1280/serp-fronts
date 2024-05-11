import {changeDate, getToken, MY_URL} from "@/components/http/indexs";
import axios from "axios";
import ToastError from "@/components/ToastError/ToastError";
import {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import MainDashboard from "@/components/MainDashboard";
import {toast} from "react-toastify";

export default function Answer() {

    const [ticket, setTicket] = useState([]);
    const [title, setTitle] = useState('');

    const param = useParams();
    const notify = ()=>toast("با موفقیت اضافه شد");

    function getData() {
        axios.get(MY_URL + `tickets/${param.id}`, getToken())
            .then(response => response.data)
            .then(response => {
                setTicket(response);
            }).catch(ToastError);
    }

    function addMessage() {
        const data = {
            message: title,
            ticketId: param.id
        }
        axios.post(MY_URL + `tickets/saveMessage`, data, getToken())
            .then(response => response.data)
            .then(() => {
                setTitle("");
                getData();
                notify();
            }).catch(ToastError);
    }

    useEffect(() => {
        if (param) {
            getData();
        }
    }, [param])

    const element = ticket.map((res, index) => <tr key={index}>
        <td>{index + 1}</td>
        <td>{res?.message}</td>
        <td>{res?.status}</td>
        <td>{changeDate(res?.createdAt)}</td>
    </tr>);

    return <>
        <MainDashboard child={
            <div className={"p-5"}>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">پیام</label>
                    <input value={title} onChange={e => setTitle(e.target.value)} type="text" className="form-control"
                           id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <button type="button" onClick={() => addMessage()} className="btn btn-primary mt-2">افزودن</button>
                </div>
                <table className="table">
                    <thead className="table-light">
                    <tr>
                        <td>#</td>
                        <td>پیام</td>
                        <td>ایجاد کننده</td>
                        <td>تاریخ ایجاد</td>
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
