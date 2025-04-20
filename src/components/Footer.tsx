//import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className=' w-full bg-[#394931] text-gray-200 rounded-t-2xl'>
            <div className='flex pt-4 w-full md:max-w-[1240px] m-auto justify-between'>
                <div className='ml-4 md:ml-0 mr-4 md:mr-0 pb-8 md:pt-2'>
                    <p className='font-bold uppercase'>Subscribe to our newsletter.</p>
                    <p className='py-4 mr-8'>The latest news, articles, and updates sent to your inbox weekly.</p>
                    <form className='flex flex-col sm:flex-row'>
                        <input className='w-full p-2 mr-4 text-black bg-white rounded-md' type='email' placeholder='Enter email address...'></input>
                        <button className='w-full md:w-40 p-2 mt-2 md:mt-0 mr-4 bg-[#39804a] text-white hover:bg-white hover:text-black'>Submit</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Footer