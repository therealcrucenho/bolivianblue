import axios from 'axios';

export default async function getBinanceResult(tradeType: string) {
  // using axios I call binance api
  const url = 'https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search';

  // cal the api with the data
  const result = await callApiResult(url, {
    asset: 'USDT',
    fiat: 'BOB',
    merchantCheck: true,
    page: 1,
    payTypes: ['BANK'],
    publisherType: null,
    rows: 15,
    tradeType
  });
/*
  {
    "price_official_buy": {"N": "6.86"},
    "price_official_sell": {"N": "6.96"},
    "price_blue_buy": {"N": "7.33"},
    "price_blue_sell": {"N": "7.75"},
    "date": {"S": "2023-12-18T00:00:00.000Z"},
    "created_at": {"S": "2023-12-15T16:58:55.398Z"}
 }

 */
  // calculate the average price the results
//   console.log(
//     parseFloat(result['data'][0]['adv']['price']) +
//       parseFloat(result['data'][1]['adv']['price'])
//   );
  const prices = result['data'].reduce(
    (accumulator: number, currentValue: any) =>
      accumulator + parseFloat(currentValue['adv']['price']),0
  );
  const averageCost = Math.round(prices / result['data'].length * 100) / 100;
  console.log(averageCost);
  return averageCost;
}

async function callApiResult(url: string, data: any) {
  const response = await axios.post(url, data);
  return response.data;
}
