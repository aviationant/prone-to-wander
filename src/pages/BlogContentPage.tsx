import React from 'react';
import { Navbar, Blogs, Footer, BlogContent } from "../components";


const BlogContentPage = ({blogs}) => {
    return (
        <div>
            <Navbar />
            <div className='flex-grow'>
                <BlogContent blogs={blogs?blogs:""} />
            </div>
            <Footer />
        </div>
    )
}

export default BlogContentPage