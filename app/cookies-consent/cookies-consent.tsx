'use client'; // Asegúrate de que esto esté en la parte superior del archivo

import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [consent, setConsent] = useState(false);

  // Verificar si el usuario ya ha dado su consentimiento previamente
  useEffect(() => {
    const consentGiven = localStorage.getItem('cookieConsent');
    if (consentGiven) {
      setConsent(true);
      enableCookies();
    }
  }, []);

  // Manejar la aceptación de cookies
  const handleAccept = () => {
    setConsent(true);
    localStorage.setItem('cookieConsent', 'true');
    enableCookies();
  };

  // Función para habilitar cookies de seguimiento o analíticas
  const enableCookies = () => {
    // Aquí puedes habilitar otras cookies o scripts de seguimiento
    console.log('Cookies habilitadas');
  };

  // No mostrar el banner si el usuario ya ha dado su consentimiento
  if (consent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-800 text-white">
      <p>
        Usamos cookies para mejorar tu experiencia en nuestro sitio web y para
        mostrar anuncios personalizados. Al continuar navegando, aceptas el uso
        de cookies.{' '}
        <button className="underline" onClick={handleAccept}>
          Aceptar
        </button>
      </p>
    </div>
  );
};

export default CookieConsent;
