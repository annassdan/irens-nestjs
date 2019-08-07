import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { ID_STRATEGY } from '../../utils/constants';
import { PeopleType } from '../../utils/enums/people.type';

@Entity()
export class People {

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
  peopleName: string;


  @ApiModelProperty({ enum: ['BUYER', 'SUPPLIER', 'EMPLOYEE', 'OWNER']})
  @Column('text')
  peopleType: PeopleType;

  @ApiModelProperty()
  @Column('text')
  peopleAddress: string;


  @ApiModelProperty()
  @Column({ length: 50 })
  peoplePhone: string;

  @Column('double precision')
  salary: number;

}
