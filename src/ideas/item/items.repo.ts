import { EntityRepository, Repository } from 'typeorm';
import { Items } from './items.entity';

@EntityRepository(Items)
export class ItemsRepo extends Repository<Items> {

}
