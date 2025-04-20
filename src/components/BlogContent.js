import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from 'react-router';
const BlogContent = ({ blogs }) => {
    let { id } = useParams();
    const ENDPOINT = "http://100.108.159.83:1337";
    let blog;
    if (!blogs)
        return _jsx("div", { children: "Blogs not found." });
    if (!id)
        return _jsx("div", { children: "Id not found;" });
    try {
        blog = (blogs.data.find(blog => blog.id.toString() === id));
    }
    catch {
        return _jsx("div", { children: "Could not find blog ID." });
    }
    if (!blog)
        return _jsx("div", { className: 'text-black', children: "Blog data not found." });
    function dateToPST(dateUTC) {
        const dateRegex = /^([a-zA-Z]+,\s[0-9]{1,2}\s[a-zA-Z]+\s[0-9]{4})/;
        var date = new Date(dateUTC);
        var dateText = dateRegex.exec(date.toUTCString());
        return (dateText ? dateText[1] : "");
    }
    var date = dateToPST(blog.publishedAt);
    return (_jsx("div", { className: 'w-full py-[30px] md:py-[50px]', children: _jsx("div", { className: 'max-w-[1240px] mx-auto', children: _jsxs("div", { className: 'grid lg:grid-cols-1 px-4 lg:px-0 text-black', children: [_jsx("img", { className: 'h-56 w-full object-cover rounded-t-xl', src: `${ENDPOINT}${blog.coverImg.url}` }), _jsx("div", { className: 'rounded-b-xl bg-[#e8e0c9]', children: _jsxs("div", { className: 'p-3 md:p-5', children: [_jsx("h3", { className: 'font-bold text-4xl md:my-1 text-black', children: blog.blogTitle }), _jsxs("h2", { className: 'text-xl', children: ["Written by ", blog.authorName] }), _jsx("p", { className: 'text-black text-l italic', children: date }), _jsx("hr", { className: 'mt-4 mb-4 mr-[calc(33%)] h-px' }), _jsx("p", { children: blog.blogContent })] }) })] }) }) }));
};
export default BlogContent;
