import { Card, Metric, Text, Title, BarList, Flex, Grid } from '@tremor/react';
import Aclaracion from './aclaracion';
import Chart from './chart';
import { formatTimestamp } from '../lib/formattimestamp';
import { getDynamoResult } from '../lib/getDynamoResults';
import DebitCardFees from './card-fees/debit-card-fees';
// import AdSense from './adSense';
import Contact from './contact';
import Link from 'next/link';
import CookieConsent from './cookies-consent/cookies-consent';

export const revalidate = 2; // revalidate 

export default async function PlaygroundPage() {
  const dinamoResult = await getDynamoResult();

  const price_blue_buy = dinamoResult['dataNow'].price_blue_sell.N;
  const price_blue_sell = dinamoResult['dataNow'].price_blue_buy.N;
  const price_official_sell = dinamoResult['dataNow'].price_official_sell.N;
  const price_official_buy = dinamoResult['dataNow'].price_official_buy.N;

  let timestamp = parseInt(dinamoResult['dataNow'].timestamp.S ?? '');
  timestamp -= 4 * 60 * 60 * 1000;
  const updatedAt = 'Actualizado el ' + formatTimestamp(timestamp + '');

  const resultToMetrics = dinamoResult['dataBefore'].map((item) => {
    return {
      category: 'Boliviano Blue',
      compra: item.price_blue_sell.N ? item.price_blue_sell.N : 0,
      venta: item.price_blue_buy.N ? item.price_blue_buy.N : 0,
      date: item.exchange.S ? item.exchange.S : '0'
    };
  }).sort((a, b) => {
    return a.date.localeCompare(b.date);
  });

  const data = [
    {
      category: 'Boliviano Oficial',
      compra: price_official_buy,
      venta: price_official_sell,
      aclaracion: updatedAt
    },
    {
      category: 'Boliviano Blue',
      compra: price_blue_buy,
      venta: price_blue_sell,
      aclaracion: updatedAt
    }
  ];

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Grid numItemsSm={2} numItemsLg={2} className="gap-6">
        {data.map((item) => (
          <Card key={item.category}>
            <Title>{item.category}</Title>
            <Flex
              justifyContent="start"
              alignItems="baseline"
              className="space-x-2"
            >
              <Metric className='text-green-500'>Bs {item.compra}</Metric>
              <Text>Compra</Text>
              <Metric className='text-green-500'>Bs {item.venta}</Metric>
              <Text>Venta</Text>
            </Flex>
            <Text className='text-black-50'>{item.aclaracion}</Text>
          </Card>
        ))}
      </Grid>
      <Chart data={resultToMetrics} />
      <DebitCardFees />
      <Aclaracion />
      <Contact/>
      <div className="mt-8">
      <Link href="/politica-de-privacidad">Política de Privacidad </Link> | 
      <Link href="/politica-de-cookies"> Política de cookies</Link> | 
      <Link href="/terminos-de-servicio"> Términos y Condiciones</Link> | 
      <Link href="/contacto"> Contacto</Link> | 
      <Link href="/contribuir"> Contribuir</Link>
      
      {/* <CookieConsent/> */}
    </div>
      {/* <AdSense /> */}
    </main>
  );
}
