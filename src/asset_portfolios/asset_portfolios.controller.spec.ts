import { Test, TestingModule } from '@nestjs/testing';
import { AssetPortfoliosController } from './asset_portfolios.controller';
import { AssetPortfoliosService } from './asset_portfolios.service';

describe('AssetPortfoliosController', () => {
  let controller: AssetPortfoliosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssetPortfoliosController],
      providers: [AssetPortfoliosService],
    }).compile();

    controller = module.get<AssetPortfoliosController>(AssetPortfoliosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
