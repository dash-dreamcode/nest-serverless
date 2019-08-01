import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { ParseIntPipe } from '@nestjs/common';

@Resolver('Cat')
export class AppResolver {
  cats = [
    {
      id: 1,
      name: 'Mjau',
      age: 17,
    },
  ];

  @Query()
  getPortalSettings() {
    return this.cats;
  }

}
