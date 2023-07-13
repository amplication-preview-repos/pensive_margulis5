import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const InvitationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="byOwner.id" reference="User" label="By_Owner">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Email" source="email" type="email" />
        <BooleanInput label="Invitation Accepted" source="invitationAccepted" />
        <ReferenceInput
          source="Invited_User.id"
          reference="User"
          label="Invited_User"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
