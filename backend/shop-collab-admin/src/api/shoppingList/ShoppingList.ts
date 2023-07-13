import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type ShoppingList = {
  createdAt: Date;
  id: string;
  memberItems: JsonValue;
  owner?: User;
  ownerItems: JsonValue;
  updatedAt: Date;
};
