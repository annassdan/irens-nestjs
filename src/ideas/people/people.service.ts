import { Injectable } from '@nestjs/common';
import { PeopleRepo } from './People.repo';
import { People } from './People.entity';
import { DeleteResult, FindManyOptions } from 'typeorm';

@Injectable()
export class PeopleService {
  constructor(private readonly repo: PeopleRepo) {}

  post = (e: People): Promise<People> => this.repo.save(e);

  postAll = (es: People[]): Promise<People[]> => this.repo.save(es);

  deleteById = (id: any): Promise<DeleteResult> => this.repo.delete(id);

  findOne = (id: any): Promise<People | undefined> => this.repo.findOne(id);

  findAll = (options?: FindManyOptions<People>): Promise<People[]> => this.repo.find(
    options
      ? { order: { createdAt: 'DESC' } }
      : { order: { createdAt: 'DESC' }, ...options }
  );
}
