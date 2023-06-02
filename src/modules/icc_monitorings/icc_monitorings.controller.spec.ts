import { Test, TestingModule } from '@nestjs/testing';
import { IccMonitoringsController } from './icc_monitorings.controller';

describe('IccMonitoringsController', () => {
  let controller: IccMonitoringsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IccMonitoringsController],
    }).compile();

    controller = module.get<IccMonitoringsController>(IccMonitoringsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
