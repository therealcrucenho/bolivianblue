'use client';
import { Card, Title, Text } from '@tremor/react';

export default function Contacto() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Card className="mt-8">
        <Title>Contacto</Title>
        <Text>Para consultas o sugerencias, por favor contactanos a</Text>
        <Title>contact@bolivian-blue.com</Title>
      </Card>
    </main>
  );
}
