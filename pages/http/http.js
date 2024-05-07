
export const MY_URL = "http://127.0.0.1:8082/";
let myToken="";

export async function get(url){
    return await fetch(url);
}

export function changeDate(date){
    return new Date(date).toLocaleDateString('fa-IR', {
        year: 'numeric',
        day: '2-digit',
        month: '2-digit',
    })
}

export function setToken(token){
    myToken = token;
}
export function getToken(){
    return myToken;
}
