import {toast} from "react-toastify";

export default function ToastError(response){
    return response.response.data.map((error)=>toast(error.message? error.message : error.defaultMessage, {
            style: {
                border: '1px solid red',
                padding: '16px',
                color:  "red",
            },
        }))
}
