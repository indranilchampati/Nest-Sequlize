import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Customer } from '../../modules/customer/customer.models';

@Module({
  imports: [SequelizeModule.forFeature([Customer])],
})
export class DatabaseModule {}
