import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ShoppingListList } from "./shoppingList/ShoppingListList";
import { ShoppingListCreate } from "./shoppingList/ShoppingListCreate";
import { ShoppingListEdit } from "./shoppingList/ShoppingListEdit";
import { ShoppingListShow } from "./shoppingList/ShoppingListShow";
import { InvitationList } from "./invitation/InvitationList";
import { InvitationCreate } from "./invitation/InvitationCreate";
import { InvitationEdit } from "./invitation/InvitationEdit";
import { InvitationShow } from "./invitation/InvitationShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Shop Collab"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="ShoppingList"
          list={ShoppingListList}
          edit={ShoppingListEdit}
          create={ShoppingListCreate}
          show={ShoppingListShow}
        />
        <Resource
          name="Invitation"
          list={InvitationList}
          edit={InvitationEdit}
          create={InvitationCreate}
          show={InvitationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
