import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Calculator, BookOpen, Users, RefreshCw } from 'lucide-react';

const ServiceCard = ({ title, description, icon: Icon }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ 
      type: "spring", 
      stiffness: 100, 
      damping: 10,
      duration: 0.6
    }}
    viewport={{ once: true }}
    className="relative group"
  >
    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300 blur-lg animate-pulse"></div>
    <div className="relative bg-gray-900 text-white p-6 rounded-xl border border-gray-800 space-y-4 overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
      
      <div className="flex items-center mb-4 relative z-10">
        <motion.div 
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="p-3 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-lg"
        >
          <Icon className="w-8 h-8 text-blue-400 transform transition-transform" />
        </motion.div>
      </div>

      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-3">
        {title}
      </h3>

      <ul className="space-y-2">
        {Array.isArray(description) && description.map((item, index) => (
          <motion.li 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              delay: index * 0.1,
              type: "spring",
              stiffness: 300
            }}
            className="flex items-center text-gray-300 hover:text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" />
            <span className="text-sm">{item}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const ServicesSection = () => {
  const services = [
    {
      title: "Asesoría Tributaria",
      icon: Calculator,
      description: [
        "Planeamiento tributario",
        "Procesos de fiscalización tributaria",
        "Acogimiento a beneficios tributarios",
        "Preparación de recursos de reclamación y apelación",
        "Auto fiscalizaciones tributarias preventivas",
        "Actualización según leyes tributarias"
      ]
    },
    {
      title: "Asesoría Contable",
      icon: BookOpen,
      description: [
        "Elaboración de estados financieros",
        "Análisis de cuenta y reportes gerenciales",
        "Proceso y emisión de libros contables",
        "Entrega oportuna del cálculo de impuestos",
        "Declaraciones juradas: PDT",
        "Estados financieros para créditos bancarios"
      ]
    },
    {
      title: "Asesoría Laboral",
      icon: Users,
      description: [
        "Elaboración de planillas",
        "Negociación y administración de contratos",
        "Gestiones: ESSALUD / AFP / CTS",
        "Preparación de planillas mensuales",
        "Cálculo de participación de utilidades",
        "Afrontamiento de inspecciones laborales"
      ]
    },
    {
      title: "Reconstrucción Contable",
      icon: RefreshCw,
      description: [
        "Auditoría de la gestión contable",
        "Reconstrucción de estados financieros",
        "Corrección de contingencias tributarias",
        "Corrección de contingencias contables",
        "Corrección de contingencias laborales"
      ]
    }
  ];

  return (
    <section className="py-16 px-4 bg-black">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-6"
          >
            Nuestros Servicios
          </motion.h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Soluciones tecnológicas integrales en asesoría tributaria, contable y laboral para el éxito transformador de su empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;