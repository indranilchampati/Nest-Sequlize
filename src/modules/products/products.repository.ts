import { Injectable } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsRepository {
  async create(productData: Partial<Product>): Promise<Product> {
    return await Product.create(productData);
  }

  async findAll(): Promise<Product[]> {
    return await Product.findAll();
  }

  async findById(id: number): Promise<Product | null> {
    return await Product.findByPk(id);
  }

  async update(
    id: number,
    updateData: Partial<Product>,
  ): Promise<Product | null> {
    const product = await this.findById(id);
    if (product) {
      return await product.update(updateData);
    }
    return null;
  }

  async delete(id: number): Promise<void> {
    const product = await this.findById(id);
    if (product) {
      await product.destroy();
    }
  }
}
