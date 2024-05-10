import MainDashboard from "@/components/MainDashboard";
import axios from "axios";
import {changeDate, getToken, MY_URL} from "@/pages/http";
import ToastError from "@/components/ToastError/ToastError";
import {useEffect, useState} from "react";
import Link from "next/link";
import {toast} from "react-toastify";

export default function Ticket() {
    const [ticket, setTicket] = useState([]);
    const notify = () => toast("با موفقیت حذف شد");

    function getData() {
        axios.get(MY_URL + "tickets", getToken())
            .then(response => response.data)
            .then(response => {
                setTicket(response.content);
            }).catch(ToastError);
    }

    useEffect(() => {
        getData();
    }, [])

    function closeTicket(id) {
        axios.delete(MY_URL + "tickets/close/" + id, getToken())
            .then(response => response.data)
            .then(() => {
                getData();
                notify()
            }).catch(ToastError);
    }

    const element = ticket.map((res, index) => <tr key={index}>
        <td>{index + 1}</td>
        <td>{res?.title}</td>
        <td>{res?.ticketStatus}</td>
        <td>{changeDate(res?.createdAt)}</td>
        <td>
            <button onClick={() => closeTicket(res.ticketId)} className={"btn btn-danger"}>بستن تیکت</button>
            <Link href={`/admin/ticket/answer/${res.ticketId}`} className={"btn btn-primary"}>جواب دادن </Link>
        </td>
    </tr>);

    return <>
        <MainDashboard
            child={
                <div className={"p-5"}>
                    <h1>تیکت ها</h1>
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
                </div>
            }
        />
    </>
}
