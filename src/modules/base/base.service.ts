import { BadGatewayException, Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
// import { STATUS_CODES } from 'http';
import { IBaseService } from '../base/IBase.service';
import { BaseEntity } from './base.entity';

@Injectable()
export class BaseService<T extends BaseEntity> implements IBaseService<T> {
  constructor(private readonly genericRepository: Repository<T>) {}

  async create(entity: any): Promise<number> {
    try {
      return await new Promise<number> ((resolve, reject) => {
        this.genericRepository
          .save(entity)
          .then((created) => resolve(created.id))
          .catch((err) => reject(err));
      });
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
  // async create(entity: any): Promise<number> {
  //   try {
  //     const data: any = this.genericRepository.create(entity);
  //     // await this.genericRepository.insert(data);

  //     return await new Promise<number>((resolve, reject) => {
  //       this.genericRepository
  //         .insert(data)
  //         .then((created: any) => resolve(created.id))
  //         .catch((err) => reject(err));
  //     });
  //   } catch (error) {
  //     throw new BadGatewayException(error);
  //   }
  // }

  fetchAll(): Promise<T[]> {
    try {
      return <Promise<T[]>>this.genericRepository.find();
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  fetchById(id: number): Promise<T> {
    try {
    } catch (error) {
      throw new BadGatewayException(error);
    }
    return <Promise<T>>(
      this.genericRepository.findOne({ where: { id } as FindOptionsWhere<T> })
    );
  }

  delete(id: number) {
    try {
      this.genericRepository.delete(id);
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async update(entity: any): Promise<any> {
    try {
      console.log('entity::', entity);
      return await new Promise<any>((resolve, reject) => {
        this.genericRepository
          .findOne({ where: { id: entity.id } })
          .then((responseGet) => {
            try {
              if (responseGet == null) reject('Not existing');
              let retrievedEntity: any = responseGet as any;
              retrievedEntity = { ...retrievedEntity, ...entity };
              console.log('retrievedEntity::', retrievedEntity);

              this.genericRepository
                .save(retrievedEntity)
                .then((response) => resolve(response))
                .catch((err) => reject(err));
            } catch (e) {
              reject(e);
            }
          })
          .catch((err) => reject(err));
      });
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
}
