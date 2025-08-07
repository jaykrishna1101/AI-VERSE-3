import React from 'react';
import { BrowserRouter, Routes, Route, Link,Navigate } from 'react-router-dom';
import Home from "./pages/Home"
import Team from "./pages/Team"
import { Analytics } from "@vercel/analytics/next"

export default function App() {
  return (
    <>
       <Analytics/>
    <BrowserRouter>
      <div>
        
    
        {/* Routes */}
        <Routes>
       
          {/* <Route path="/" element={<Navigate to="/team"/>} /> */}
             <Route path="/" element={<Home/>} />
          <Route path="/team" element={<Team />} />
         
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}