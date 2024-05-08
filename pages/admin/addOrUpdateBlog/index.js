import MainDashboard from "@/components/MainDashboard";
import {useState} from "react";
import axios from "axios";
import {MY_URL} from "@/pages/http";
import {toast} from "react-toastify";
import {useRouter} from "next/router";

export default function addOrUpdateBlog() {

    const [title,setTitle] = useState('');
    const [h1Text,setH1Text] = useState('');
    const [shortDescription,setShortDescription] = useState('');
    const [description,setDescription] = useState('');
    const [image,setImage] = useState();
    const nav = useRouter();

    function add(){
        let bodyFormData = new FormData();
        bodyFormData.append('image', image);
        bodyFormData.append('h1Text', h1Text);
        bodyFormData.append('title', title);
        bodyFormData.append('shortDescription', shortDescription);
        bodyFormData.append('description', description);
        axios.post(MY_URL + "blogs", bodyFormData)
            .then(response=>response.data)
            .then(response=>{
                nav.push("/admin/blogs")
            }).catch(response=>console.log(response));
    }

    return <>
        <MainDashboard child={
            <div className={"p-5"}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">تایتل</label>
                        <input onChange={e=>setTitle(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">متن هدر</label>
                        <input onChange={e=>setH1Text(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">عکس</label>
                        <input onChange={e=>setImage(e.target.files[0])} type="file" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">توضیحات کوتاه</label>
                        <textarea onChange={e=>setShortDescription(e.target.value)}></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">توضیحات بلند</label>
                        <textarea onChange={e=>setDescription(e.target.value)}></textarea>
                    </div>
                    <button type="button" onClick={()=>add()} className="btn btn-primary">افزودن</button>
            </div>
        }/>
    </>
}
