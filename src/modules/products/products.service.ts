import { Injectable } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  async getProductById(id: number): Promise<Product | null> {
    return await Product.findByPk(id);
  }

  async getAllProducts(): Promise<Product[]> {
    return await Product.findAll();
  }

  async createProduct(productData: {
    name: string;
    price: number;
    description?: string;
  }): Promise<Product> {
    return await Product.create(productData);
  }
}
