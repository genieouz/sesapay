import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class User {
  @Field(type => ID)
  public _id: string;

  @Field({ nullable: true })
  public firstName: string;

  @Field({ nullable: true })
  public lastName: string;

  @Field({ nullable: true })
  public phoneNumber: string;

  @Field({ nullable: true })
  public email: string;

  @Field({ nullable: true })
  public domicile: string;
}
