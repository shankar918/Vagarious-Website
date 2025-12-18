import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';
import isoLogo from "../assets/iso1.jpg";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gradient-to-br from-gray-950 to-gray-900 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Vagarious Solutions
            </h3>
            <p className="text-gray-400 text-sm">
              Empowering the future with AI innovation and cutting-edge technology solutions.
            </p>

            {/* Social icons */}
            <div className="flex gap-4 justify-start">
              <a href="https://www.linkedin.com/company/vagarious-solutions/" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://youtube.com/@vagarioussolutions?si=AKoTxJ5gNuVQVGzF" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Youtube size={20} />
              </a>
              <a href="https://www.facebook.com/share/1BrtwFZxa4/" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/vagarioussolutionspvt.ltd.5?igsh=MWV6ejZxazExYm84dg==" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>

          </div>

          {/* Quick Links */}
          <div className='quicklines w-30'>
            <h4 className="mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate(item.toLowerCase())}
                    className="text-gray-400 hover:text-indigo-400 transition-colors text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          {/* <div className='p-0 ps-0 pe-0 mt-0 ms-0'>
            <h4 className="mb-4 text-white">AI Solutions</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Cloud AI</li>
              <li>Automation</li>
              <li>Data Intelligence</li>
              <li>Security Solutions</li>
            </ul>
          </div> */}

          {/* Contact Info */}
          <div className='p-0 ps-0'>
            <h4 className="mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 text-indigo-400" />
                <span>andemshankar630@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 text-indigo-400" />
                <span>+91 9652984415</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-indigo-400" />
                <span>
                  Ground Floor, Shanmukha Empires, 83, Ayyappa Society Main Road
                  Mega Hills,, Sri Sai Nagar,
                  Madhapur
                  Hyderabad Telangana 500081
                </span>
              </li>
            </ul>
          </div>
          <div className="pt-3 flex justify-center">
            <img
              src={isoLogo}
              alt="ISO Certified"
              className="object-contain rounded-xl shadow-lg"
              style={{ width: "150px", height: "150px" }}
            />
          </div>

        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400 fs-5 text-white">
          <p>&copy; {new Date().getFullYear()} Vagarious Solutions Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
