import React from 'react';
import { BrowserRouter, Routes, Route, Link,Navigate } from 'react-router-dom';
import Home from "./pages/Home"
import Team from "./pages/Team"
import Easterpage from './pages/Easterpage';

export default function App() {
  return (
    <>
       
    <BrowserRouter>
      <div>
        
    
        {/* Routes */}
        <Routes>
      

          {/* <Route path="/" element={<Navigate to="/team"/>} /> */}
      

          <Route path="/" element={<Home/>} />   
          <Route path="/team" element={<Team />} />
          <Route path="/easter3504" element={<Easterpage />} />
         
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}
