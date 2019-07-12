import { Injectable } from '@nestjs/common';
import { DeleteResult, FindManyOptions } from 'typeorm';
import { TransactionRepo } from './transaction.repo';
import { Transaction } from './transaction.entity';

@Injectable()
export class TransactionService {
  constructor(private readonly repo: TransactionRepo) {}

  post = (e: Transaction): Promise<Transaction> => this.repo.save(e);

  postAll = (es: Transaction[]): Promise<Transaction[]> => this.repo.save(es);

  deleteById = (id: any): Promise<DeleteResult> => this.repo.delete(id);

  findOne = (id: any): Promise<Transaction | undefined> => this.repo.findOne(id);

  findAll = (paging?: FindManyOptions<Transaction>): Promise<Transaction[]> => this.repo.find(paging);
  
}
