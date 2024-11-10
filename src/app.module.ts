import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AssetHoldersModule } from './asset_holders/asset_holders.module';
import { AssetsModule } from './assets/assets.module';
import { PortfoliosModule } from './portfolios/portfolios.module';
import { AssetPortfoliosModule } from './asset_portfolios/asset_portfolios.module';

@Module({
  imports: [
    DatabaseModule,
    AssetHoldersModule,
    AssetsModule,
    PortfoliosModule,
    AssetPortfoliosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
