import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Episodes, Home } from "./pages";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/characters" element={<h1>Characters</h1>}></Route>
        <Route path="/episodes" element={<Episodes />}></Route>
        <Route path="/locations" element={<h1>Location</h1>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
