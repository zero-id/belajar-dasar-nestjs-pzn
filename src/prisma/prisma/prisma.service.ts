import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { info } from 'console';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super();
    console.info('PrismaService created');
  }
  onModuleInit() {
    info('Connect PrismaService');
    this.$connect();
  }
  onModuleDestroy() {
    info('Disconnect PrismaService');
    this.$disconnect();
  }
}
