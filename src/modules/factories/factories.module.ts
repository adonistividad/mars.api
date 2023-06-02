import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Factory } from './entities/factory.entity';
import { FactoriesController } from './factories.controller';
import { FactoriesService } from './factories.service';

@Module({
  imports: [TypeOrmModule.forFeature([Factory])],
  controllers: [FactoriesController],
  providers: [FactoriesService],
})
export class FactoriesModule {}
