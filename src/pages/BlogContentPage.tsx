import React from 'react';
import { Navbar, Blogs, Footer, BlogContent } from "../components";

const BlogContentPage = () => {
    return (
        <div>
            <Navbar />
            <div className='flex-grow'>
                <BlogContent />
            </div>
            <Footer />
        </div>
    )
}

export default BlogContentPage