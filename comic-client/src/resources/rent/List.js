import React from "react";
import {
  List,
  Datagrid,
  ReferenceField,
  TextField,
  NumberField,
  DateField,
  ShowButton,
  EditButton,
} from "react-admin";
import { Progress } from "antd";

const ProgressField = ({ source, record = {} }) => {
  return <Progress percent={record[source] * 100} />;
};

const ReportList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <ReferenceField source="bookId" reference="book">
          <TextField source="title" />
        </ReferenceField>
        <ReferenceField source="userId" reference="user">
          <TextField source="name" />
        </ReferenceField>
        <ProgressField source="progress" sortable={false} />
      </Datagrid>
    </List>
  );
};

export default ReportList;
