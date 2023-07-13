import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ShoppingListCreateInput = {
  memberItems?: InputJsonValue;
  owner: UserWhereUniqueInput;
  ownerItems?: InputJsonValue;
};
