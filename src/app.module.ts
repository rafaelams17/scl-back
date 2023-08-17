import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guards';
import { PrismaModule } from './database/prisma.module';
import { UserModule } from './module/user/user.module';
import { BookModule } from './module/book/book.module';

@Module({
  imports: [PrismaModule, UserModule, AuthModule, BookModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
