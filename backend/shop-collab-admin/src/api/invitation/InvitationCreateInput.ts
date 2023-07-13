import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type InvitationCreateInput = {
  byOwner?: UserWhereUniqueInput | null;
  email?: string | null;
  invitationAccepted: boolean;
  Invited_User: UserWhereUniqueInput;
};
