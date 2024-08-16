import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transactions } from 'src/entities/transaction.entity';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transactions)
    private transactionsRepository: Repository<Transactions>,
  ) {}

  async findAll(page: number, limit: number): Promise<Transactions[]> {
    if (page < 1 || limit < 1) {
      throw new BadRequestException('Page and limit must be greater than 0');
    }

    const [result] = await this.transactionsRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });

    if (result.length === 0) {
      throw new BadRequestException('Page exceeds available transactions');
    }

    return result;
  }

  async findOne(id: number): Promise<Transactions> {
    const transaction = await this.transactionsRepository.findOne({
      where: { id },
    });
    if (!transaction) {
      throw new NotFoundException(`Transaction with ID ${id} not found`);
    }
    return transaction;
  }

  async delete(id: number): Promise<void> {
    const result = await this.transactionsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Transaction with ID ${id} not found`);
    }
  }

  async update(
    id: number,
    updateData: Partial<Transactions>,
  ): Promise<Transactions> {
    const transaction = await this.transactionsRepository.findOne({
      where: { id },
    });

    if (!transaction) {
      throw new NotFoundException(`Transaction with ID ${id} not found`);
    }

    Object.assign(transaction, updateData);
    await this.transactionsRepository.save(transaction);

    return transaction;
  }

  async insertData(): Promise<void> {
    const transactions = [];
    for (let i = 0; i <= 50; i++) {
      const transaction = this.transactionsRepository.create({
        name: `foo${i}`,
        method: 'exampleMethod',
        amount: 50.0 + i,
        status: 'pending',
      });
      transactions.push(transaction);
    }
    await this.transactionsRepository.save(transactions);
    console.log('Transactions have been saved to the database.');
  }
}
