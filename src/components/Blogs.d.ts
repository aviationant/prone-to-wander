export interface Blog {
    id: number;
    blogTitle: string;
    blogDesc: string;
    blogContent: string;
    publishedAt: Date;
    authorName: string;
    coverImg: {
        url: string;
    };
}
export interface StrapiResponse {
    data: Blog[];
    meta: {
        [key: string]: any;
    };
}
export interface BlogsProp {
    blogs: StrapiResponse | null;
}
declare const Blogs: ({ blogs }: BlogsProp) => import("react/jsx-runtime").JSX.Element;
export default Blogs;
