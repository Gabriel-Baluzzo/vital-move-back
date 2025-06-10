import { PrismaService } from 'prisma/prisma.service';

export class Video {
  constructor(private readonly prisma: PrismaService) {}
}
