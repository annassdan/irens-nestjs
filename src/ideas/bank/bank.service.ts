import { Injectable } from '@nestjs/common';
import { BankRepo } from './bank.repo';
import { DeleteResult, FindManyOptions } from 'typeorm';
import { Bank } from './bank.entity';

@Injectable()
export class BankService  {
  constructor(private readonly repo: BankRepo) {}

  post = (e: Bank): Promise<Bank> => this.repo.save(e);

  postAll = (es: Bank[]): Promise<Bank[]> => this.repo.save(es);

  deleteById = (id: any): Promise<DeleteResult> => this.repo.delete(id);

  findOne = (id: any): Promise<Bank | undefined> => this.repo.findOne(id);

  findAll = (options?: FindManyOptions<Bank>): Promise<Bank[]> => this.repo.find(
    options
      ? { order: { createdAt: 'DESC' } }
      : { order: { createdAt: 'DESC' }, ...options }
  );

}
