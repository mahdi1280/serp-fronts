import style from './style.module.css';
import axios from "axios";
import {MY_URL, setToken} from "@/pages/http";
import {useState} from "react";
import {useRouter} from "next/router";
export default function LoginAdmin() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const nav = useRouter();

    function login() {
        axios.post(MY_URL + 'api/v1/auth/authenticate', {
            email: email,
            password: password
        }).then(response => response.data)
            .then(response => {
                setToken(response.access_token);
                nav.push("/admin/dashboard");
            })
            .catch(response => console.log(response));
    }

    return (<>

        <div className={style.login}>

            <div className="user">
                <input className={"form-control"} type="text" placeholder={"Username"} onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="pass">
                <input className={"form-control"} type="password" placeholder={"password"} onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className="send">
                <input onClick={login} type="submit" value="login" className={"btn btn-primary"}/>
            </div>
        </div>
    </>);
}
