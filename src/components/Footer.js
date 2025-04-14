import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//import { Link } from 'react-router-dom';
const Footer = () => {
    return (_jsx("div", { className: ' w-full bg-[#394931] text-gray-200 rounded-t-2xl', children: _jsx("div", { className: 'flex pt-4 w-full md:max-w-[1240px] m-auto justify-between', children: _jsxs("div", { className: 'ml-4 md:ml-0 mr-4 md:mr-0 pb-8 md:pt-2', children: [_jsx("p", { className: 'font-bold uppercase', children: "Subscribe to our newsletter." }), _jsx("p", { className: 'py-4 mr-8', children: "The latest news, articles, and updates sent to your inbox weekly." }), _jsxs("form", { className: 'flex flex-col sm:flex-row', children: [_jsx("input", { className: 'w-full p-2 mr-4 text-black bg-white rounded-md', type: 'email', placeholder: 'Enter email address...' }), _jsx("button", { className: 'w-full md:w-40 p-2 mt-2 md:mt-0 mr-4 bg-[#39804a] text-white hover:bg-white hover:text-black', children: "Submit" })] })] }) }) }));
};
export default Footer;
