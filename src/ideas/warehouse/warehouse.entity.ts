import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { WarehouseType } from '../../utils/enums/warehouse.type';
import { ID_STRATEGY } from '../../utils/constants';

@Entity()
export class Warehouse {

  @ApiModelProperty({
    description: 'ID'
  })
  @PrimaryGeneratedColumn(ID_STRATEGY)
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  lastModifiedAt: Date;

  @ApiModelProperty()
  @Column({ length: 255 })
  warehouseName: string;

  @ApiModelProperty({ enum: ['PEMBELIAN', 'PENJUALAN']})
  @Column('text')
  warehouseType: WarehouseType;

}
