"use client";

import { useEffect, useRef } from 'react';

const AdSense = () => {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    const loadAds = () => {
      if (adRef.current && !(adRef.current as any).hasAds) {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          (adRef.current as any).hasAds = true; // Marcar que este elemento ya tiene anuncios
        } catch (e) {
          console.error('Adsbygoogle push error:', e);
        }
      }
    };

    if (typeof window !== 'undefined') {
      if (!window.adsbygoogle) {
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4504747702894199';
        script.crossOrigin = 'anonymous';
        script.onload = loadAds;
        document.body.appendChild(script);
      } else {
        loadAds();
      }
    }
  }, []);

  return (
    <ins
      ref={adRef}
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-4504747702894199"
      data-ad-slot="7727936187"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default AdSense;
