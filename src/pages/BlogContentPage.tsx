import { Navbar, Footer, BlogContent } from "../components";
import { BlogsProp } from "../components/Blogs"

const BlogContentPage = ({ blogs }: BlogsProp) => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className='flex-grow'>
                <BlogContent blogs={blogs || null} />
            </div>
            <Footer />
            <div className='fixed inset-0 bg-[#afb590] flex items-center justify-center z-50 animate-fadeOut-short pointer-events-none' />
        </div>
    )
}

export default BlogContentPage