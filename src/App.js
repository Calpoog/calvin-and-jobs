import Home from './pages/Home/Home';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Resume from './pages/Resume/Resume';

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
