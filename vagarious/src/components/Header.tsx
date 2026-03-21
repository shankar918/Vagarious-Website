import { useState, useEffect } from "react";
import { Menu, X, ChevronRight} from "lucide-react";
import { Button } from "./ui/button";


export function Header({ currentPage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Smooth scroll listener for glassmorphism effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Services", path: "services" },
    { name: "Contact", path: "contact" },
    { name: "admin", path: "adminlogin" },
  ];

  return (
    <header
      className={`fixed top-0 py-4 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled 
          ? "bg-slate-950/70 backdrop-blur-xl border-b border-white/5 py-0 shadow-2xl" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          
         
          <button 
            onClick={() => onNavigate("home")} 
            className="group flex items-center gap-3 transition-transform duration-300 active:scale-95"
          >
            <div className="relative">
              
              {/* Subtle glow behind logo on hover */}
              <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-xl font-bold tracking-tighter text-white uppercase italic">
              Soft<span className="text-indigo-500 not-italic">Core</span>
            </span>
          </button>

          {/* DESKTOP NAVIGATION (Floating Pill Design) */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/10 p-1.5 rounded-full backdrop-blur-2xl shadow-inner">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => onNavigate(item.path)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group ${
                  currentPage === item.path
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {/* Active Pill Background */}
                {currentPage === item.path && (
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full -z-10 shadow-lg shadow-indigo-500/20" />
                )}
                
                {/* Hover Indicator */}
                <span className="relative z-10">{item.name}</span>
                {currentPage !== item.path && (
                   <div className="absolute inset-0 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                )}
              </button>
            ))}
          </nav>

          {/* ACTION BUTTONS */}
          <div className="hidden md:flex items-center gap-6">
            
            
            <Button
              onClick={() => onNavigate("contact")}
              className=" overflow-hidden shadow-xl shadow-indigo-500/10 border-50"
            >
              <span className="relative z-10">
                Get Started
              
              </span>
            </Button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative z-50 p-2 text-white bg-white/5 border border-white/10 rounded-2xl transition-all hover:bg-white/10"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU (Full-screen Cinematic) */}
  <div
  className={`fixed inset-0 z-40 md:hidden bg-slate-950 transition-all duration-300 ${
    mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
  }`}
>
  <div className="flex flex-col h-full px-5 pt-20 pb-6">

    {/* NAV */}
    <div className="flex flex-col gap-3">
      {navItems.map((item) => (
        <button
          key={item.path}
          onClick={() => {
            onNavigate(item.path);
            setMobileMenuOpen(false);
          }}
          className={`w-full text-left px-4 py-3 rounded-lg text-base ${
            currentPage === item.path
              ? "bg-indigo-600 text-white"
              : "text-gray-300 hover:bg-gray-800"
          }`}
        >
          {item.name}
        </button>
      ))}
    </div>

    {/* CTA */}
    <div className="mt-auto">
      <Button
        onClick={() => {
          onNavigate("contact");
          setMobileMenuOpen(false);
        }}
        className="w-full bg-indigo-600 hover:bg-indigo-700 py-4 text-base rounded-lg"
      >
        Get Started
      </Button>
    </div>

    
    {/* CTA */}
    <div className="mt-auto">
      <Button
        onClick={() => {
          onNavigate("admin-dashboard");
          setMobileMenuOpen(false);
        }}
        className="w-full bg-indigo-600 hover:bg-indigo-700 py-4 text-base rounded-lg"
      >
        Get Started
      </Button>
    </div>

  </div>
</div>
    </header>
  );
}