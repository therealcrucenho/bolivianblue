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
    const bankFees = await getBankFees();
    if(!bankFees) return <></>;
    return (
      <Card className="mt-8">
        <Title>Cobros por compras POS/INTERNET en el exterior</Title>
        <AccordionList className="mt-2">
          {bankFees?.map((bankFee) => (
            <Accordion key={bankFee.unique_name}>
              <AccordionHeader className="text-sm font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                {bankFee.name}
              </AccordionHeader>
              <AccordionBody className="leading-6">
                <List>
                  <ListItem>
                    <span>Monto máximo sin comision</span>
                    <strong className='text-tremor-content-strong dark'>${bankFee.tarifario.debit_card.limit_amount.toFixed(2)}</strong>
                  </ListItem>
                  <ListItem>
                    <span >Comisión con moneda extranjera</span>
                    <strong className='text-tremor-content-strong dark'>
                      {bankFee.tarifario.debit_card.transaction_fee_usd * 100}%
                    </strong>
                  </ListItem>
                  <ListItem>
                    <span>Comisión sin moneda extranjera</span>
                    <strong className='text-tremor-content-strong dark'>
                      {bankFee.tarifario.debit_card.transaction_fee_bs
                        ? bankFee.tarifario.debit_card.transaction_fee_bs * 100 +"%"
                        : 'N/A'}
  
                    </strong>
                  </ListItem>
                  <ListItem>
                    <span>Aplicado de manera</span>
                    <strong className='text-tremor-content-strong dark'>{bankFee.tarifario.debit_card.period_length}</strong>
                  </ListItem>
                </List>
                <strong>{bankFee.tarifario.debit_card.description}</strong> 
              </AccordionBody>
            </Accordion>
          ))}
        </AccordionList>
        <Text className='mt-4' style={{fontSize:'10px'}}>
          Importante: Información obtenida de los tarifarios de los bancos,
          consulte con su banco para más información.
          <br/>
          Ultima actualización: Junio 20 2024
        </Text>
      </Card>
    );
  }