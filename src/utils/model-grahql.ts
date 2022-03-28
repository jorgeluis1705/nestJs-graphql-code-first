import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { DynamicModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { DirectiveLocation, GraphQLDirective } from 'graphql';

export const graphqlModuleConfiguration: DynamicModule =
  GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: 'src/schema.gql',
    installSubscriptionHandlers: true,
    buildSchemaOptions: {
      directives: [
        new GraphQLDirective({
          name: 'upper',
          locations: [DirectiveLocation.FIELD_DEFINITION],
        }),
      ],
    },
  });
