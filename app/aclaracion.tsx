'use client';
import { Card, Title, Text } from '@tremor/react';

export default function Aclaracion() {
  return (
    <Card className="mt-8">
      <Title>Aclaración</Title>
      <Text>Los datos obtenidos muestran la estimación del precio del dólar Americano en relación al Boliviano.</Text>
      <Text>Esto se hace obteniendo una media de precios del dolar crypto.</Text>
      <Text>Tenga en consideración que este es un valor de referencia.</Text>
    </Card>
  );
}
