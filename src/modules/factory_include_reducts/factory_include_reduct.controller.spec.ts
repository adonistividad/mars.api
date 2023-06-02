import { Test, TestingModule } from '@nestjs/testing';
import { FactoryIncludeReductsController } from './factory_include_reducts.controller';

describe('FactoryIncludeReductsController', () => {
  let controller: FactoryIncludeReductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FactoryIncludeReductsController],
    }).compile();

    controller = module.get<FactoryIncludeReductsController>(FactoryIncludeReductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
