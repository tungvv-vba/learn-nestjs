import { Role } from 'src/types';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
@Entity('user')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  username: string;

  @Column()
  fullName: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    default: Role.USER,
    enum: Role,
  })
  role: string;
}
