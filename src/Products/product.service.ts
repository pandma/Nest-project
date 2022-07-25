import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/models/product.entity';
import { Repository } from 'typeorm';
import { productInterface } from 'src/interfaces/product.interface';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productData: Repository<Product>,
  ) {}

  getProducts() {
    return this.productData.find();
  }
  addProduct(product: productInterface) {
    try {
      this.productData.save(product);
      return { message: 'product saved' };
    } catch (error) {
      console.error(error);
    }
  }
}
