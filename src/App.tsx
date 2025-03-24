import { useState } from 'react';
import { Homepage, BlogContentPage, AboutMe } from "./pages";
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/blog/:id' element={<BlogContentPage />}></Route>
        <Route path='/about' element={<AboutMe />}></Route>
      </Routes>
    </div>

  )
}

export default App
