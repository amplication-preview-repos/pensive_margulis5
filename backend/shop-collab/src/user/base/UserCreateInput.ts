/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { InvitationWhereUniqueInput } from "../../invitation/base/InvitationWhereUniqueInput";
import { Type } from "class-transformer";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { ShoppingListWhereUniqueInput } from "../../shoppingList/base/ShoppingListWhereUniqueInput";

@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: () => InvitationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => InvitationWhereUniqueInput)
  @IsOptional()
  @Field(() => InvitationWhereUniqueInput, {
    nullable: true,
  })
  invitor?: InvitationWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => InvitationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => InvitationWhereUniqueInput)
  @IsOptional()
  @Field(() => InvitationWhereUniqueInput, {
    nullable: true,
  })
  memberInvitations?: InvitationWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  roles!: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => ShoppingListWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ShoppingListWhereUniqueInput)
  @IsOptional()
  @Field(() => ShoppingListWhereUniqueInput, {
    nullable: true,
  })
  shoppingLists?: ShoppingListWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;
}

export { UserCreateInput as UserCreateInput };
