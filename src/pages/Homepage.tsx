import React from 'react';
import { Navbar, Blogs, Footer } from "../components";

const Homepage = ({blogs}) => {

    // console.log(blogs)
    return (
        <div className='flex flex-col min-h-screen'>

            <Navbar />
            <div className='flex-grow'>
                <Blogs blogs={blogs?blogs:""} />
            </div>
            <Footer />
        </div>
    )
}

export default Homepage