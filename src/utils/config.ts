import dotenv from 'dotenv';
// @ts-expect-error, js lib
import treeify from 'object-treeify';

import { nodeEnvValues } from '../schemas/config';

import type { ConfigSchemaType, ConfigType } from '../types/config';

/*------------------ load .env file -----------------*/

const NODE_ENV = process.env.NODE_ENV;

if (!nodeEnvValues.includes(NODE_ENV)) {
  console.error('Invalid process.env.NODE_ENV: ', NODE_ENV);
  throw new Error('Invalid process.env.NODE_ENV');
}

const envFileName = `.env.${NODE_ENV}`;
dotenv.config({ path: envFileName });

/*------------------ validation -----------------*/

export const validateConfig = (
  config: ConfigType,
  schema: ConfigSchemaType,
  isDebug = true
): ConfigType => {
  const parsedConfig = schema.safeParse(config);

  if (!parsedConfig.success) {
    console.error('Invalid config: ', parsedConfig.error.flatten().fieldErrors);
    throw new Error('Invalid config');
  }

  const { data: parsedConfigData } = parsedConfig;

  if (isDebug) {
    const stringData = treeify(parsedConfigData);
    console.log('parsedConfigData:\n\n' + stringData);
  }

  return parsedConfigData;
};
