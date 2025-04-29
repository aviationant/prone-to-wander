import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router';
const Blogs = ({ blogs }) => {
    return (_jsx("div", { id: 'wrapper', className: 'w-full py-[30px] md:py-[50px]', children: _jsx("div", { id: 'wrapper-child', className: 'max-w-[1240px] mx-auto', children: _jsx("div", { id: 'wrapper-grid', className: 'grid lg:grid-cols-3 gap-8 px-4 lg:px-0 text-black', children: blogs ? blogs.data.map((blog) => _jsx(Link, { to: `/blog/${blog.id}`, children: _jsx("div", { id: 'blog-tile-bg', className: 'bg-[#90997f] rounded-xl overflow-hidden drop-shadow-md', children: _jsxs("div", { id: 'text-box', className: 'p-3 md:p-5', children: [_jsx("h3", { id: 'blog-title', className: 'font-bold text-3xl md:my-1 text-white', children: blog.blogTitle }), _jsx("p", { id: 'blog-desc', className: 'text-gray-100 text-xl', children: blog.blogDesc })] }) }) }, blog.id)) : null }) }) }));
};
export default Blogs;
