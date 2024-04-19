import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRegisterDto } from 'src/dto';
import { UserEntity } from 'src/entities';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  findAll() {
    return this.userRepository.find();
  }

  findOne(body) {
    return this.userRepository.findOneBy(body);
  }

  create(body: UserRegisterDto) {
    const newUser = this.userRepository.create(body);
    return this.userRepository.save(newUser);
  }
}
