import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Calculator, BookOpen, Users, RefreshCw, FileText } from 'lucide-react';

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

      {/* Botón de WhatsApp solo para Facturación Electrónica */}
      {title === "Facturación Electrónica" && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open('https://wa.me/message/PQNSFAOCWTTIF1?text=Hola,%20me%20interesa%20información%20sobre%20facturación%20electrónica', '_blank')}
          className="w-full mt-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg flex items-center justify-center hover:from-green-600 hover:to-green-700 transition-all duration-300"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Contáctanos
        </motion.button>
      )}
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
      title: "Facturación Electrónica",
      icon: FileText,
      description: [
        "Alquiler de sistema de facturación electrónica",
        "Emisión de comprobantes electrónicos",
        "Gestión de documentos electrónicos",
        "Soporte técnico especializado",
        "Integración con sistemas contables",
        "Cumplimiento con normativas SUNAT"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8 md:w-2/3 mx-auto">
            {services.slice(3).map((service, index) => (
              <ServiceCard
                key={index + 3}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;