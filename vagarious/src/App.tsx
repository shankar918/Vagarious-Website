// src/App.tsx
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/pages/HomePage";
import { AboutPage } from "./components/pages/AboutPage";
import ServicesPage from "./components/pages/ServicesPage";
import { ContactPage } from "./components/pages/ContactPage";
import CareersPage from "./components/pages/Careers";
import Loginpag from "./components/pages/AdminLogin";
import Addcarrer from './components/pages/Addcarrer'
import ViewCareer from './components/pages/ViewCareer'
import AdminDashboard from "./components/pages/AdminDashboard";
import { Toaster } from "./components/ui/sonner";


export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-white">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/adminlogin" element={<Loginpag />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path='/addcarrer' element={<Addcarrer/>}/>
          <Route path='/ViewCareer' element={<ViewCareer/>}/>
        </Routes>
      </main>
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
}
