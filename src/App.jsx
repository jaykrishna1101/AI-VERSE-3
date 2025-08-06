import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home"
import Team from "./pages/Team"

export default function App() {
  return (
    <BrowserRouter>
      <div>
        
    
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
         
        </Routes>
      </div>
    </BrowserRouter>
  );
}
