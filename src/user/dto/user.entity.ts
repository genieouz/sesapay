import { ObjectType, Field, ID } from 'type-graphql';
import { ApiProperty } from '@nestjs/swagger';

@ObjectType()
export class User {
  @ApiProperty()
  @Field(type => ID)
  public _id: string;

  @ApiProperty()
  @Field({ nullable: true })
  public firstName: string;

  @ApiProperty()
  @Field({ nullable: true })
  public lastName: string;

  @ApiProperty()
  @Field({ nullable: true })
  public phoneNumber: string;

  @ApiProperty()
  @Field({ nullable: true })
  public email: string;

  @ApiProperty()
  @Field({ nullable: true })
  public domicile: string;
}
