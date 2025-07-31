import { DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb';
import { unmarshall } from '@aws-sdk/util-dynamodb';
import { cache } from 'react';

export const getBankFees = cache(async () => {
  // creating client for dynamoDB
  const AccessKeyId = process.env.AWS_ACCESS_KEY_ID as string,
    SecretKey = process.env.AWS_SECRET_ACCESS_KEY as string;
  const client = new DynamoDBClient({
    region: 'sa-east-1',
    credentials: {
      accessKeyId: AccessKeyId,
      secretAccessKey: SecretKey
    }
  });
  const params = {
    TableName: 'Banks',
    ProjectExpression: 'name, unique_name,tarifario'
  };
  const data = await client.send(new ScanCommand(params));
  return data.Items?.map((item) => unmarshall(item));
});
