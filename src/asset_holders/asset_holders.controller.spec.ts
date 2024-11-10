import { Test, TestingModule } from '@nestjs/testing';
import { AssetHoldersController } from './asset_holders.controller';
import { AssetHoldersService } from './asset_holders.service';

describe('AssetHoldersController', () => {
  let controller: AssetHoldersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssetHoldersController],
      providers: [AssetHoldersService],
    }).compile();

    controller = module.get<AssetHoldersController>(AssetHoldersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
