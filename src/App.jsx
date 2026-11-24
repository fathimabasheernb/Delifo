import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";

function App() {

  return (

    <main className="min-h-screen bg-[#fffafa] overflow-hidden">

      <Navbar />

      <Hero />

      <Features />

    </main>

  );

}

export default App;