import { Module } from '@nestjs/common';
import { AssetPortfoliosService } from './asset_portfolios.service';
import { AssetPortfoliosController } from './asset_portfolios.controller';

@Module({
  controllers: [AssetPortfoliosController],
  providers: [AssetPortfoliosService],
})
export class AssetPortfoliosModule {}
