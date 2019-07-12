import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TransactionType } from '../../utils/enums/transaction.type';
import { Bank } from '../bank/bank.entity';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class Transaction {

  @ApiModelProperty({
    description: 'ID'
  })
  @PrimaryGeneratedColumn('uuid')
  transactionId: string;

  @ApiModelProperty({ enum: ['PEMBELIAN', 'PENJUALAN']})
  @Column('text')
  transactiontype: TransactionType;

  @ApiModelProperty()
  @Column('bool')
  kasbon: boolean;


  @ApiModelProperty()
  @OneToOne(() => Bank)
  @JoinColumn({ name: 'bankId'})
  bank: Bank;


}
