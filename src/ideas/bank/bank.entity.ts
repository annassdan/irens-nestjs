import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class Bank {

  @ApiModelProperty({
    description: 'ID'
  })
  @PrimaryGeneratedColumn('uuid')
  readonly bankId: string;

  @ApiModelProperty()
  @Column({ length: 255 })
  readonly bankName: string;

}
