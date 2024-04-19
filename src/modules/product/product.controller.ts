import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from 'src/dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getAll() {
    return this.productService.getAll();
  }

  @Get('/:id')
  get(@Param('id') id: number) {
    return this.productService.get(id);
  }

  @Post()
  create(@Body(new ValidationPipe()) body: ProductDto) {
    return this.productService.create(body);
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() body) {
    return this.productService.update(id, body);
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.productService.delete(id);
  }
}
