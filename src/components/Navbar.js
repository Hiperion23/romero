import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "Inicio", path: "/" },
    { title: "Servicios", path: "/services" },
    { title: "Nosotros", path: "/nosotros" }
  ];

  return (
    <div className="relative w-full z-50">
      <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg">
        <div className="container mx-auto px-4 w-full">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 relative z-50 ml-4 md:ml-20">
              <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                ROMERO & ASOCIADOS
              </span>
            </div>

            <div className="hidden md:flex space-x-8 mr-4 md:mr-20">
              {menuItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  className="relative text-gray-300 hover:text-white transition-colors duration-300 py-2 group overflow-hidden"
                >
                  <span className="relative z-10">{item.title}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></span>
                </a>
              ))}
            </div>

            <div className="md:hidden relative z-50 mr-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg transition-colors duration-200 focus:outline-none group"
                aria-label="Menu"
              >
                <div className="relative w-6 h-6">
                  <span 
                    className={`absolute h-0.5 w-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transform transition-all duration-300 ease-in-out ${
                      isOpen ? 'rotate-45 translate-y-2.5' : 'translate-y-0'
                    }`}
                  ></span>
                  <span 
                    className={`absolute top-1/2 -translate-y-1/2 h-0.5 w-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transform transition-all duration-300 ease-in-out ${
                      isOpen ? 'opacity-0 translate-x-2' : 'opacity-100'
                    }`}
                  ></span>
                  <span 
                    className={`absolute h-0.5 w-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transform transition-all duration-300 ease-in-out ${
                      isOpen ? '-rotate-45 -translate-y-2.5' : 'translate-y-5'
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div 
        className={`fixed inset-0 w-full h-full bg-black/60 backdrop-blur-sm transform transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div 
          className="flex items-center justify-center w-full h-full"
          onClick={(e) => e.stopPropagation()}
        >
          <div className={`w-full max-w-md px-4 transform transition-all duration-500 ease-in-out ${
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}>
            <div className="grid gap-4 w-full">
              {menuItems.map((item, index) => (
                <a
                  key={item.path}
                  href={item.path}
                  className={`w-full transform transition-all duration-300 delay-${index * 100} ${
                    isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}
                >
                  <div className="group relative overflow-hidden rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-300 w-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    <div className="relative p-4 text-center w-full">
                      <span className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                        {item.title}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;