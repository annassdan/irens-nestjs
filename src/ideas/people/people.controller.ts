import { Body, Controller, Delete, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { PeopleService } from '../People/People.service';
import { People } from '../People/People.entity';
@Controller('people')
export class PeopleController {
  constructor(private readonly service: PeopleService) { }

  @Get('gets')
  async findAll(): Promise<People[]> {
    return this.service.findAll();
  }

  @Get('get/:id')
  findOne(@Param('id') id: any): Promise<People> {
    return this.service.findOne(id)
      .catch(() => { throw new NotFoundException('Data Tidak ditemukan') });
  }


  @Post('post')
  post(@Body() e: People) {
    return this.service.post(e);
  }


  @Post('posts')
  postAll(@Body() es: People[]) {
    return this.service.postAll(es);
  }


  @Delete('delete/:id')
  deleteById(@Param('id') id: any) {
    return this.service.deleteById(id);
  }

}
