import { Body, Controller, Delete, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { Warehouse } from './warehouse.entity';
import { WarehouseService } from './warehouse.service';

@Controller('warehouse')
export class WarehouseController {
  constructor(private readonly service: WarehouseService) { }
  
  @Get('gets')
  async findAll(): Promise<Warehouse[]> {
    return this.service.findAll();
  }

  @Get('get/:id')
  findOne(@Param('id') id: any): Promise<Warehouse> {
    return this.service.findOne(id)
      .catch(() => { throw new NotFoundException('Data Tidak ditemukan') });
  }


  @Post('post')
  post(@Body() e: Warehouse) {
    return this.service.post(e);
  }


  @Post('posts')
  postAll(@Body() es: Warehouse[]) {
    return this.service.postAll(es);
  }


  @Delete('delete/:id')
  deleteById(@Param('id') id: any) {
    return this.service.deleteById(id);
  }
}
