import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionController } from './transaction.controller';
import { TransactionRepo } from './transaction.repo';
import { TransactionService } from './transaction.service';

@Module({
  imports: [ TypeOrmModule.forFeature([TransactionRepo]) ],
  controllers: [ TransactionController ],
  providers: [ TransactionService ]
})
export class TransactionModule {}
