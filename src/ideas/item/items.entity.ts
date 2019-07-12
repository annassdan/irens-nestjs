import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { ID_STRATEGY } from '../../utils/constants';

@Entity()
export class Items {

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
  itemName: string;

}
