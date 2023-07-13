import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ShoppingListResolverBase } from "./base/shoppingList.resolver.base";
import { ShoppingList } from "./base/ShoppingList";
import { ShoppingListService } from "./shoppingList.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ShoppingList)
export class ShoppingListResolver extends ShoppingListResolverBase {
  constructor(
    protected readonly service: ShoppingListService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
