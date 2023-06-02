import { Test, TestingModule } from '@nestjs/testing';
import { PelpDataMasterDetailsController } from './pelp_data_master_details.controller';

describe('PelpDataMasterDetailsController', () => {
  let controller: PelpDataMasterDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PelpDataMasterDetailsController],
    }).compile();

    controller = module.get<PelpDataMasterDetailsController>(PelpDataMasterDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
