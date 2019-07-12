import { Body, Controller, Delete, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { Transaction } from './transaction.entity';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly service: TransactionService) { }

  @Get('gets')
  async findAll(): Promise<Transaction[]> {
    return this.service.findAll();
  }

  @Get('get/:id')
  findOne(@Param('id') id: any): Promise<Transaction> {
    return this.service.findOne(id)
      .catch(() => { throw new NotFoundException('Data Tidak ditemukan') });
  }


  @Post('post')
  post(@Body() e: Transaction) {
    return this.service.post(e);
  }


  @Post('posts')
  postAll(@Body() es: Transaction[]) {
    return this.service.postAll(es);
  }


  @Delete('delete/:id')
  deleteById(@Param('id') id: any) {
    return this.service.deleteById(id);
  }

}
