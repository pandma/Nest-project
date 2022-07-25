import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity({ name: 'Product' })
export abstract class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 300 })
  name: string;

  @Column({ type: 'varchar', length: 300 })
  description: string;

  @Column({ type: 'varchar', length: 300 })
  price: number;
}
