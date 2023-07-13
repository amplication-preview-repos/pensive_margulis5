import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ShoppingListUpdateInput = {
  memberItems?: InputJsonValue;
  owner?: UserWhereUniqueInput;
  ownerItems?: InputJsonValue;
};
