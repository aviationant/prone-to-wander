import React from 'react';
import { Navbar, Blogs, Footer } from "../components";

const Homepage = () => {
    return (
        <div className='flex flex-col min-h-screen'>

            <Navbar />
            <div className='flex-grow'>
                <Blogs />
            </div>
            <Footer />
        </div>
    )
}

export default Homepage