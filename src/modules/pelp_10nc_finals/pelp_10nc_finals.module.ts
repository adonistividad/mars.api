import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pelp10ncFinal } from './entities/pelp_10nc_final.entity';
import { Pelp10ncFinalsController } from './pelp_10nc_finals.controller';
import { Pelp10ncFinalsService } from './pelp_10nc_finals.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pelp10ncFinal])],
  controllers: [Pelp10ncFinalsController],
  providers: [Pelp10ncFinalsService],
})
export class Pelp10ncFinalsModule {}
