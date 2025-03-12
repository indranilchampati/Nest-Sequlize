import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  async getAllCustomers() {
    return this.customerService.getAllCustomer();
  }

  @Post()
  async createCustomer(@Body() customerData: any) {
    return this.customerService.createCustomer(customerData);
  }

  @Put(':id')
  async updateCustomer(@Param('id') id: number, @Body() customerData: any) {
    return this.customerService.updateCustomer(id, customerData);
  }

  @Delete(':id')
  async deleteCustomer(@Param('id') id: number) {
    return this.customerService.deleteCustomer(id);
  }
}
