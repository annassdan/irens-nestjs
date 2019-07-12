import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankModule } from './ideas/bank/bank.module';
import { TransactionModule } from './ideas/transaction/transaction.module';
import { WarehouseModule } from './ideas/warehouse/warehouse.module';
import { ItemModule } from './ideas/item/item.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    BankModule,
    TransactionModule,
    WarehouseModule,
    ItemModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // constructor(private readonly connection: Connection) {}
}
