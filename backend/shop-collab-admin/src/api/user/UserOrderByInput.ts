import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  invitorId?: SortOrder;
  memberInvitationsId?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  shoppingListsId?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
