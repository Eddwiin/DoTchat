import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
      context: ({ req }) => ({ req })
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) =>
       ({
        type: 'mongodb',
        host: configService.get('DATABASE_HOST'),
        port: +configService.get('DATABASE_PORT'),
        database: configService.get('DATABASE_NAME'),
        entities: [join(__dirname, '**/**.entity{.ts,.js}')],
        synchronize: !!+configService.get('DATABASE_SYNCHRONIZE'),
        useNewUrlParser: !!+configService.get('DATABASE_NEW_URL_PARSER'),
        logging: !!+configService.get('DATABASE_LOGGING'),
        useUnifiedTopology: !!+configService.get('DATABASE_UNIFIED_TOPOLOGY'),
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
