import React from 'react';
import { Link } from 'react-router-dom';


const blogs1 = [
    {
        'id': '1',
        'title': 'Blog 1',
        'description': 'Lorem',
        'coverImg': 'https://images.photowall.com/products/42556/summer-landscape-with-river.jpg'
    },
    {
        'id': '2',
        'title': 'Blog 2',
        'description': 'Lorem',
        'coverImg': 'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg'
    },
    {
        'id': '3',
        'title': 'Blog 3',
        'description': 'Lorem',
        'coverImg': 'https://media.greatbigphotographyworld.com/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg'
    },
]

const ENDPOINT = "http://100.108.159.83:1337";

const Blogs = ({blogs}) => {

    console.log(blogs.data[0].coverImg.url)
    return (
        <div className='w-full py-[30px] md:py-[50px]'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='grid lg:grid-cols-3 gap-8 px-4 lg:px-0 text-black'>

                    {blogs.data.map((blog) =>

                        <Link to={`/blog/${blog.id}`}>
                            <div className='bg-[#90997f] rounded-xl overflow-hidden drop-shadow-md'>
                                <img className='h-56 w-full object-cover' src={`${ENDPOINT}${blog.coverImg.url}`} />
                                <div className='p-3 md:p-5'>
                                    <h3 className='font-bold text-3xl md:my-1 text-white'>{blog.blogTitle}</h3>
                                    <p className='text-gray-100 text-xl'>{blog.blogDesc}</p>
                                </div>
                            </div>
                        </Link>

                    )}

                </div>
            </div>
        </div>
    )
}

export default Blogs