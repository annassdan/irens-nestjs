import { EntityRepository, Repository } from 'typeorm';
import { People } from './people.entity';

@EntityRepository(People)
export class PeopleRepo extends Repository<People>{
}
