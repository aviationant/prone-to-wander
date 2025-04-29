import { Homepage, BlogContentPage, AboutMe } from "./pages";
import { Route, Routes } from 'react-router';
import useFetch from './hooks/useFetch';
import { StrapiResponse, Blog } from "./components/Blogs";

function App() {

  let [loading, error, blogs]: [boolean, string | null, StrapiResponse<Blog> | null] = useFetch(
    'https://api.pronetowander.me/api/blogs?populate=*'
  );

  if (loading) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <div>
          <p className='animate-typing overflow-hidden whitespace-nowrap border-r-4 font-qwitcher text-8xl '>Loading...</p>
        </div>
      </div>
    );
  }

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage blogs={blogs || null} />}></Route>
        <Route path='/blogs' element={<Homepage blogs={blogs || null} />}></Route>
        <Route path='/blog/:id' element={<BlogContentPage blogs={blogs || null} />}></Route>
        <Route path='/about' element={<AboutMe />}></Route>
      </Routes>
    </div>
  )
}

export default App
