import { Test, TestingModule } from '@nestjs/testing';
import { NctMasterFilesController } from './nct_master_files.controller';

describe('NctMasterFilesController', () => {
  let controller: NctMasterFilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NctMasterFilesController],
    }).compile();

    controller = module.get<NctMasterFilesController>(NctMasterFilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
