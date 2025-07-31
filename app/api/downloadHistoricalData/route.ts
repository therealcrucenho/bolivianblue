import { NextRequest, NextResponse } from 'next/server';
import { DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb';

const getDynamoResult = async () => {
  const AccessKeyId = process.env.AWS_ACCESS_KEY_ID as string;
  const SecretKey = process.env.AWS_SECRET_ACCESS_KEY as string;
  const client = new DynamoDBClient({
    region: 'sa-east-1',
    credentials: {
      accessKeyId: AccessKeyId,
      secretAccessKey: SecretKey,
    },
  });

  const params = {
    TableName: 'exchangeRate',
  };

  const command = new ScanCommand(params);
  const response = await client.send(command);
  if (!response.Items) {
    throw new Error('No data found');
  }

  return response.Items;
};

const extractDynamoDBValues = (data: any[]) => {
  return data.map(item => {
    const result: any = {};
    for (const key in item) {
      if ((key !== 'date' && key !== 'timestamp')) {
          if (item[key].S !== undefined) {
          result[key] = item[key].S;
        } else if (item[key].N !== undefined) {
          result[key] = parseFloat(item[key].N);
        }
      }
    }
    return result;
  });
};

const convertToCSV = (data: any[]) => {
  const keys = Object.keys(data[0]);
  // order by data[3]
const sortedExchangeRates = data.sort((a, b) => {
  const dateA = new Date(a.exchange);
  const dateB = new Date(b.exchange);
  return dateA.getTime() - dateB.getTime();
});


  const csvRows = sortedExchangeRates.map(row => {
    return keys.map(key => {
      const value = row[key];
      if (typeof value === 'object') {
        return JSON.stringify(value);
      }
      return value;
    }).join(',');
  });

  return [keys.join(','), ...csvRows].join('\n');
};

export async function GET(req: NextRequest) {
  try {
    const rawData = await getDynamoResult();
    const data = extractDynamoDBValues(rawData);
    const csv = convertToCSV(data);
    
    return new NextResponse(csv, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename="exchangeRateData.csv"',
      },
    });
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
