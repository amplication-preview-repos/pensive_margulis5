import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  PasswordInput,
  SelectArrayInput,
} from "react-admin";

import { InvitationTitle } from "../invitation/InvitationTitle";
import { ShoppingListTitle } from "../shoppingList/ShoppingListTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="First Name" source="firstName" />
        <ReferenceInput
          source="invitor.id"
          reference="Invitation"
          label="Invitor"
        >
          <SelectInput optionText={InvitationTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="memberInvitations.id"
          reference="Invitation"
          label="Member_invitations"
        >
          <SelectInput optionText={InvitationTitle} />
        </ReferenceInput>
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput
          source="shoppingLists.id"
          reference="ShoppingList"
          label="shopping_lists"
        >
          <SelectInput optionText={ShoppingListTitle} />
        </ReferenceInput>
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Create>
  );
};
