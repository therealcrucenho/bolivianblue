'use client';
import { Card, AreaChart, Title, Text } from '@tremor/react';
import ButtonDownloadClient from './button-download-client/button-download-client';

const data = [
  {
    Month: 'Jan 21',
    Sales: 2890,
    Profit: 2400
  },
  {
    Month: 'Feb 21',
    Sales: 1890,
    Profit: 1398
  },
  {
    Month: 'Jan 22',
    Sales: 3890,
    Profit: 2980
  }
];
type Props = {
  data: Boliviano[];
};

export default function Chart({ data }: Props) {
  return (
    <Card className="mt-8">
      <Title>Evolución sobre el tiempo</Title>
      <Text>Boliviano Blue sobre el tiempo</Text>
      <AreaChart
        className="mt-4 h-80"
        data={data}
        categories={['compra', 'venta']}
        index="date"
        colors={['lime', 'green']}
        yAxisWidth={100}
        valueFormatter={(number: number) =>
          `Bs ${Intl.NumberFormat('us').format(number).toString()}`
        }
        minValue={6.85}
      />
      <ButtonDownloadClient />
    </Card>
  );
}
