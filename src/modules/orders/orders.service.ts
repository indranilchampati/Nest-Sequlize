import { Injectable } from '@nestjs/common';

import { Customer } from '../customer/customer.models';
import { Order } from './orders.model';
import { Product } from '../../modules/products/products.model';

@Injectable()
export class OrdersService {
  async createOrder(orderData: {
    customer_id: number;
    product_id: number;
    quantity: number;
  }) {
    const { customer_id, product_id, quantity } = orderData;

    const product = await Product.findByPk(product_id);
    if (!product) throw new Error('Product not found');

    const customer = await Customer.findByPk(customer_id);
    if (!customer) throw new Error('Customer not found');

    const order = await Order.create({
      customer_id,
      customer_name: customer.name,
      order_date: new Date(),
      product_name: product.name,
      total: product.price * quantity,
    });

    return order;
  }

  async getAllOrders() {
    return await Order.findAll({});
  }
}
