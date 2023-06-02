import { Test, TestingModule } from '@nestjs/testing';
import { PelpDataMastersController } from './pelp_data_masters.controller';

describe('PelpDataMastersController', () => {
  let controller: PelpDataMastersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PelpDataMastersController],
    }).compile();

    controller = module.get<PelpDataMastersController>(PelpDataMastersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
