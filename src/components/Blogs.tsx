import { Link } from 'react-router';

export interface Blog {
    id: number;
    blogTitle: string;
    blogDesc: string;
    blogContent: string;
    publishedAt: Date;
    authorName: string;
    coverImg: { url: string }[];
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

const Blogs = ({ blogs }: BlogsProp) => {

    return (
        <div id='wrapper' className='w-full py-[30px] md:py-[50px]'>
            <div id='wrapper-child' className='max-w-[1240px] mx-auto'>
                <div id='wrapper-grid' className='grid lg:grid-cols-3 gap-8 px-4 lg:px-0 text-black'>
                    {blogs ? blogs.data.map((blog: Blog) =>
                        <Link key={blog.id} to={`/blog/${blog.id}`}>
                            <div id='blog-tile-bg' className='bg-[#90997f] rounded-xl overflow-hidden drop-shadow-md'>
                                <img id='blog-img' className='h-56 w-full object-cover' src={blog.coverImg[0].url} />
                                <div id='text-box' className='p-3 md:p-5'>
                                    <h3 id='blog-title' className='font-bold text-3xl md:my-1 text-white'>{blog.blogTitle}</h3>
                                    <p id='blog-desc' className='text-gray-100 text-xl'>{blog.blogDesc}</p>
                                </div>
                            </div>
                        </Link>
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default Blogs