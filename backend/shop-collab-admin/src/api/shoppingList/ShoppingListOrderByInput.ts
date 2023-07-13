import { SortOrder } from "../../util/SortOrder";

export type ShoppingListOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  memberItems?: SortOrder;
  ID?: SortOrder;
  ownerItems?: SortOrder;
  updatedAt?: SortOrder;
};
