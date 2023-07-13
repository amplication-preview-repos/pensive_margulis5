import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { INVITATION_TITLE_FIELD } from "../invitation/InvitationTitle";
import { SHOPPINGLIST_TITLE_FIELD } from "../shoppingList/ShoppingListTitle";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
