import {
  Mail, Phone, MapPin,
  Linkedin, Facebook, Instagram, Youtube
} from "lucide-react";
import "../../src/App.css";

export function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-grid">

          {/* Company */}
          <div className="footer-col">
            <h3 className="footer-logo">Softcore Solutions</h3>

            <p className="footer-desc">
              Empowering the future with AI innovation and cutting-edge technology solutions.
            </p>

            <div className="social-icons">
              <a href="#"><Linkedin size={20} /></a>
              <a href="#"><Youtube size={20} /></a>
              <a href="#"><Facebook size={20} /></a>
              <a href="#"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <button onClick={() => onNavigate(item.toLowerCase())}>
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>AI Solutions</h4>
            <ul>
              <li>Cloud AI</li>
              <li>Automation</li>
              <li>Data Intelligence</li>
              <li>Security Solutions</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact Us</h4>

            <div className="contact-item">
              <Mail size={16} />
              <span>andemshankar630@gmail.com</span>
            </div>

            <div className="contact-item">
              <Phone size={16} />
              <span>+91 9652984415</span>
            </div>

            <div className="contact-item">
              <MapPin size={16} />
              <span>
                Madhapur, Hyderabad, Telangana 500081
              </span>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          © {new Date().getFullYear()} Softcore Solutions Pvt Ltd. All rights reserved.
        </div>

      </div>
    </footer>
  );
}