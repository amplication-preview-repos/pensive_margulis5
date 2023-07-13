import { InvitationWhereUniqueInput } from "../invitation/InvitationWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { ShoppingListWhereUniqueInput } from "../shoppingList/ShoppingListWhereUniqueInput";

export type UserCreateInput = {
  firstName?: string | null;
  invitor?: InvitationWhereUniqueInput | null;
  memberInvitations?: InvitationWhereUniqueInput | null;
  password: string;
  roles: InputJsonValue;
  shoppingLists?: ShoppingListWhereUniqueInput | null;
  username: string;
};
