import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { SequelizeModule } from '@nestjs/sequelize';
// import { Order } from '../../database/models/orders';
import { Customer } from '../../modules/customer/customer.models';
import { Order } from './orders.model';
// import { Product } from '../../modules/products/products.models';

@Module({
  imports: [SequelizeModule.forFeature([Order, Customer])],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
