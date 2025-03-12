import { Injectable } from '@nestjs/common';
import { Order } from './orders.model';

@Injectable()
export class OrdersRepository {
  async create(orderData: Partial<Order>): Promise<Order> {
    return await Order.create(orderData);
  }

  async findAll(): Promise<Order[]> {
    return await Order.findAll();
  }

  async findById(id: number): Promise<Order | null> {
    return await Order.findByPk(id);
  }

  async update(id: number, updateData: Partial<Order>): Promise<Order | null> {
    const order = await this.findById(id);
    if (order) {
      return await order.update(updateData);
    }
    return null;
  }

  async delete(id: number): Promise<void> {
    const order = await this.findById(id);
    if (order) {
      await order.destroy();
    }
  }
}
