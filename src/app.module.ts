import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import config from 'config/config';
import { CustomerModule } from './customers/customers.module';
@Module({
  imports: [MongooseModule.forRoot(`mongodb+srv://${config.database.DB_USERNAME}:${config.database.DB_PASSWORD}@customers.jlfz2cl.mongodb.net/?retryWrites=true&w=majority`), CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
