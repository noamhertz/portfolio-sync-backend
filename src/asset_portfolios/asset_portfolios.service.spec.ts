import { Test, TestingModule } from '@nestjs/testing';
import { AssetPortfoliosService } from './asset_portfolios.service';

describe('AssetPortfoliosService', () => {
  let service: AssetPortfoliosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssetPortfoliosService],
    }).compile();

    service = module.get<AssetPortfoliosService>(AssetPortfoliosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
