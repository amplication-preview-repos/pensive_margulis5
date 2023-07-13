import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type InvitationUpdateInput = {
  byOwner?: UserWhereUniqueInput | null;
  email?: string | null;
  invitationAccepted?: boolean;
  Invited_User?: UserWhereUniqueInput;
};
