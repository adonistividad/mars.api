import { Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { IBaseService } from './IBase.service';
import { BaseEntity } from './base.entity';
import { ApiResponse } from '@nestjs/swagger';

export class BaseController<T extends BaseEntity> {
  constructor(private readonly IBaseService: IBaseService<T>) {}

  @Get()
  @ApiResponse({ status: 200, description: 'Ok' })
  async fetchAll(): Promise<T[]> {
    console.log("fetchAll::" )
    return await this.IBaseService.fetchAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Entity retrieved successfully.' })
  @ApiResponse({ status: 404, description: 'Entity does not exist' })
  async fetchById(@Param('id') id: number): Promise<T> {
    console.log("id::", id)
    return await this.IBaseService.fetchById(id);
  }

  @Post()
  @ApiResponse({status: 201,description: 'The record has been successfully created.',})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  // async create(@Body() entity: T): Promise<number> {
  //   return await this.IBaseService.create(entity);
  // }
  create(@Body() entity: T): Promise<number> {
    return this.IBaseService.create(entity);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Entity deleted successfully.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async delete(@Param('id') id: number) {
    await this.IBaseService.delete(id);
  }

  @Put()
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiResponse({ status: 200, description: 'Entity updated successfully.' })
  async update(@Body() entity: T): Promise<T> {
    return await this.IBaseService.update(entity);
  }
 
}
