import { databaseUrl } from '~/commons/database/database.url';
import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from '~/user/user.module';
import { AuthModule } from '~/auth/auth.module';
import { MultimediaModule } from './multimedia/multimedia.module';
import { GraphQLModule } from '@nestjs/graphql';
import { AgenceModule } from './agence/agence.module';
import { AgentModule } from './agent/agent.module';
import { ComptableModule } from './comptable/comptable.module';

@Module({
  imports: [
    MongooseModule.forRoot(databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: "schema.gql",
      introspection: true,
      playground: true,
      installSubscriptionHandlers: true,
      context: async ({ req, connection }) => {
        if (connection) {
          // subscriptions
          return {
            req: {
              headers: { authorization: connection.context.Authorization },
            },
          };
        }
        // queries and mutations
        return { req };
      },
    }),
    forwardRef(() => UserModule),
    AuthModule,
    MultimediaModule,
    UserModule,
    AgenceModule,
    AgentModule,
    ComptableModule,
  ],
})
export class AppModule {}
