import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TransactionType } from '../../utils/enums/transaction.type';
import { ApiModelProperty } from '@nestjs/swagger';
import { Warehouse } from '../warehouse/warehouse.entity';
import { ID_STRATEGY } from '../../utils/constants';

@Entity()
export class Transaction {

  @ApiModelProperty({
    description: 'ID'
  })
  @PrimaryGeneratedColumn(ID_STRATEGY)
  id: string;

  @ApiModelProperty({ enum: ['PEMBELIAN', 'PENJUALAN']})
  @Column('text')
  transactiontype: TransactionType;


  @ApiModelProperty()
  @Column('bool')
  kasbon: boolean;


  @ApiModelProperty()
  @OneToOne(() => Warehouse)
  @JoinColumn()
  warehouse: Warehouse;


}
