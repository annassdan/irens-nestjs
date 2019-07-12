import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class Bank {

  @ApiModelProperty({
    description: 'ID'
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiModelProperty()
  @Column({ length: 255 })
  bankName: string;

}
