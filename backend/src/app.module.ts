import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { ApolloDriver, type ApolloDriverConfig } from "@nestjs/apollo";
import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { EventEmitterModule } from "@nestjs/event-emitter";
import { GraphQLModule } from "@nestjs/graphql";
import { JwtModule } from "@nestjs/jwt";
import { MulterModule } from "@nestjs/platform-express";
import { ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";
import { join } from "node:path";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MediaModule } from "./media/media.module";
import { AuthModule } from "./modules/auth/auth.module";
import { PostsModule } from "./modules/posts/posts.module";
import { UsersModule } from "./modules/users/users.module";
import { PrismaModule } from "./prisma/prisma.module";
import { RedisModule } from "./redis/redis.module";
import { SupabaseModule } from "./supabase/supabase.module";
import { APP_GUARD } from "@nestjs/core";
import { AuthCookieGuard } from "./common/guards/auth-cookie.guard";
import { NotificationsModule } from "./modules/notifications/notifications.module";
import { CommentModule } from "./modules/comment/comment.module";
import { SettingModule } from "./modules/setting/setting.module";
import { FriendsModule } from "./modules/friends/friends.module";

@Module({
	imports: [
		// Config modules
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		EventEmitterModule.forRoot(),
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: join(process.cwd(), "src/schema.gql"),
			installSubscriptionHandlers: true,
			sortSchema: true,
			playground: false,
			introspection: true,
			// https://docs.nestjs.com/graphql/subscriptions#authentication-over-websockets
			subscriptions: {
				"graphql-ws": {
					path: "/graphql",
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
				secret: configService.get<string>("JWT_SECRET", "default_secret"),
				signOptions: {
					expiresIn: configService.get<string | number>("JWT_EXPIRES_IN", "1d"),
				},
			}),
		}),
		MulterModule.register({
			// storage: diskStorage({
			//   destination: join(process.cwd(), 'uploads'),
			//   filename: (_req, file, cb) => {
			//     const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`
			//     cb(null, `${uniqueSuffix}-${file.originalname}`)
			//   },
			// }),
		}),
		// Global modules
		HttpModule,
		PrismaModule,
		SupabaseModule,
		// Modules
		AuthModule,
		UsersModule,
		PostsModule,
		MediaModule,
		RedisModule,
		NotificationsModule,
		CommentModule,
		SettingModule,
		FriendsModule,
	],
	controllers: [AppController],
	providers: [
		AppService,
		{
			provide: APP_GUARD,
			useClass: ThrottlerGuard,
		},
		{
			provide: APP_GUARD,
			useClass: AuthCookieGuard,
		},
	],
})
export class AppModule {}
