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
                                    <hr className='mt-4 mb-4 mr-[calc(33%)] h-px' />
                                    <p>Welcome to my blog! I'm a <span className="highlight">Christian</span> and a proud wife to my best friend, living in the charming town of <span className="highlight">Prosser, Washington</span>.</p>
                                    <p>My heart beats for <span className="highlight">cooking</span> and <span className="highlight">sourdough baking</span>, where I find joy in creating delicious meals and sharing them with loved ones. When I'm not in the kitchen, you’ll likely find me <span className="highlight">hiking</span> or <span className="highlight">camping</span>, soaking in the beauty of the Pacific Northwest.</p>
                                    <p>By trade I'm and EMT, I’m a <span className="highlight">bartender</span> at heart, with a knack for making people’s day a little brighter. After years as a dedicated first responder, I’m now navigating a career transition, searching for a new path that fuels my passion for serving others.</p>
                                    <p>Thank you for stopping by my blog! Here, I share my adventures, recipes, and thoughts on life as I embrace this season of growth and discovery.</p>
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