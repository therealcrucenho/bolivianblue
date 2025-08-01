import {
    Card,
    Title,
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionList,
    List,
    Text,
    ListItem,
  } from '@tremor/react';
import { getBankFees } from '../../lib/getBankFees';

  export default async function DebitCardFees() {
    // const bankFees = await getBankFees();
    return (
      <Card className="mt-8">
      <Title>Cobros por compras POS/INTERNET en el exterior</Title>
      <Text className="mt-4 text-center">
        Esta información estará disponible pronto.
      </Text>
    </Card>
    );
  }