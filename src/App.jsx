
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Team from "./pages/Team";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import "./components/home.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="onepage-container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Navbar />
              </>
            }
          />

          <Route
            path="/portfolio"
            element={
              <>
                <Navbar />
                <Portfolio />
              </>
            }
          />

          <Route
            path="/services"
            element={
              <>
                <Navbar />
                <Services />
              </>
            }
          />

          <Route
            path="/team"
            element={
              <>
                <Navbar />
                <Team />
              </>
            }
          />

          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <About />
              </>
            }
          />

          <Route
            path="/blog"
            element={
              <>
                <Navbar />
                <Blog />
              </>
            }
          />

          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <Contact />
              </>
            }
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
