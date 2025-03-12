import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { DatabaseModule } from '@app/database/databaseModule/database.module';
import { Customer } from './customer.models';

@Module({
  imports: [SequelizeModule.forFeature([Customer])],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
