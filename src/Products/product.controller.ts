import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get()
  findProducts() {
    return this.productService.getProducts();
  }
  @Post()
  newProduct(@Body() product) {
    return this.productService.addProduct(product);
  }
}
