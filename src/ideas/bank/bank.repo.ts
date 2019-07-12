import { EntityRepository, Repository } from 'typeorm';
import { Bank } from './bank.entity';

@EntityRepository(Bank)
export class BankRepo extends Repository<Bank> {
}
