import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankModule } from './ideas/bank/bank.module';
import { join } from 'path';
import { TransactionModule } from './ideas/transaction/transaction.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    BankModule,
    TransactionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // constructor(private readonly connection: Connection) {}
}
