import { User } from "../user/User";

export type Invitation = {
  byOwner?: User | null;
  createdAt: Date;
  email: string | null;
  id: string;
  invitationAccepted: boolean;
  Invited_User?: User;
  updatedAt: Date;
};
