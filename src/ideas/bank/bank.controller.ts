import { Body, Controller, Delete, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { BankService } from './bank.service';
import { Bank } from './bank.entity';

@Controller('bank')
export class BankController {
  constructor(private readonly service: BankService) { }

  @Get('gets')
  async findAll(): Promise<Bank[]> {
    return this.service.findAll();
  }

  @Get('get/:id')
  findOne(@Param('id') id: any): Promise<Bank> {
    return this.service.findOne(id)
      .catch(() => { throw new NotFoundException('Data Tidak ditemukan') });
  }


  @Post('post')
  post(@Body() e: Bank) {
    return this.service.post(e);
  }


  @Post('posts')
  postAll(@Body() es: Bank[]) {
    return this.service.postAll(es);
  }


  @Delete('delete/:id')
  deleteById(@Param('id') id: any) {
    return this.service.deleteById(id);
  }


}
