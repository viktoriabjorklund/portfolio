import React, { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import ScrollToTop from './functions/ScrollToTop.jsx';

import './index.css';

import Home from './pages/Home.jsx';
import PitchImperfect from './pages/pitch_imperfect.jsx';
import PlantCare from './pages/plant_care.jsx';
import Loadtester from './pages/giesecke.jsx';
import MingleMixer from './pages/minglemixer.jsx';
import LemmeCook from './pages/LemmeCook.jsx';
import Rentify from './pages/rentify.jsx';

function Layout() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) {
    const wrapperClasses = `
      w-full h-screen flex items-center justify-center
      ${isHome ? "bg-[#9DD1F9]" : "bg-gradient-to-b from-[#659FC9] to-white h-16"}
    `;

    const spinnerClasses = `
      w-16 h-16 border-4 border-t-transparent rounded-full animate-spin
      ${isHome ? "border-white" : "border-[#659FC9]"}
    `;

    return (
      <div className={wrapperClasses}>
        <div className={spinnerClasses}></div>
      </div>
    );
  }

  return <Outlet />;
}


export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="lemme-cook" element={<LemmeCook />} />
          <Route path="pitch-imperfect" element={<PitchImperfect />} />
          <Route path="plant-care" element={<PlantCare />} />
          <Route path="loadtester" element={<Loadtester />} />
          <Route path="mingle-mixer" element={<MingleMixer />} />
          <Route path="rentify" element={<Rentify />} />
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
