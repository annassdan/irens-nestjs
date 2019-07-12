import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsRepo } from './items.repo';

@Module({
  imports: [TypeOrmModule.forFeature([ItemsRepo])],
  controllers: [ItemsController],
  providers: [ItemsService]
})
export class ItemsModule {}
