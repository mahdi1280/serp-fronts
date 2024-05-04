
export const MY_URL = "http://127.0.0.1:8082/";

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

