import React from "react";
import { Facebook, Twitter, Instagram, Github, Youtube, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex space-x-12 mb-4 lg:mb-0">
            <div>
              <h3 className="font-semibold text-lg mb-2">resources</h3>
              <ul className="space-y-1">
                <li><a href="/" className="hover:text-gray-400 transition-colors duration-300">Inicio</a></li>
                <li><a href="/services" className="hover:text-gray-400 transition-colors duration-300">Servicios</a></li>
                <li><a href="/nosotros" className="hover:text-gray-400 transition-colors duration-300">Nosotros</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-start mb-4 lg:mb-0">
            <h3 className="font-semibold text-lg mb-2">Contacto</h3>
            <div className="flex items-center space-x-2 group">
              <Phone className="w-4 h-4 group-hover:text-blue-400 transition-colors duration-300" />
              <span className="group-hover:text-blue-400 transition-colors duration-300">962991005</span>
            </div>
            <div className="flex items-center space-x-2 mt-1 group">
              <Mail className="w-4 h-4 group-hover:text-blue-400 transition-colors duration-300" />
              <span className="group-hover:text-blue-400 transition-colors duration-300">Wilder@contableromero.com</span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="font-semibold text-lg mb-2">Social</h3>
            <ul className="flex space-x-3">
              {[
                { Icon: Facebook, name: 'Facebook', color: 'hover:bg-[#1877F2]', link: 'https://www.facebook.com/people/RomeroAsociados/100088140944863/?mibextid=ZbWKwL' },
                { Icon: Twitter, name: 'Twitter', color: 'hover:bg-[#1DA1F2]', link: 'https://twitter.com' },
                { Icon: Instagram, name: 'Instagram', color: 'hover:bg-[#E4405F]', link: 'https://www.instagram.com' },
                { Icon: Github, name: 'Github', color: 'hover:bg-[#333333]', link: 'https://github.com' },
                { Icon: Youtube, name: 'Youtube', color: 'hover:bg-[#CD201F]', link: 'https://www.youtube.com' }
              ].map(({ Icon, name, color, link }) => (
                <li key={name} className="relative group">
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`icon flex items-center justify-center w-10 h-10 bg-white text-gray-800 rounded-full 
                    ${color} hover:text-white transform transition-all duration-300 hover:scale-110 relative`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="tooltip invisible group-hover:visible opacity-0 group-hover:opacity-100 
                      absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-white text-black text-sm 
                      rounded-md shadow-lg transition-all duration-300 whitespace-nowrap">
                      {name}
                      <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-white"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-4 pt-4 border-t border-gray-800">
          <p className="text-sm text-gray-400">
            © 2025 ROMERO & ASOCIADOS. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
