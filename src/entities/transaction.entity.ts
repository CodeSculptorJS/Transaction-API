import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Transactions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  method: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdOn: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column({ type: 'varchar', length: 50 })
  status: string;
}
