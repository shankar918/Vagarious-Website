import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import isoLogo from "../assets/iso1.jpg";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-950 to-gray-900 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent text-lg font-semibold">
              Vagarious Solutions
            </h3>
            <p className="text-gray-400 text-sm">
              Empowering the future with AI innovation and cutting-edge technology solutions.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 justify-start">
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors no-underline">
                <Linkedin size={25} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors no-underline">
                <Twitter size={25} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors no-underline">
                <Facebook size={25} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors no-underline">
                <Instagram size={25} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-white text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 ">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" },
                { name: "Careers", path: "/careers" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-indigo-400 transition-colors text-sm no-underline text-white fs-6"
                    style={{ textDecoration: "none" }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-white text-lg font-semibold text-center">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <Mail size={19} className="mt-0.5 text-indigo-400" />
                <span>andemshankar630@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={19} className="mt-0.5 text-indigo-400" />
                <span>+91 9652984415</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={49} className="mt-0.5 text-indigo-400" />
                <span>
                  2nd Floor, Spline Arcade, Ayyappa Society Main Rd, Sri Sai Nagar,
                  Madhapur, Hyderabad, Telangana 500081
                </span>
              </li>
            </ul>
          </div>

          {/* ISO Logo */}
          <div className="pt-3 flex justify-center">
            <img
              src={isoLogo}
              alt="ISO Certified"
              className="object-contain rounded-xl shadow-lg"
              style={{ width: "150px", height: "150px" }}
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Vagarious Solutions Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
