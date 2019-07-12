import { Module } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeopleRepo } from './people.repo';

@Module({
  imports: [TypeOrmModule.forFeature([PeopleRepo])],
  providers: [PeopleService],
  controllers: [PeopleController]
})
export class PeopleModule {}
