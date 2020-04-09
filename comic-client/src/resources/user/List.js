import React from "react";
import { List, Datagrid, TextField, NumberField } from "react-admin";

const ReportList = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" sortable={false} />
        <TextField source="name" sortable={false} />
        <NumberField source="age" sortable={false} />
        <TextField source="phone" sortable={false} />
      </Datagrid>
    </List>
  );
};

export default ReportList;
