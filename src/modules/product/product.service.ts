import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductDto } from 'src/dto';
import { ProductEntity } from 'src/entities';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}

  async getAll() {
    return this.productRepository.find();
  }

  async get(id: ProductDto['id']) {
    return this.productRepository.findBy({
      id,
    });
  }

  async create(newProduct: ProductDto) {
    const product = this.productRepository.create(newProduct);
    return this.productRepository.save(product);
  }

  async update(id: ProductDto['id'], newProduct: ProductDto) {
    await this.productRepository.update(id, newProduct);
    return this.productRepository.findBy({
      id,
    });
  }

  async delete(id: ProductDto['id']) {
    await this.productRepository.delete(id);
  }
}
