import { Inject, Injectable } from '@nestjs/common';
import { Connection } from '../connection/connection';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { User } from '@prisma/client';
import { Logger } from 'winston';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';

@Injectable()
export class UserRepository {
  constructor(
    private prismaService: PrismaService,
    @Inject(WINSTON_MODULE_PROVIDER) private logger: Logger,
  ) {
    this.logger.info('UserRepository created');
  }

  async save(first_name: string, last_name?: string): Promise<User> {
    this.logger.info(
      'UserRepository save called' +
        'First name ' +
        first_name +
        ' ' +
        'Last Name ' +
        last_name,
    );
    return await this.prismaService.user.create({
      data: {
        first_name,
        last_name,
      },
    });
  }
}
