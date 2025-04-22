import { Navbar, Footer } from "../components";

const AboutMe = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className='flex-grow'>
                <div className='w-full py-[30px] md:py-[50px]'>
                    <div className='max-w-[1240px] mx-auto'>
                        <div className='grid lg:grid-cols-1 px-4 lg:px-0 text-black'>
                            <div className='rounded-b-xl bg-[#e8e0c9]'>
                                <div className='p-3 md:p-5'>
                                    <h2 className=''>About Me</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <div className='fixed inset-0 bg-[#afb590] flex items-center justify-center z-50 animate-fadeOut-short pointer-events-none' />
        </div>
    )
}

export default AboutMe