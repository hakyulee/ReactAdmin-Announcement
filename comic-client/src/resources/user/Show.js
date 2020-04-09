import React from "react";
import { Show, TextField, NumberField, SimpleShowLayout } from "react-admin";

const UserShow = (props) => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="id" sortable={false} />
        <TextField label="이름" source="name" sortable={false} />
        <NumberField label="나이" source="age" sortable={false} />
        <TextField label="전화번호" source="phone" sortable={false} />
      </SimpleShowLayout>
    </Show>
  );
};

export default UserShow;
