/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { NotificationsRespository } from 'src/application/repositories/notifications-repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationsRepository } from './prisma/repositories/prisma-notifications-repositories';

@Module({
  providers: [PrismaService,
    {
        provide: NotificationsRespository,
        useClass: PrismaNotificationsRepository
    }
],
exports: [NotificationsRespository]
})
export class DatabaseModule {}
