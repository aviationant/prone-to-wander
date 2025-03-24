import { useState } from 'react';
import { Homepage, BlogContentPage, AboutMe } from "./pages";
import { Route, Routes } from 'react-router-dom';
import useFetch from './hooks/useFetch';

function App() {

  let [loading, error,data] = useFetch('http://100.108.159.83:1337/api/blogs?populate=*');
  if (loading) {
    return <p>Loading...</p>;
  } else if (error) {
    return <p>Error: {error}</p>;
  } else {
  // console.log(data)

  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage blogs={data?data:""} />}></Route>
        <Route path='/blog/:id' element={<BlogContentPage blogs={data?data:""} />}></Route>
        <Route path='/about' element={<AboutMe />}></Route>
      </Routes>
    </div>

  )
}
}

export default App
