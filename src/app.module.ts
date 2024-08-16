import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transactions } from './entities/transaction.entity';
import { TransactionService } from './transaction/transaction.service';
import { TransactionsController } from './transaction/transaction.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'admin',
      password: '1111',
      database: 'postgres',
      entities: [Transactions],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Transactions]),
  ],
  controllers: [TransactionsController],
  providers: [TransactionService],
})
export class AppModule {}
