import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ShoppingListWhereInput = {
  id?: StringFilter;
  memberItems?: JsonFilter;
  ownerItems?: JsonFilter;
};
