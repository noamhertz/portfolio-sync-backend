import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AssetHoldersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createAssetHolderDto: Prisma.AssetHolderCreateInput) {
    return this.databaseService.assetHolder.create({
      data: createAssetHolderDto,
    });
  }

  async findAll() {
    return this.databaseService.assetHolder.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.assetHolder.findUnique({ where: { id } });
  }

  async update(
    id: number,
    updateAssetHolderDto: Prisma.AssetHolderUpdateInput,
  ) {
    return this.databaseService.assetHolder.update({
      where: { id },
      data: updateAssetHolderDto,
    });
  }

  async remove(id: number, archive: boolean) {
    if (archive) {
      return this.databaseService.assetHolder.update({
        where: { id },
        data: { isArchived: true },
      });
    }
    return this.databaseService.assetHolder.delete({ where: { id } });
  }
}
