
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { registerSW } from "virtual:pwa-register";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import CVDownload from "./pages/CVDownload";
import DevisForm from "./pages/DevisForm";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import "./index.css";

function App() {
  useEffect(() => {
    registerSW({ immediate: true });
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-black text-white">
        <NavBar logo={<Logo />} />
        <main className="flex-grow animate-fade-in">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cv" element={<CVDownload />} />
            <Route path="/devis" element={<DevisForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
