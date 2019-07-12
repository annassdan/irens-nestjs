import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { WarehouseType } from '../../utils/enums/warehouse.type';

@Entity()
export class Warehouse {

  @ApiModelProperty({
    description: 'ID'
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiModelProperty()
  @Column({ length: 255 })
  warehouseName: string;


  @ApiModelProperty({ enum: ['PEMBELIAN', 'PENJUALAN']})
  @Column('text')
  warehouseType: WarehouseType;

}
