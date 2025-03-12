import { Module } from '@nestjs/common';
import { CustomerRepository } from './customer.repository'; // Import CustomerRepository

import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Customer } from './customer.models';

@Module({
  imports: [SequelizeModule.forFeature([Customer])],
  controllers: [CustomerController],
  providers: [CustomerService, CustomerRepository],
  exports: [CustomerRepository],
})
export class CustomerModule {}
