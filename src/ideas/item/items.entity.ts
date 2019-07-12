import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { ID_STRATEGY } from '../../utils/constants';

@Entity()
export class Items {

  @ApiModelProperty({
    description: 'ID'
  })
  @PrimaryGeneratedColumn(ID_STRATEGY)
  id: string;

  @ApiModelProperty()
  @Column({ length: 255 })
  itemName: string;

}
