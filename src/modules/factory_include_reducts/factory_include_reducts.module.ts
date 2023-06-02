import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FactoryIncludeReduct } from './entities/factory_include_reducts.entity';
import { FactoryIncludeReductsController } from './factory_include_reducts.controller';
import { FactoryIncludeReductsService } from './factory_include_reducts.service';

@Module({
  imports: [TypeOrmModule.forFeature([FactoryIncludeReduct])],
  controllers: [FactoryIncludeReductsController],
  providers: [FactoryIncludeReductsService]
})
export class FactoryIncludeReductsModule {}
