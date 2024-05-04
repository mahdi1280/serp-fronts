import style from './style.module.css';
import Head from "next/head";

export default function LoginAdmin() {
    return (<>
        <div className={style.login}>
            <div className="user">
                <input type="text" placeholder={"Username"}/>
            </div>
            <div className="pass">
                <input type="password" placeholder={"password"}/>
            </div>
            <div className="send">
                <input type="submit" value="login"/>
            </div>
        </div>
    </>);
}
