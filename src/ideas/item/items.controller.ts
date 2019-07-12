import { Body, Controller, Delete, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Items } from './items.entity';

@Controller('item')
export class ItemsController {
  constructor(private readonly service: ItemsService) { }

  @Get('gets')
  async findAll(): Promise<Items[]> {
    return this.service.findAll();
  }

  @Get('get/:id')
  findOne(@Param('id') id: any): Promise<Items> {
    return this.service.findOne(id)
      .catch(() => { throw new NotFoundException('Data Tidak ditemukan') });
  }


  @Post('post')
  post(@Body() e: Items) {
    return this.service.post(e);
  }


  @Post('posts')
  postAll(@Body() es: Items[]) {
    return this.service.postAll(es);
  }


  @Delete('delete/:id')
  deleteById(@Param('id') id: any) {
    return this.service.deleteById(id);
  }

}
