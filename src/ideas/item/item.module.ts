import { Module } from '@nestjs/common';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemRepo } from './item.repo';

@Module({
  imports: [TypeOrmModule.forFeature([ItemRepo])],
  controllers: [ItemController],
  providers: [ItemService]
})
export class ItemModule {}
