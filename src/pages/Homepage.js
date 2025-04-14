import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Navbar, Blogs, Footer } from "../components";
const Homepage = ({ blogs }) => {
    return (_jsxs("div", { className: 'flex flex-col min-h-screen', children: [_jsx(Navbar, {}), _jsx("div", { className: 'flex-grow', children: _jsx(Blogs, { blogs: blogs || null }) }), _jsx(Footer, {}), _jsx("div", { className: 'fixed inset-0 bg-[#afb590] flex items-center justify-center z-50 animate-fadeOut-short pointer-events-none' })] }));
};
export default Homepage;
