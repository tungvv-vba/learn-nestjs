import { IsNotEmpty, IsNumber } from 'class-validator';
export class ProductDto {
  id: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  description: string;
}
