import {
  Controller,
  Get,
  Param,
  Delete,
  Put,
  Query,
  Body,
} from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { Transactions } from 'src/entities/transaction.entity';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get()
  findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<Transactions[]> {
    return this.transactionService.findAll(page, limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Transactions> {
    const numId = Number(id);
    return this.transactionService.findOne(numId);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{ message: string }> {
    const numId = Number(id);
    await this.transactionService.delete(numId);
    return { message: 'Deleted successfully!' };
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateData: Partial<Transactions>,
  ): Promise<Transactions> {
    const numId = Number(id);
    return this.transactionService.update(numId, updateData);
  }
}
