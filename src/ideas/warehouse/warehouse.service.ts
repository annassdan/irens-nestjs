import { Injectable } from '@nestjs/common';
import { Warehouse } from './warehouse.entity';
import { DeleteResult, FindManyOptions } from 'typeorm';
import { WarehouseRepo } from './warehouse.repo';

@Injectable()
export class WarehouseService {
  constructor(private readonly repo: WarehouseRepo) {}

  post = (e: Warehouse): Promise<Warehouse> => this.repo.save(e);

  postAll = (es: Warehouse[]): Promise<Warehouse[]> => this.repo.save(es);

  deleteById = (id: any): Promise<DeleteResult> => this.repo.delete(id);

  findOne = (id: any): Promise<Warehouse | undefined> => this.repo.findOne(id);


  findAll = (options?: FindManyOptions<Warehouse>): Promise<Warehouse[]> => this.repo.find(
    options
      ? { order: { createdAt: 'DESC' } }
      : { order: { createdAt: 'DESC' }, ...options }
  );
  
  
}
