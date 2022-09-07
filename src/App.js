import Home from './features/Home/page/Home';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Resume from './features/Resume/page/Resume';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
