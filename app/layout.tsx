import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Nav from './nav';
import { Suspense } from 'react';
import GoogleAdsense from './GoogleAdsense';

export const metadata = {
  title: 'Boliviano Dolar Blue - Precio del Dolar Blue en Bolivia',
  description:
    'Precio del dolar Blue en Bolivia, Boliviano Blue,precio dolar blue bolivia hoy, actualizado cada hora. Información confiable y precisa para tus necesidades financieras.',
  keywords:
    'dólar blue, boliviano blue, Bolivia, dolar boliviano precio, dolar paralelo, cambio de moneda, dólar en la calle',
  author: 'Boliviano Blue Team',
  viewport: 'width=device-width, initial-scale=1.0'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="h-full bg-gray-50">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content={metadata.viewport} />
        <link rel="canonical" href="https://www.bolivian-blue.com" />
        <link rel="icon" href="/logo.png" type="image/x-icon" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bolivian-blue.com" />
        <meta
          property="og:image"
          content="https://www.bolivian-blue.com/logo.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta
          name="twitter:image"
          content="https://www.bolivian-blue.com/logo.png"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              url: 'https://www.bolivian-blue.com',
              logo: 'https://www.bolivian-blue.com/logo.png'
            })
          }}
        />
      </head>
      <body className="h-full">
        <Suspense fallback={<div>Loading...</div>}>
          <Nav />
        </Suspense>
        {children}
        <Analytics />
        <GoogleAdsense />
      </body>
    </html>
  );
}
