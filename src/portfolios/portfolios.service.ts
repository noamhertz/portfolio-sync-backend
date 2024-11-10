import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class PortfoliosService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createPortfolioDto: Prisma.PortfolioCreateInput) {
    return this.databaseService.portfolio.create({ data: createPortfolioDto });
  }

  async findAll() {
    return this.databaseService.portfolio.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.portfolio.findUnique({ where: { id } });
  }

  async update(id: number, updatePortfolioDto: Prisma.PortfolioUpdateInput) {
    return this.databaseService.portfolio.update({
      where: { id },
      data: updatePortfolioDto,
    });
  }

  async remove(id: number, archive: boolean) {
    if (archive) {
      return this.databaseService.portfolio.update({
        where: { id },
        data: { isArchived: true },
      });
    }
    return this.databaseService.portfolio.delete({ where: { id } });
  }
}
