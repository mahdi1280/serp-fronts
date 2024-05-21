
// export const MY_URL = "http://127.0.0.1:8082/";
export const MY_URL = "https://mainapi.ratewatch.ir/";
// let myToken="";

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
    localStorage.setItem("token",token);
}
export function getToken(){
    return {
        headers: {
            "Authorization": "Bearer "+localStorage.getItem("token")
        }
    }
}

export function deleteUser(){
    localStorage.clear();
}
