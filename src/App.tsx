import { useState } from 'react';
import { Homepage, BlogContentPage } from "./pages";
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/blog' element={<BlogContentPage />}></Route>
      </Routes>
    </div>

  )
}

export default App
