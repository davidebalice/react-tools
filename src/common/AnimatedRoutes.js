import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from '../components/Home';
import Calculator from '../components/Calculator';
import Calendar from '../components/Calendar';

import { AnimatePresence } from "framer-motion";
import ScrollToTop from "../ScrollToTop";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <ScrollToTop>
      <Routes key={location.pathname} location={location}>
          <Route exact path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/calendar" element={<Calendar />} />
      </Routes>
      </ScrollToTop>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;