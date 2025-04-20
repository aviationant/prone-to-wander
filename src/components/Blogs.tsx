import { Link } from 'react-router';

export interface Blog {
    id: number;
    blogTitle: string;
    blogDesc: string;
    blogContent: string;
    publishedAt: Date;
    authorName: string;
    coverImg: {
        url: string;
    }
}

export interface StrapiResponse {
    data: Blog[];
    meta: {
        [key: string]: any;
    }
}

export interface BlogsProp {
    blogs: StrapiResponse | null;
}

const Blogs = ({blogs}: BlogsProp) => {


    const ENDPOINT = "http://100.108.159.83:1337";

    return (
        <div className='w-full py-[30px] md:py-[50px]'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='grid lg:grid-cols-3 gap-8 px-4 lg:px-0 text-black'>

                    {blogs?blogs.data.map((blog: Blog) =>

                        <Link to={`/blog/${blog.id}`}>
                            <div className='bg-[#90997f] rounded-xl overflow-hidden drop-shadow-md'>
                                <img className='h-56 w-full object-cover' src={`${ENDPOINT}${blog.coverImg.url}`} />
                                <div className='p-3 md:p-5'>
                                    <h3 className='font-bold text-3xl md:my-1 text-white'>{blog.blogTitle}</h3>
                                    <p className='text-gray-100 text-xl'>{blog.blogDesc}</p>
                                </div>
                            </div>
                        </Link>

                    ):null}
                

                </div>
            </div>
        </div>
    )
}

export default Blogs