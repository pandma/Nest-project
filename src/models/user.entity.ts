import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity({ name: 'User' })
export abstract class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 300 })
  name: string;

  @Column({ type: 'varchar', length: 300 })
  email: string;

  @Column({ type: 'varchar', length: 300 })
  username: string;
}
