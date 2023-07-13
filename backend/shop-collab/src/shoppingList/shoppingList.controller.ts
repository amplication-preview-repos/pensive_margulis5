import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ShoppingListService } from "./shoppingList.service";
import { ShoppingListControllerBase } from "./base/shoppingList.controller.base";

@swagger.ApiTags("shoppingLists")
@common.Controller("shoppingLists")
export class ShoppingListController extends ShoppingListControllerBase {
  constructor(
    protected readonly service: ShoppingListService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
