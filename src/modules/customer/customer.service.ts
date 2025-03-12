
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Customer } from './customer.models';
// import Customer from '@app/database/models/Customer';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer)
    private readonly customerModel: typeof Customer,
  ) {}

  async createCustomer(customerData: any): Promise<any> {
    try {
      const newCustomer = await this.customerModel.create(customerData);
      return newCustomer;
    } catch (error) {
      console.error(`Error creating customer: ${error.message}`);
      throw error;
    }
  }

  async getAllCustomer(): Promise<any> {
    try {
      return await this.customerModel.findAll();
    } catch (error) {
      console.error(`Error fetching customers: ${error.message}`);
      throw error;
    }
  }

  async updateCustomer(customerData: any): Promise<any> {
    try {
      const customer = await this.customerModel.findByPk(customerData.id);
      if (!customer) throw new Error('Customer not found');
      await customer.update(customerData);
      return customer;
    } catch (error) {
      console.error(`Error updating customer: ${error.message}`);
      throw error;
    }
  }

  async deleteCustomer(customerId: any): Promise<any> {
    try {
      const customer = await this.customerModel.findByPk(customerId);
      if (!customer) throw new Error('Customer not found');
      await customer.destroy();
      return { message: 'Customer deleted successfully' };
    } catch (error) {
      console.error(`Error deleting customer: ${error.message}`);
      throw error;
    }
  }
}