import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
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

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  lastModifiedAt: Date;

  @ApiModelProperty({ enum: ['PEMBELIAN', 'PENJUALAN']})
  @Column('text')
  transactiontype: TransactionType;


  @ApiModelProperty()
  @Column('bool')
  kasbon: boolean;


  @ApiModelProperty()
  @ManyToOne(() => Warehouse, { eager: true })
  @JoinColumn()
  warehouse: Warehouse;

  @ApiModelProperty()
  @Column({ length: 255 })
  noteNumber: string;


  @Column('double precision')
  amountTotal: number;




}
