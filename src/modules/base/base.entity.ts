import { PrimaryGeneratedColumn } from 'typeorm';
// import { ApiModelPropertyOptional } from '@nestjs/swagger';

export class BaseEntity {
  @PrimaryGeneratedColumn()
//   @ApiModelPropertyOptional()
  public id: number;
}
