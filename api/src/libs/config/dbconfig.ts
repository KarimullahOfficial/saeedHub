 import { ConfigService } from '@nestjs/config';
import { MongooseModuleFactoryOptions } from '@nestjs/mongoose';

export const getDatabaseConfig = (configService: ConfigService): MongooseModuleFactoryOptions => {
  const uri = configService.get<string>('MONGODB_URI');
  
  if (!uri) {
    throw new Error(
      'MONGODB_URI is not defined in environment variables. ' +
      'Please check your .env file and make sure it contains MONGODB_URI.'
    );
  }

  return {
    uri,
    retryWrites: true,
    w: 'majority' as const,
  };
};
