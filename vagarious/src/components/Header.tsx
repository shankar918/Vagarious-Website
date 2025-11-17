// src/components/Header.tsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logo from "../assets/logo.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
     { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" }
   
  ];

  const CTAButtons = (
    <>
      <Link to="/contact" className="no-underline">
        <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-0">
          Get Started
        </Button>
      </Link>
      {/* <Link to="/adminlogin" className="no-underline">
        <Button variant="secondary" className="bg-yellow-500 hover:bg-yellow-600 text-black">
          Admin Login
        </Button>
      </Link> */}
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 no-underline text-white">
            <img src={logo} alt="Logo" className="h-20" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-white fs-5">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-medium no-underline transition-colors text-decoration-none f-2 ${
                  location.pathname === item.path
                    ? "text-indigo-500"
                    : "text-white hover:text-indigo-400"
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons (Desktop) */}
          <div className="hidden md:flex gap-3">{CTAButtons}</div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <nav className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block w-full text-left px-4 py-2 rounded-lg font-medium no-underline text-decoration-none ${
                  location.pathname === item.path
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                    : "text-white hover:bg-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="flex flex-col gap-3">{CTAButtons}</div>
          </nav>
        </div>
      )}
    </header>
  );
}
