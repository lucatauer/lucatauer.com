import React from "react";
import './input.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import HelloThere from "./pages/HelloThere";
import DidSoftwareEatTheWorld from "./pages/DidSoftwareEatTheWorld";
export default function App() {
    return (
        <Router basename={`/${process.env.PUBLIC_URL}`}>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/hello-there" element={<HelloThere />} />
                    <Route path="/did-software-eat-the-world" element={<DidSoftwareEatTheWorld />} />
                </Routes>
            </div>
        </Router>
  );
}