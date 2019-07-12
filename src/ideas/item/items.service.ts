import { Injectable } from '@nestjs/common';
import { Items } from './items.entity';
import { DeleteResult, FindManyOptions } from 'typeorm';
import { ItemsRepo } from './items.repo';

@Injectable()
export class ItemsService {
  constructor(private readonly repo: ItemsRepo) {}

  post = (e: Items): Promise<Items> => this.repo.save(e);

  postAll = (es: Items[]): Promise<Items[]> => this.repo.save(es);

  deleteById = (id: any): Promise<DeleteResult> => this.repo.delete(id);

  findOne = (id: any): Promise<Items | undefined> => this.repo.findOne(id);

  findAll = (options?: FindManyOptions<Items>): Promise<Items[]> => this.repo.find(options);

}
