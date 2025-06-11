import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';


import './index.css';

import Home from './Home.jsx';
import Recipe_details from './lemme_cook.jsx';
import PitchImperfect from './pitch_imperfect.jsx';
import PlantCare from './plant_care.jsx';
// import reportWebVitals from './reportWebVitals'; // Only if needed

function Layout() {
  return (
    <Outlet/>
  );
}

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="lemme-cook" element={<Recipe_details />} />
          <Route path="pitch-imperfect" element={<PitchImperfect />} />
          <Route path="plant-care" element={<PlantCare />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// reportWebVitals(); // Uncomment if you're importing it
