import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductsModule } from './modules/products/products.module';
import { OrdersModule } from './modules/orders/orders.module';
import { CustomerModule } from './modules/customer/customer.module';
import { Product } from './modules/products/products.model';
import { Order } from './modules/orders/orders.model';
import { Customer } from './modules/customer/customer.models';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin123',
      database: 'nest',
      models: [Product, Order, Customer],
    }),
    ProductsModule,
    OrdersModule,
    CustomerModule,
  ],
})
export class AppModule {}
