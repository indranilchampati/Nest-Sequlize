import { Module } from '@nestjs/common';
import { CustomerService } from './modules/customer/customer.service';
import { CustomerController } from './modules/customer/customer.controller';
import { CustomerModule } from './modules/customer/customer.module';
import { DatabaseModule } from './database/databaseModule/database.module';

@Module({
  imports: [CustomerModule,DatabaseModule],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class AppModule {}
