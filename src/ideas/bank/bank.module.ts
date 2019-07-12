import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankRepo } from './bank.repo';
import { BankService } from './bank.service';
import { BankController } from './bank.controller';

@Module({
  imports: [ TypeOrmModule.forFeature([BankRepo]) ],
  controllers: [ BankController ],
  providers: [ BankService ]
})
export class BankModule {}
