import { ConfigService } from '@nestjs/config';
import { TypegooseModuleOptions } from 'nestjs-typegoose';

export const getMongoConfig = async (
  configService: ConfigService,
): Promise<TypegooseModuleOptions> => {
  return {
    uri: getMongoString(configService),
    // ...getMongoOptions(),
  };
};

const getMongoString = (configService: ConfigService) =>
  'mongodb+srv://vovasvidi:OxUzvm6arepupnpo@cluster69.0nfk51j.mongodb.net/?retryWrites=true&w=majority&ssl=true';
/*
  'mongodb+srv://' +
  configService.get('MONGO_LOGIN') +
  ':' +
  configService.get('MONGO_PASSWORD') +
  '@' +
  configService.get('MONGO_HOST') +
  '/' +
  configService.get('MONGO_DB_NAME') +
  '?' +
  configService.get('MONGO_DB_CONNECT_PROPERTY');
*/
// const getMongoOptions = () => ({});
