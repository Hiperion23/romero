import React, { useState } from "react";
import { motion } from "framer-motion";
import { Users, Target, Briefcase, Phone, ChevronRight, Send } from "lucide-react";

const AboutUs = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    ruc: "",
    razonSocial: "",
    telefono: "",
    correo: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:romerowider893@gmail.com?subject=Nuevo%20Contacto&body=Nombre:%20${formData.nombre}%0A%20RUC:%20${formData.ruc}%0A%20Razón%20Social:%20${formData.razonSocial}%0A%20Teléfono:%20${formData.telefono}%0A%20Correo:%20${formData.correo}`;
    setFormData({
      nombre: "",
      ruc: "",
      razonSocial: "",
      telefono: "",
      correo: "",
    });
  };

  const services = [
    {
      icon: <Users className="w-12 h-12 text-blue-400" />,
      title: "Régimen Tributario",
      items: [
        "Régimen General para empresas con mayor volumen",
        "Régimen MYPE para pequeñas y medianas empresas",
        "Régimen Especial (RER)",
        "Régimen Único Simplificado (RUS)",
      ],
    },
    {
      icon: <Target className="w-12 h-12 text-blue-400" />,
      title: "Consultoría en Rendimiento",
      items: [
        "Análisis detallado",
        "Planificación estratégica",
        "Implementación efectiva",
        "Monitoreo continuo",
        "Optimización de procesos",
      ],
    },
    {
      icon: <Briefcase className="w-12 h-12 text-blue-400" />,
      title: "Proyectos",
      items: ["Estrategias Tributarias y optimización", "Cumplimiento Legal y asesoría", "Planificación Financiera"],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black overflow-hidden relative z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-900/10 opacity-80"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-50"></div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="relative z-20 w-full px-4 py-16 md:px-8 lg:px-16">
        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="max-w-5xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-6">
            Consultorías con objetivos claros
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Soy un(a) Asesor(a) de empresa profesional con una amplia experiencia. Con una mentalidad positiva de crear relaciones sólidas y honestas, son puntos clave para lograr resultados significativos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5, type: "spring", stiffness: 100 }}
              className="bg-gray-900/60 backdrop-blur-lg border border-gray-800 rounded-2xl p-6 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <motion.li key={idx} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: idx * 0.1, type: "spring", stiffness: 300 }} className="text-gray-300 flex items-center">
                      <ChevronRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.8, delay: 0.6 }} 
          className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-2xl p-8 text-center flex flex-col justify-center items-center"
        >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">¿Quiere saber más?</h2>
            <p className="text-gray-300 mb-6 text-center">Contácteme hoy mismo para agendar su consulta gratuita.</p>
            <motion.button 
                onClick={() => window.open('https://wa.me/message/PQNSFAOCWTTIF1?text=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20sus%20servicios.', '_blank')}
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold flex items-center mx-auto hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
  <Phone className="w-5 h-5 mr-2" />
  Contactar
</motion.button>        </motion.div>
          <form onSubmit={handleSubmit} className="bg-gray-900/80 backdrop-blur-lg border border-gray-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Déjanos tus datos:</h3>
            {["nombre", "ruc", "razonSocial", "telefono", "correo"].map((field, index) => (
              <input key={index} 
              type="text" 
              name={field} 
              placeholder={field.replace(/^\w/, (c) => c.toUpperCase())} 
              className="w-full p-3 mb-3 rounded-lg bg-gray-800 text-white" 
              onChange={handleChange}
              value={formData[field]} required />
            ))}
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg flex items-center justify-center">
              <Send className="w-5 h-5 mr-2" /> Enviar
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
