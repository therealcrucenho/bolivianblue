import React from 'react';

const PoliticaDePrivacidad = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Política de Privacidad</h1>
      <p>
        En Bolivian Blue, valoramos tu privacidad y estamos comprometidos a
        proteger tu información personal. Esta política de privacidad describe
        cómo recopilamos, usamos y protegemos tu información cuando visitas
        nuestro sitio web.
      </p>

      <h2 className="text-xl font-semibold mt-4">
        Información que Recopilamos
      </h2>
      <p>
        No recopilamos información personal de los usuarios de ninguna manera.
        El único dato que obtenemos es información básica del navegador, como la
        dirección IP, tipo de navegador y páginas visitadas, para mejorar la
        experiencia del usuario y garantizar la funcionalidad del sitio.
      </p>

      <h2 className="text-xl font-semibold mt-4">Uso de la Información</h2>
      <p>
        La información del navegador que recopilamos se utiliza únicamente para:
      </p>
      <ul className="list-disc list-inside ml-4">
        <li>Garantizar que nuestro sitio web funcione correctamente.</li>
        <li>Mejorar la experiencia del usuario.</li>
        <li>Analizar el uso del sitio web para realizar mejoras.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">Cookies</h2>
      <p>
        Utilizamos cookies y tecnologías similares para mejorar tu experiencia
        en nuestro sitio web. Las cookies son pequeños archivos de texto que un
        sitio web coloca en tu computadora o dispositivo móvil cuando lo
        visitas. Las cookies que utilizamos incluyen:
      </p>
      <ul className="list-disc list-inside ml-4">
        <li>Cookies necesarias para el funcionamiento básico del sitio web.</li>
        <li>Cookies de rendimiento para analizar el uso del sitio web.</li>
        <li>
          Cookies de publicidad de terceros, como Google AdSense, para mostrar
          anuncios personalizados.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">Control de las Cookies</h2>
      <p>
        Puedes controlar y/o eliminar las cookies como desees. Puedes eliminar
        todas las cookies que ya están en tu computadora y configurar la mayoría
        de los navegadores para que no se acepten cookies. Sin embargo, si haces
        esto, es posible que algunas partes de nuestro sitio web no funcionen
        correctamente.
      </p>

      <h2 className="text-xl font-semibold mt-4">
        Cambios en esta Política de Privacidad
      </h2>
      <p>
        Nos reservamos el derecho de actualizar esta política de privacidad en
        cualquier momento. Te recomendamos revisar esta página periódicamente
        para estar al tanto de cualquier cambio. Si realizamos cambios
        significativos, te lo notificaremos a través de nuestro sitio web.
      </p>

      <h2 className="text-xl font-semibold mt-4">Contacto</h2>
      <p>
        Si tienes alguna pregunta sobre esta política de privacidad, puedes
        ponerte en contacto con nosotros a través de nuestro correo electrónico:
        contacto@bolivianblue.com
      </p>
    </div>
  );
};

export default PoliticaDePrivacidad;
