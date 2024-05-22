import MainDashboard from "@/components/MainDashboard";
import {useEffect, useState} from "react";
import axios from "axios";
import {MY_URL} from "@/components/http/indexs";
import {useRouter} from "next/router";
import ToastError from "@/components/ToastError/ToastError";
import {useParams} from "next/navigation";
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function addOrUpdateBlog() {

    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [h1Text, setH1Text] = useState('');
    const [description, setDescription] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [image, setImage] = useState();
    const nav = useRouter();
    const params = useParams();



    function update() {
        let bodyFormData = new FormData();
        if (image) {
            bodyFormData.append('image', image);
        } else {
            // bodyFormData.append('image', "");
        }
        bodyFormData.append('h1Text', h1Text);
        bodyFormData.append('id', params.id);
        bodyFormData.append('url', url);
        bodyFormData.append('title', title);
        bodyFormData.append('shortDescription', shortDescription);
        bodyFormData.append('description', description);
        axios.put(MY_URL + "blogs", bodyFormData)
            .then(response => response.data)
            .then(() => {
                nav.push("/admin/blogs")
            }).catch(ToastError);
    }

    useEffect(() => {
        if (params) {
            axios.get(MY_URL + `blogs/${params.id}`)
                .then(response => response.data)
                .then((response) => {
                    setTitle(response.title);
                    setUrl(response.url);
                    setH1Text(response.h1Text);
                    setShortDescription(response.shortDescription);
                    setDescription(response.description);
                }).catch(ToastError);
        }
    }, [params])


    return <>

        {/*<MainDashboard child={*/}
        {/*    <div className={"p-5"}>*/}
        {/*        <div className="mb-3">*/}
        {/*            <label htmlFor="exampleInputEmail1" className="form-label">تایتل</label>*/}
        {/*            <input value={title} onChange={e => setTitle(e.target.value)} type="text" className="form-control"*/}
        {/*                   id="exampleInputEmail1" aria-describedby="emailHelp"/>*/}
        {/*        </div>*/}
        {/*        <div className="mb-3">*/}
        {/*            <label htmlFor="exampleInputEmail1" className="form-label">آدرس</label>*/}
        {/*            <input value={url} onChange={e => setUrl(e.target.value)} type="text" className="form-control"*/}
        {/*                   id="exampleInputEmail1" aria-describedby="emailHelp"/>*/}
        {/*        </div>*/}
        {/*        <div className="mb-3">*/}
        {/*            <label htmlFor="exampleInputEmail1" className="form-label">متن هدر</label>*/}
        {/*            <input value={h1Text} onChange={e => setH1Text(e.target.value)} type="text" className="form-control"*/}
        {/*                   id="exampleInputEmail1" aria-describedby="emailHelp"/>*/}
        {/*        </div>*/}
        {/*        <div className="mb-3">*/}
        {/*            <label htmlFor="exampleInputPassword1" className="form-label">عکس</label>*/}
        {/*            <input onChange={e => setImage(e.target.files[0])} type="file" className="form-control"*/}
        {/*                   id="exampleInputPassword1"/>*/}
        {/*        </div>*/}
        {/*        <div className="mb-3">*/}
        {/*            <label htmlFor="exampleInputPassword1" className="form-label">توضیحات کوتاه</label>*/}
        {/*            <CKEditor*/}
        {/*                editor={ClassicEditor}*/}
        {/*                data={shortDescription}*/}
        {/*                onChange={(event, editor) => {*/}
        {/*                    const data = editor.getData();*/}
        {/*                    setShortDescription(data);*/}
        {/*                }}*/}
        {/*            />*/}
        {/*        </div>*/}
        {/*        <div className="mb-3">*/}
        {/*            <label htmlFor="exampleInputPassword1" className="form-label">توضیحات بلند</label>*/}
        {/*            <CKEditor*/}
        {/*                editor={ClassicEditor}*/}
        {/*                data={description}*/}
        {/*                onChange={(event, editor) => {*/}
        {/*                    const data = editor.getData();*/}
        {/*                    setDescription(data);*/}
        {/*                }}*/}
        {/*            />*/}
        {/*        </div>*/}


        {/*        <button type="button" onClick={() => update()} className="btn btn-primary">ویرایش</button>*/}
        {/*    </div>*/}
        {/*}/>*/}
    </>
}
