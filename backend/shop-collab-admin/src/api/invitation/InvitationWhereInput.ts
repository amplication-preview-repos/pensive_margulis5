import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";

export type InvitationWhereInput = {
  byOwner?: UserWhereUniqueInput;
  email?: StringNullableFilter;
  id?: StringFilter;
  invitationAccepted?: BooleanFilter;
};
