import React from 'react';
import { motion } from 'framer-motion';


const Home = () => {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${require('../assets/Fondo.jpg')})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>

      <div className="relative z-10 container mx-auto px-4 py-16 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-900 mb-4">
            ROMERO & ASOCIADOS
          </h1>
          <p className="text-xl text-gray-800 font-medium tracking-wide mb-8">
            Asesoría & Consultoría Tributaria - Contable
          </p>
          
          <motion.a 
            href="https://wa.me/message/PQNSFAOCWTTIF1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-10 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-semibold"
          >
            Contáctanos
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Bienvenidos</h2>
          <p className="text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed mb-12">
            En <span className="font-semibold text-blue-800">ROMERO & ASOCIADOS</span>, nos dedicamos a brindar asesoría contable y tributaria de calidad, asegurando el crecimiento y éxito de nuestros clientes con soluciones efectivas y estratégicas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl p-8 border-l-4 border-blue-600 hover:shadow-3xl transform transition-all duration-300 hover:-translate-y-2"
          >
            <h3 className="text-3xl font-bold text-blue-900 mb-4">Misión</h3>
            <p className="text-gray-800 text-lg">
              Brindar apoyo, orientación y herramientas para el éxito de nuestros clientes, garantizando soluciones confiables y estratégicas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl p-8 border-l-4 border-green-600 hover:shadow-3xl transform transition-all duration-300 hover:-translate-y-2"
          >
            <h3 className="text-3xl font-bold text-green-900 mb-4">Visión</h3>
            <p className="text-gray-800 text-lg">
              Ser el socio estratégico de confianza para el crecimiento y desarrollo de nuestros clientes, proporcionando asesoría experta y efectiva.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;