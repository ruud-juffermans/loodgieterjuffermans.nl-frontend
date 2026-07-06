import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Home from "@pages/home";
import DienstPage from "@pages/diensten";
import RegioPage from "@pages/regio";
import NotFound from "@pages/not-found";
import Layout from "@layouts";

const HEADER_HEIGHT = 88;

/**
 * Scrolls to the hash target (compensating for the fixed header) after each
 * navigation, or back to the top when there is no hash.
 */
const ScrollManager = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
        window.scrollTo({ top: y, behavior: "smooth" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0 });
  }, [location]);

  return null;
};

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/diensten/:slug" element={<DienstPage />} />
          <Route path="/regio/:slug" element={<RegioPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
