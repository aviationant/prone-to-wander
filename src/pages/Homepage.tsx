import { Navbar, Blogs, Footer } from "../components";
import { BlogsProp } from "../components/Blogs";

const Homepage = ({ blogs }: BlogsProp) => {

    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className='flex-grow'>
                <Blogs blogs={blogs || null} />
            </div>
            <Footer />
            <div className='fixed inset-0 bg-[#afb590] flex items-center justify-center z-50 animate-fadeOut-short pointer-events-none' />
        </div>
    )
}

export default Homepage