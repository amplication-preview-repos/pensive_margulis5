import { Invitation } from "../invitation/Invitation";
import { JsonValue } from "type-fest";
import { ShoppingList } from "../shoppingList/ShoppingList";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  invitor?: Invitation | null;
  memberInvitations?: Invitation | null;
  roles: JsonValue;
  shoppingLists?: ShoppingList | null;
  updatedAt: Date;
  username: string;
};
