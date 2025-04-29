import { Homepage, BlogContentPage, AboutMe } from "./pages";
import { Route, Routes } from 'react-router';
import useFetch from './hooks/useFetch';
import { StrapiResponse } from "./components/Blogs";

function App() {

  let [loading, error, data]: [boolean, string | null, StrapiResponse | null] = useFetch(
    'https://api.pronetowander.me/api/blogs?populate=*'
  );
  // let loading = false;
  // let error = null

  // let data = {"data":[{"id":4,"documentId":"r80qbgqmn334lep4zwzi35tf","blogTitle":"Yo","blogDesc":"Yo","authorName":"Yo","blogContent":[{"type":"heading","level":2,"children":[{"bold":true,"text":"A Moment of Reflection","type":"text"}]},{"type":"paragraph","children":[{"text":"In the rush of daily life, it’s easy to lose sight of the small moments that ground us. A quiet morning with a cup of coffee, the sound of rain tapping against the window, or a fleeting smile from a stranger can carry more weight than we realize. These instances, often overlooked, are the threads that weave meaning into our days. ","type":"text"},{"text":"Taking time to notice them isn’t just a luxury","type":"text","italic":true},{"text":"—it’s a practice that recharges our perspective, reminding us to stay connected to the world around us.","type":"text"}]},{"type":"paragraph","children":[{"text":"Pausing doesn’t mean stopping; it’s about finding balance in motion. Whether it’s a deep breath before a big decision or a walk to clear your mind, these deliberate breaks help us process and move forward with clarity. In a world that celebrates constant productivity, carving out space for reflection is a quiet rebellion. It’s a way to honor our own rhythms and rediscover the beauty in the ordinary, one moment at a time.","type":"text"}]},{"type":"paragraph","children":[{"text":"","type":"text"},{"url":"https://google.com","type":"link","children":[{"text":"Google","type":"text"}]},{"text":"","type":"text"}]}],"createdAt":"2025-04-29T01:26:08.088Z","updatedAt":"2025-04-29T01:49:36.074Z","publishedAt":"2025-04-29T01:49:36.114Z"}],"meta":{"pagination":{"page":1,"pageSize":25,"pageCount":1,"total":1}}};

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
        <Route path='/' element={<Homepage blogs={data || null} />}></Route>
        <Route path='/blogs' element={<Homepage blogs={data || null} />}></Route>
        <Route path='/blog/:id' element={<BlogContentPage blogs={data || null} />}></Route>
        <Route path='/about' element={<AboutMe />}></Route>
      </Routes>
    </div>
  )
}

export default App
