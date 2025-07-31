// Using AWS dynamo SDK I got the elements
import {
  DynamoDBClient,
  QueryCommand,
  ScanCommand,
  ScanCommandOutput,
  BatchGetItemCommand,
} from '@aws-sdk/client-dynamodb';
import { cache } from 'react';
export const revalidate = 2 // revalidate the data at most every hour

export const getDynamoResult = cache(async () => {
  const AccessKeyId = process.env.AWS_ACCESS_KEY_ID as string,
    SecretKey = process.env.AWS_SECRET_ACCESS_KEY as string;
  const client = new DynamoDBClient({
    region: 'sa-east-1',
    credentials: {
      accessKeyId: AccessKeyId,
      secretAccessKey: SecretKey
    }
  });

  const params2 = {
    TableName: 'exchangeRate',
    KeyConditionExpression: 'exchange = :id',
    ExpressionAttributeValues: {
      ':id': { S: new Date().toISOString().split('T')[0] }
    },
    Limit: 1,
  ScanIndexForward : false
  };

  const today = new Date().toISOString().split('T')[0];
  // getting the info of the last 10 days using batchGetItem
  const parameters = {
    RequestItems: {
      exchangeRate: {
        Keys: [
          { exchange: { S: new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().split('T')[0] } },
          { exchange: { S: new Date(new Date().setDate(new Date().getDate() - 2)).toISOString().split('T')[0] } },
          { exchange: { S: new Date(new Date().setDate(new Date().getDate() - 3)).toISOString().split('T')[0] } },
          { exchange: { S: new Date(new Date().setDate(new Date().getDate() - 4)).toISOString().split('T')[0] } },
          { exchange: { S: new Date(new Date().setDate(new Date().getDate() - 5)).toISOString().split('T')[0] } },
          { exchange: { S: new Date(new Date().setDate(new Date().getDate() - 6)).toISOString().split('T')[0] } },
          { exchange: { S: new Date(new Date().setDate(new Date().getDate() - 7)).toISOString().split('T')[0] } },
          { exchange: { S: new Date(new Date().setDate(new Date().getDate() - 8)).toISOString().split('T')[0] } },
          { exchange: { S: new Date(new Date().setDate(new Date().getDate() - 9)).toISOString().split('T')[0] } },
          { exchange: { S: new Date(new Date().setDate(new Date().getDate() - 10)).toISOString().split('T')[0] } },
          { exchange: { S: new Date(new Date().setDate(new Date().getDate() - 11)).toISOString().split('T')[0] } },
          { exchange: { S: new Date(new Date().setDate(new Date().getDate() - 12)).toISOString().split('T')[0] } },
          { exchange: { S: new Date(new Date().setDate(new Date().getDate() - 13)).toISOString().split('T')[0] } },
          { exchange: { S: new Date(new Date().setDate(new Date().getDate() - 14)).toISOString().split('T')[0] } },
          { exchange: { S: new Date(new Date().setDate(new Date().getDate() - 15)).toISOString().split('T')[0] } },
          { exchange: { S: new Date(new Date().setDate(new Date().getDate() - 16)).toISOString().split('T')[0] } },
          { exchange: { S: new Date(new Date().setDate(new Date().getDate() - 17)).toISOString().split('T')[0] } },
          { exchange: { S: new Date(new Date().setDate(new Date().getDate() - 18)).toISOString().split('T')[0] } },
          { exchange: { S: new Date(new Date().setDate(new Date().getDate() - 19)).toISOString().split('T')[0] } },
          { exchange: { S: new Date(new Date().setDate(new Date().getDate() - 20)).toISOString().split('T')[0] } },
          { exchange: { S: new Date(new Date().setDate(new Date().getDate() - 21)).toISOString().split('T')[0] } },

        ],
      },
    },
  };
  const command = new BatchGetItemCommand(parameters);
  const response = await client.send(command);
  // console.log(response);
  const command2 = new QueryCommand(params2);
  const response2 = await client.send(command2);
  // console.log(response2);
  if (response2.Items === undefined) {
    throw new Error('No data found');
  }
  return {
    dataNow: response2.Items[0],
    dataBefore: response.Responses?.exchangeRate ? response.Responses.exchangeRate : [],
  };
});