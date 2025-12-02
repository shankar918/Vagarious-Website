import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logo from "../assets/logo.png";

export function Header({ currentPage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Services", path: "services" },
    { name: "Contact", path: "contact" },
    { name: "Careers", path: "careers" }, // ✅ fixed to match App.jsx
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark text-white border-light rounded-top">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button onClick={() => onNavigate("home")} className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-20" />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 fs-5 px-10">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => onNavigate(item.path)}
                className={`relative font-medium transition-colors ${
                  currentPage === item.path
                    ? "text-indigo-500"
                    : "text-white hover:text-indigo-400"
                }`}
              >
                {item.name}
                {currentPage === item.path && (
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500" />
                )}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => onNavigate("contact")}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 border-0"
            >
              Get Started
            </Button>
            {/* <button onClick={() => onNavigate('admin-login')} className="btn btn-warning">
  Admin Login
</button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => {
                  onNavigate(item.path);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg font-medium ${
                  currentPage === item.path
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                    : "text-black hover:bg-gray-100"
                }`}
              >
                {item.name}
              </button>
            ))}
            <Button
              onClick={() => {
                onNavigate("contact");
                setMobileMenuOpen(false);
              }}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-0"
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
