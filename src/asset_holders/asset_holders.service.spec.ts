import { Test, TestingModule } from '@nestjs/testing';
import { AssetHoldersService } from './asset_holders.service';

describe('AssetHoldersService', () => {
  let service: AssetHoldersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssetHoldersService],
    }).compile();

    service = module.get<AssetHoldersService>(AssetHoldersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
