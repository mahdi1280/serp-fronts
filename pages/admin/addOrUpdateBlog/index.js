import MainDashboard from "@/components/MainDashboard";
import {useState} from "react";
import axios from "axios";
import {MY_URL} from "@/components/http/indexs";
import {useRouter} from "next/router";
import ToastError from "@/components/ToastError/ToastError";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function addOrUpdateBlog() {

    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [h1Text, setH1Text] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState();
    const nav = useRouter();

    function add() {
        let bodyFormData = new FormData();
        if (image) {
            bodyFormData.append('image', image);
        }
        bodyFormData.append('h1Text', h1Text);
        bodyFormData.append('url', url);
        bodyFormData.append('title', title);
        bodyFormData.append('shortDescription', shortDescription);
        bodyFormData.append('description', description);
        axios.post(MY_URL + "blogs", bodyFormData)
            .then(response => response.data)
            .then(() => {
                nav.push("/admin/blogs")
            }).catch(ToastError);
    }

    return <>
        <MainDashboard child={
            <div className={"p-5"}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">تایتل</label>
                    <input onChange={e => setTitle(e.target.value)} type="text" className="form-control"
                           id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">آدرس</label>
                    <input onChange={e => setUrl(e.target.value)} type="text" className="form-control"
                           id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">متن هدر</label>
                    <input onChange={e => setH1Text(e.target.value)} type="text" className="form-control"
                           id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">عکس</label>
                    <input onChange={e => setImage(e.target.files[0])} type="file" className="form-control"
                           id="exampleInputPassword1"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">توضیحات کوتاه</label>
                    <CKEditor
                        editor={ClassicEditor}
                        data={shortDescription}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            setShortDescription(data);
                        }}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">توضیحات بلند</label>
                    <CKEditor
                        editor={ClassicEditor}
                        data={description}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            setDescription(data);
                        }}
                    />
                </div>
                <button type="button" onClick={() => add()} className="btn btn-primary">افزودن</button>
            </div>
        }/>
    </>
}
