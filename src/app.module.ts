import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './modules/auth/auth.module'
import { UsersModule } from './modules/users/users.module'
import { PostsModule } from './modules/posts/posts.module'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { PrismaModule } from './prisma/prisma.module'
import { MediaModule } from './media/media.module';
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'node:path'
import { ThrottlerModule } from '@nestjs/throttler'
import { JwtModule } from '@nestjs/jwt'
import { HttpModule } from '@nestjs/axios'

@Module({
  imports: [
    // Config modules
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      installSubscriptionHandlers: true,
      sortSchema: true,
      playground: false,
      introspection: true,
      // https://docs.nestjs.com/graphql/subscriptions#authentication-over-websockets
      subscriptions: {
        'graphql-ws': {
          path: '/graphql',
        },
      },
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    ThrottlerModule.forRoot([{ ttl: 2000, limit: 100 }]),
    JwtModule.registerAsync({
      global: true,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET', 'default_secret'),
        signOptions: {
          expiresIn: configService.get<string | number>('JWT_EXPIRES_IN', '1d'),
        },
      }),
    }),
    // Global modules
    HttpModule,
    PrismaModule,
    // Modules
    AuthModule,
    UsersModule,
    PostsModule,
    MediaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
