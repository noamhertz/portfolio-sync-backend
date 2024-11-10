import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { AssetHoldersService } from './asset_holders.service';
import { Prisma } from '@prisma/client';

@Controller('asset-holders')
export class AssetHoldersController {
  constructor(private readonly assetHoldersService: AssetHoldersService) {}

  @Post()
  create(@Body() createAssetHolderDto: Prisma.AssetHolderCreateInput) {
    return this.assetHoldersService.create(createAssetHolderDto);
  }

  @Get()
  findAll() {
    return this.assetHoldersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.assetHoldersService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAssetHolderDto: Prisma.AssetHolderUpdateInput,
  ) {
    return this.assetHoldersService.update(id, updateAssetHolderDto);
  }

  @Delete(':id')
  remove(
    @Param('id', ParseIntPipe) id: number,
    @Query('archive') archive: string,
  ) {
    return this.assetHoldersService.remove(id, archive === 'true');
  }
}
