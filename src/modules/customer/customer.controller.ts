import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Put,
  Query,
  Req,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Post('createCustomer')
  @HttpCode(HttpStatus.OK)
  public customer(@Body() configs: any): Promise<any> {
    return this.customerService.createCustomer(configs);
  }

  @Get('getAllCustomer')
  @HttpCode(HttpStatus.OK)
  public async fetchCustomers(): Promise<any> {
    return this.customerService.getAllCustomer();
  }

  @Put('updateCustomer')
  @HttpCode(HttpStatus.OK)
  public async updateCustomer(
    @Query() configs: any,
    @Req() request: any,
  ): Promise<any> {
    return this.customerService.updateCustomer(configs);
  }

  @Delete('deleteCustomer')
  @HttpCode(HttpStatus.OK)
  public async deleteCustomer(
    @Query() configs: any,
    @Req() request: any,
  ): Promise<any> {
    return this.customerService.deleteCustomer(configs);
  }
}
