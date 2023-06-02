import { Test, TestingModule } from '@nestjs/testing';
import { Pelp10ncFinalsController } from './pelp_10nc_finals.controller';

describe('Pelp10ncFinalsController', () => {
  let controller: Pelp10ncFinalsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Pelp10ncFinalsController],
    }).compile();

    controller = module.get<Pelp10ncFinalsController>(Pelp10ncFinalsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
