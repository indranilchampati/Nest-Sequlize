import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Customer } from '../models/Customer';
 // import { Order } from '../models/order.model';
 // import { CustomerOrder } from '../models/customer-order.model';



@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin123',
      database: 'nest',
      models: [Customer],
      // , Order, CustomerOrder],
    }),
  ],
  exports: [SequelizeModule],
})
export class DatabaseModule {}
