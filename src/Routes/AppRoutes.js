import { Switch, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Users from "../components/ManageUsers/Users";
import PrivateRoute from "./PrivateRoutes";

const AppRoutes = (props) => {
  /**
   *
   * ['/users/show', '/users/update']
   *
   */

  const Project = () => {
    return <span>projects</span>;
  };
  return (
    <Switch>
      <PrivateRoute path="/users" component={Users} />
      <PrivateRoute path="/projects" component={Project} />
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>

      <Route path="/" exact>
        home
      </Route>
      <Route path="*">404 not found</Route>
    </Switch>
  );
};

export default AppRoutes;
