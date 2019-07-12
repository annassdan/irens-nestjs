import { Module } from '@nestjs/common';
import { WarehouseService } from './warehouse.service';
import { WarehouseController } from './warehouse.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WarehouseRepo } from './warehouse.repo';

@Module({
  imports: [TypeOrmModule.forFeature([WarehouseRepo])],
  controllers: [WarehouseController],
  providers: [WarehouseService]
})
export class WarehouseModule {}
