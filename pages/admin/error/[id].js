import {useParams} from "next/navigation";
import {useEffect, useState} from "react";
import axios from "axios";
import {getToken, MY_URL} from "@/pages/http/indexs";
import ToastError from "@/components/ToastError/ToastError";
import MainDashboard from "@/components/MainDashboard";
import style from "./style.module.css";

export default function id() {
    const param = useParams();
    const [error, setError] = useState([]);

    const getData = () => {
        axios.get(MY_URL + `errors/${param.id}`, getToken())
            .then(response => response.data)
            .then(response => {
                setError(<div className={style.error}>
                    <p>{response.error}</p>
                </div>);

            }).catch(ToastError);
    };

    useEffect(() => {
        if (param) {
            getData();
        }
    }, [param])


    return <MainDashboard child={
        <>
            {error}
        </>
    }/>
}
