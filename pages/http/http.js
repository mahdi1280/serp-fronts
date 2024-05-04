
export const MY_URL = "http://127.0.0.1:8082/";

export async function get(url){
    return await fetch(url);
}
