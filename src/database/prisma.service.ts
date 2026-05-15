
import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '../generated/prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
 constructor(configService: ConfigService) {
    
    const dbUrl = configService.get<string>('DATABASE_URL');
    
    const adapter = new PrismaBetterSqlite3({ url: dbUrl });
    
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }
}
