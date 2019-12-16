import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pokemon')
export class ProductsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 500, unique: true })
  name: string;

  @Column('varchar', { length: 500 })
  description: string;

  @Column('numeric')
  price: number;

  @Column('varchar', { length: 500 })
  imageUrl: string;

  @Column('boolean')
  active: boolean;
}
