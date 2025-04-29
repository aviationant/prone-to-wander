import { useParams } from 'react-router';
import { Blog, BlogsProp } from "../components/Blogs";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { RootNode } from './BlocksRenderer/BlocksRenderer';

const BlogContent = ({ blogs }: BlogsProp) => {

  let { id } = useParams();

  let blog: Blog | undefined;

  if (!blogs) return <div>Blogs not found.</div>;
  if (!id) return <div>Id not found;</div>

  try {
    blog = (blogs.data.find(blog => blog.id.toString() === id));
  } catch {
    return <div>Could not find blog ID.</div>;
  }

  if (!blog) return <div className='text-black'>Blog data not found.</div>;

  function dateToPST(dateUTC: Date) {
    const dateRegex = /^([a-zA-Z]+,\s[0-9]{1,2}\s[a-zA-Z]+\s[0-9]{4})/
    var date = new Date(dateUTC);
    var dateText = dateRegex.exec(date.toUTCString())
    return (dateText ? dateText[1] : "");
  }

  var date = dateToPST(blog.publishedAt);
  
  const content = blog.blogContent as unknown as RootNode[];

  if (!blogs) return;

  return (
    <div className='w-full py-[30px] md:py-[50px]'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='grid lg:grid-cols-1 px-4 lg:px-0 text-black'>
          <img className='h-56 w-full object-cover rounded-t-xl' src={blog.coverImg[0].url} />
          <div className='rounded-b-xl bg-[#e8e0c9]'>
            <div className='p-3 md:p-5'>
              <h3 className='font-bold text-4xl md:my-1 text-black'>{blog.blogTitle}</h3>
              <h2 className='text-xl'>Written by {blog.authorName}</h2>
              <p className='text-black text-l italic'>{date}</p>
              <hr className='mt-4 mb-4 mr-[calc(33%)] h-px' />
              <BlocksRenderer content={content} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogContent