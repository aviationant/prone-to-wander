import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router';
const Blogs = ({ blogs }) => {
    const ENDPOINT = "http://100.108.159.83:1337";
    return (_jsx("div", { className: 'w-full py-[30px] md:py-[50px]', children: _jsx("div", { className: 'max-w-[1240px] mx-auto', children: _jsx("div", { className: 'grid lg:grid-cols-3 gap-8 px-4 lg:px-0 text-black', children: blogs ? blogs.data.map((blog) => _jsx(Link, { to: `/blog/${blog.id}`, children: _jsxs("div", { className: 'bg-[#90997f] rounded-xl overflow-hidden drop-shadow-md', children: [_jsx("img", { className: 'h-56 w-full object-cover', src: `${ENDPOINT}${blog.coverImg.url}` }), _jsxs("div", { className: 'p-3 md:p-5', children: [_jsx("h3", { className: 'font-bold text-3xl md:my-1 text-white', children: blog.blogTitle }), _jsx("p", { className: 'text-gray-100 text-xl', children: blog.blogDesc })] })] }) })) : null }) }) }));
};
export default Blogs;
