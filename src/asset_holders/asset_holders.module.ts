import { Module } from '@nestjs/common';
import { AssetHoldersService } from './asset_holders.service';
import { AssetHoldersController } from './asset_holders.controller';

@Module({
  controllers: [AssetHoldersController],
  providers: [AssetHoldersService],
})
export class AssetHoldersModule {}
