import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Animals from "./pages/Animals";
import Tickets from "./pages/Tickets";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar />
        <main style={{ flex: "1" }}>
          <Routes>
            <Route path="/Malinda_Zoo/" element={<Home />} />
            <Route path="/Malinda_Zoo/about" element={<About />} />
            <Route path="/Malinda_Zoo/animals" element={<Animals />} />
            <Route path="/Malinda_Zoo/tickets" element={<Tickets />} />
            <Route path="/Malinda_Zoo/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
