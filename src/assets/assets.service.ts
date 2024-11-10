import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AssetsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createAssetDto: Prisma.AssetCreateInput) {
    return this.databaseService.asset.create({ data: createAssetDto });
  }

  async findAll() {
    return this.databaseService.asset.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.asset.findUnique({ where: { id } });
  }

  async update(id: number, updateAssetDto: Prisma.AssetUpdateInput) {
    return this.databaseService.asset.update({
      where: { id },
      data: updateAssetDto,
    });
  }

  async remove(id: number, archive: boolean) {
    if (archive) {
      return this.databaseService.asset.update({
        where: { id },
        data: { isArchived: true },
      });
    }
    return this.databaseService.asset.delete({ where: { id } });
  }
}
