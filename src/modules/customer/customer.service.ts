import { Injectable } from '@nestjs/common';
import { CustomerRepository } from './customer.repository';
@Injectable()
export class CustomerService {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async getAllCustomer(): Promise<any> {
    try {
      return await this.customerRepository.findAll();
    } catch (error) {
      console.error(`Error fetching customers: ${error.message}`);
      throw error;
    }
  }

  async createCustomer(customerData: any): Promise<any> {
    try {
      const newCustomer = await this.customerRepository.create(customerData);
      return newCustomer;
    } catch (error) {
      console.error(`Error creating customer: ${error.message}`);
      throw error;
    }
  }

  async updateCustomer(customerId: number, customerData: any): Promise<any> {
    try {
      const customer = await this.customerRepository.findById(customerId);
      if (!customer) throw new Error('Customer not found');
      await customer.update(customerData);
      return customer;
    } catch (error) {
      console.error(`Error updating customer: ${error.message}`);
      throw error;
    }
  }

  async deleteCustomer(customerId: number): Promise<any> {
    try {
      const customer = await this.customerRepository.findById(customerId);
      if (!customer) throw new Error('Customer not found');
      await customer.destroy();
      return { message: 'Customer deleted successfully' };
    } catch (error) {
      console.error(`Error deleting customer: ${error.message}`);
      throw error;
    }
  }
}
