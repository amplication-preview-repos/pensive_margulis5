import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { INVITATION_TITLE_FIELD } from "../invitation/InvitationTitle";
import { SHOPPINGLIST_TITLE_FIELD } from "../shoppingList/ShoppingListTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Invitor"
          source="invitation.id"
          reference="Invitation"
        >
          <TextField source={INVITATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Member_invitations"
          source="invitation.id"
          reference="Invitation"
        >
          <TextField source={INVITATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Roles" source="roles" />
        <ReferenceField
          label="shopping_lists"
          source="shoppinglist.id"
          reference="ShoppingList"
        >
          <TextField source={SHOPPINGLIST_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
      </SimpleShowLayout>
    </Show>
  );
};
