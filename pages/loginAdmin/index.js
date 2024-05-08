import style from './style.module.css';
import axios from "axios";
import {MY_URL, setToken} from "@/pages/http";
import {useState} from "react";
export default function LoginAdmin() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const notify = () => toast("Wow so easy!");
    function login() {
        axios.post(MY_URL + 'api/v1/auth/authenticate', {
            email: email,
            password: password
        }).then(response => response.data)
            .then(response => {
                setToken(response.access_token);
            })
            .catch(response => console.log(response));
    }

    return (<>

        <div className={style.login}>

            <div className="user">
                <input type="text" placeholder={"Username"} onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="pass">
                <input type="password" placeholder={"password"} onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className="send">
                <input onClick={login} type="submit" value="login"/>
            </div>
        </div>
    </>);
}
