import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Navbar, Footer } from "../components";
import useFetch from "../hooks/useFetch";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
const AboutMe = () => {
    let [loading, error, aboutData] = useFetch('https://api.pronetowander.me/api/abouts?populate=*');
    if (loading) {
        return (_jsx("div", { className: 'flex items-center justify-center h-screen', children: _jsx("div", { children: _jsx("p", { className: 'animate-typing overflow-hidden whitespace-nowrap border-r-4 font-qwitcher text-8xl ', children: "Loading..." }) }) }));
    }
    if (error)
        return _jsxs("p", { children: ["Error: ", error] });
    if (aboutData) {
        const content = aboutData.data[0].aboutContent;
        return (_jsxs("div", { className: 'flex flex-col min-h-screen', children: [_jsx(Navbar, {}), _jsx("div", { className: 'flex-grow', children: _jsx("div", { className: 'w-full py-[30px] md:py-[50px]', children: _jsx("div", { className: 'max-w-[1240px] mx-auto', children: _jsx("div", { className: 'grid lg:grid-cols-1 px-4 lg:px-0 text-black', children: _jsx("div", { className: 'rounded-b-xl bg-[#e8e0c9]', children: _jsxs("div", { className: 'p-3 md:p-5', children: [_jsx("h2", { className: '', children: "About Me" }), _jsx("hr", { className: 'mt-4 mb-4 mr-[calc(33%)] h-px' }), _jsx(BlocksRenderer, { content: content })] }) }) }) }) }) }), _jsx(Footer, {}), _jsx("div", { className: 'fixed inset-0 bg-[#afb590] flex items-center justify-center z-50 animate-fadeOut-short pointer-events-none' })] }));
    }
    ;
};
export default AboutMe;
