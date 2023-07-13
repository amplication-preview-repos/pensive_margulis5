import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvitationWhereUniqueInput } from "../invitation/InvitationWhereUniqueInput";
import { ShoppingListWhereUniqueInput } from "../shoppingList/ShoppingListWhereUniqueInput";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  invitor?: InvitationWhereUniqueInput;
  memberInvitations?: InvitationWhereUniqueInput;
  shoppingLists?: ShoppingListWhereUniqueInput;
  username?: StringFilter;
};
