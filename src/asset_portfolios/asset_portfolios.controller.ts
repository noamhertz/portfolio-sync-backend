import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { AssetPortfoliosService } from './asset_portfolios.service';
import { Prisma } from '@prisma/client';

@Controller('asset-portfolios')
export class AssetPortfoliosController {
  constructor(
    private readonly assetPortfoliosService: AssetPortfoliosService,
  ) {}

  @Post()
  create(@Body() createAssetPortfolioDto: Prisma.AssetPortfolioCreateInput) {
    return this.assetPortfoliosService.create(createAssetPortfolioDto);
  }

  @Get()
  findAll() {
    return this.assetPortfoliosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.assetPortfoliosService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAssetPortfolioDto: Prisma.AssetPortfolioUpdateInput,
  ) {
    return this.assetPortfoliosService.update(id, updateAssetPortfolioDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.assetPortfoliosService.remove(id);
  }
}
