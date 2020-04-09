import React from "react";
import { Edit, SimpleForm, TextInput, NumberInput } from "react-admin";

const UserEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="이름" source="name" />
        <NumberInput label="나이" source="age" />
        <TextInput label="전화번호" source="phone" />
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
