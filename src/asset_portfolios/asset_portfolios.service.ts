import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AssetPortfoliosService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createAssetPortfolioDto: Prisma.AssetPortfolioCreateInput) {
    return this.databaseService.assetPortfolio.create({
      data: createAssetPortfolioDto,
    });
  }

  async findAll() {
    return this.databaseService.assetPortfolio.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.assetPortfolio.findUnique({ where: { id } });
  }

  async update(
    id: number,
    updateAssetPortfolioDto: Prisma.AssetPortfolioUpdateInput,
  ) {
    return this.databaseService.assetPortfolio.update({
      where: { id },
      data: updateAssetPortfolioDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.assetPortfolio.delete({ where: { id } });
  }
}
