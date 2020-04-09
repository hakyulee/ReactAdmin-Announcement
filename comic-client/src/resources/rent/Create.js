import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

const UserCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput label="사용자" source="userId" reference="user">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput label="만화책" source="bookId" reference="book">
          <SelectInput optionText="title" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

export default UserCreate;
