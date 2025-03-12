import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  async getAllOrders() {
    return await this.ordersService.getAllOrders();
  }

  @Post()
  async createOrder(
    @Body()
    orderData: {
      customer_id: number;
      product_id: number;
      quantity: number;
    },
  ) {
    return await this.ordersService.createOrder(orderData);
  }
}
