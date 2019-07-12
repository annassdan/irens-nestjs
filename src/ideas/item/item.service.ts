import { Injectable } from '@nestjs/common';
import { Item } from '../Item/Item.entity';
import { DeleteResult, FindManyOptions } from 'typeorm';
import { ItemRepo } from './item.repo';

@Injectable()
export class ItemService {
  constructor(private readonly repo: ItemRepo) {}

  post = (e: Item): Promise<Item> => this.repo.save(e);

  postAll = (es: Item[]): Promise<Item[]> => this.repo.save(es);

  deleteById = (id: any): Promise<DeleteResult> => this.repo.delete(id);

  findOne = (id: any): Promise<Item | undefined> => this.repo.findOne(id);

  findAll = (options?: FindManyOptions<Item>): Promise<Item[]> => this.repo.find(options);

}
