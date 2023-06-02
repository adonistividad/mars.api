import { Test, TestingModule } from '@nestjs/testing';
import { NctMasterFilesService } from './nct_master_files.service';

describe('NctMasterFilesService', () => {
  let service: NctMasterFilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NctMasterFilesService],
    }).compile();

    service = module.get<NctMasterFilesService>(NctMasterFilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
