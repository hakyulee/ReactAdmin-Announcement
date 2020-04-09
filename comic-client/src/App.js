import React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import dataProvider from "./dataProvider";
import { UserList, UserShow, UserEdit, UserCreate } from "./resources/user";
import { RentList, RentCreate } from "./resources/rent";

import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/People";

import "./App.css";
import "antd/dist/antd.css";

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        icon={UserIcon}
        name="user"
        create={UserCreate}
        list={UserList}
        show={UserShow}
        edit={UserEdit}
      />
      <Resource icon={PostIcon} name="book" list={ListGuesser} />
      <Resource name="rent" list={RentList} create={RentCreate} />
    </Admin>
  );
}

export default App;
