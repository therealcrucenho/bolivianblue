import React from 'react';
import Link from 'next/link';

const Contribuir = () => {
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center">🤝 Contribuir a Bolivian Blue</h1>
      
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <p className="text-blue-800">
          ¡Tu contribución puede ayudar a millones de bolivianos a tener acceso transparente 
          a información financiera actualizada!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            💻 Desarrollo
          </h2>
          <p className="text-gray-700 mb-4">
            Ayuda a mejorar la plataforma con nuevas funcionalidades, corrección de bugs 
            y optimizaciones.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Frontend con React/Next.js</li>
            <li>Backend y APIs</li>
            <li>Optimización de rendimiento</li>
            <li>Mejoras de UI/UX</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            📊 Datos y Análisis
          </h2>
          <p className="text-gray-700 mb-4">
            Contribuye con fuentes de datos, validación de información y análisis 
            de mercado financiero.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Validación de tasas de cambio</li>
            <li>Nuevas fuentes de datos</li>
            <li>Análisis de tendencias</li>
            <li>Reportes de precisión</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">🚀 Cómo Empezar</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">1</div>
            <h3 className="font-semibold mb-2">Fork del Proyecto</h3>
            <p className="text-sm text-gray-600">Haz un fork del repositorio en GitHub</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">2</div>
            <h3 className="font-semibold mb-2">Desarrolla</h3>
            <p className="text-sm text-gray-600">Crea tu rama y desarrolla tus mejoras</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">3</div>
            <h3 className="font-semibold mb-2">Pull Request</h3>
            <p className="text-sm text-gray-600">Envía tu PR para revisión</p>
          </div>
        </div>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-4">📍 Enlaces Importantes</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="https://github.com/therealcrucenho/bolivianblue" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            🔗 Repositorio GitHub
          </a>
          <Link 
            href="/contacto"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            📧 Contactar al Equipo
          </Link>
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
        <h3 className="font-semibold text-green-800 mb-2">🌟 ¿Por qué Contribuir?</h3>
        <p className="text-green-700 text-sm">
          Bolivian Blue es más que una aplicación - es una herramienta de transparencia 
          financiera para todo el país. Tu contribución ayuda a democratizar el acceso 
          a información financiera confiable y actualizada para todos los bolivianos.
        </p>
      </div>

      <div className="text-center mt-8">
        <Link href="/" className="text-blue-500 hover:text-blue-700 underline">
          ← Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default Contribuir;