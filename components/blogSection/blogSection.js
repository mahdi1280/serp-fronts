import style from './style.module.css';
import Link from "next/link";
import {changeDate, MY_URL} from "@/components/http/indexs";

export default function BlogSection({blogs}) {
    const elementBlog = blogs.map(blog => <div className={"col-12 col-lg-3 mt-2"}>
        <div className={style.readingCart}>
            <Link href={`/blog-page/${blog?.url}`} key={blog.id}>
                <img src={MY_URL+`blogs/image/${blog.id}`} alt={"blog img description"} className={style.img}/>
                <h3 className={style.header}>{blog.h1Text}</h3>
                <p className={style.details}>
                    {blog?.shortDescription}
                </p>
                <div className={style.sectionTime}>
                    <div className={style.time}>
                        <img src={"/time.svg"} alt={"time icon"}/>
                        <p>{changeDate(blog.createdAt)}</p>
                    </div>
                    <span className={style.readTime}>زمان تقریبی 2 دقیقه</span>
                </div>
                <div className={style.btnSection}>
                    <button href={`/blog-page/${blog.id}`} className={style.btn}>مشاهده مقاله</button>
                </div>
            </Link>
        </div>
    </div>)


    return <>
        <section className={"row mt-4 "}>
            {elementBlog}
        </section>
    </>
}
