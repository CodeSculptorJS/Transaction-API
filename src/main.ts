import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransactionService } from './transaction/transaction.service';

async function bootstrap() {
  async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    const transactionService = app.get(TransactionService);
    await transactionService.insertData();
    await app.listen(8080);
  }
  bootstrap();
  console.log('Server started on PORT: 8080');
}
bootstrap();
