import { Body, Controller, Delete, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { ItemService } from './item.service';
import { Item } from './item.entity';

@Controller('item')
export class ItemController {
  constructor(private readonly service: ItemService) { }

  @Get('gets')
  async findAll(): Promise<Item[]> {
    return this.service.findAll();
  }

  @Get('get/:id')
  findOne(@Param('id') id: any): Promise<Item> {
    return this.service.findOne(id)
      .catch(() => { throw new NotFoundException('Data Tidak ditemukan') });
  }


  @Post('post')
  post(@Body() e: Item) {
    return this.service.post(e);
  }


  @Post('posts')
  postAll(@Body() es: Item[]) {
    return this.service.postAll(es);
  }


  @Delete('delete/:id')
  deleteById(@Param('id') id: any) {
    return this.service.deleteById(id);
  }

}
