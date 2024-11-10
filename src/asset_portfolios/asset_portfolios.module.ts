import { Module } from '@nestjs/common';
import { AssetPortfoliosService } from './asset_portfolios.service';
import { AssetPortfoliosController } from './asset_portfolios.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AssetPortfoliosController],
  providers: [AssetPortfoliosService],
})
export class AssetPortfoliosModule {}
