import { Module } from '@nestjs/common';
import { AssetHoldersService } from './asset_holders.service';
import { AssetHoldersController } from './asset_holders.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AssetHoldersController],
  providers: [AssetHoldersService],
})
export class AssetHoldersModule {}
