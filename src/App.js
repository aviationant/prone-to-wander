import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Homepage, BlogContentPage, AboutMe } from "./pages";
import { Route, Routes } from 'react-router';
import useFetch from './hooks/useFetch';
function App() {
    let [loading, error, blogs] = useFetch('https://api.pronetowander.me/api/blogs?populate=*');
    if (loading) {
        return (_jsx("div", { className: 'flex items-center justify-center h-screen', children: _jsx("div", { children: _jsx("p", { className: 'animate-typing overflow-hidden whitespace-nowrap border-r-4 font-qwitcher text-8xl ', children: "Loading..." }) }) }));
    }
    if (error)
        return _jsxs("p", { children: ["Error: ", error] });
    return (_jsx("div", { children: _jsxs(Routes, { children: [_jsx(Route, { path: '/', element: _jsx(Homepage, { blogs: blogs || null }) }), _jsx(Route, { path: '/blogs', element: _jsx(Homepage, { blogs: blogs || null }) }), _jsx(Route, { path: '/blog/:id', element: _jsx(BlogContentPage, { blogs: blogs || null }) }), _jsx(Route, { path: '/about', element: _jsx(AboutMe, {}) })] }) }));
}
export default App;
