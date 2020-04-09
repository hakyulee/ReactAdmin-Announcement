import React from "react";
import { Create, SimpleForm, TextInput, NumberInput } from "react-admin";

const UserCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="이름" source="name" />
        <NumberInput label="나이" source="age" />
        <TextInput label="전화번호" source="phone" />
      </SimpleForm>
    </Create>
  );
};

export default UserCreate;
