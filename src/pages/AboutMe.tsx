import { Navbar, Footer } from "../components";
import useFetch from "../hooks/useFetch";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { RootNode } from '../components/BlocksRenderer/BlocksRenderer';
import { StrapiResponse } from "../components/Blogs";

export interface AboutData {
    id: number;
    aboutTitle: string;
    aboutContent: string;
    coverImg: { url: string }[];
}

const AboutMe = () => {

    let [loading, error, aboutData]: [boolean, string | null, StrapiResponse<AboutData> | null] = useFetch(
        'https://api.pronetowander.me/api/abouts?populate=*'
    );

    if (loading) {
        return (
            <div className='flex items-center justify-center h-screen'>
                <div>
                    <p className='animate-typing overflow-hidden whitespace-nowrap border-r-4 font-qwitcher text-8xl '>Loading...</p>
                </div>
            </div>
        );
    }

    if (error) return <p>Error: {error}</p>;

    if (aboutData) {
        const content = aboutData.data[0].aboutContent as unknown as RootNode[];

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
                                        <BlocksRenderer content={content} />
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
    };
}

export default AboutMe