import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>

      <main className="min-h-screen bg-white overflow-x-clip">

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />

      </main>

    </BrowserRouter>
  );
}

export default App;