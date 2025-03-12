import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Customer } from './customer.models';

@Injectable()
export class CustomerRepository {
  constructor(
    @InjectModel(Customer)
    private readonly customerModel: typeof Customer,
  ) {}

  async create(customerData: any): Promise<Customer> {
    return this.customerModel.create(customerData);
  }

  async findAll(): Promise<Customer[]> {
    return this.customerModel.findAll();
  }

  async findById(customerId: number): Promise<Customer | null> {
    return this.customerModel.findByPk(customerId);
  }

  async update(customerId: number, customerData: any): Promise<Customer> {
    const customer = await this.findById(customerId);
    if (!customer) throw new Error('Customer not found');
    return customer.update(customerData);
  }

  async delete(customerId: number): Promise<void> {
    const customer = await this.findById(customerId);
    if (!customer) throw new Error('Customer not found');
    await customer.destroy();
  }
}
