import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import ListTasks from '../../Pages/List';
import Delete from '../../Pages/Delete';
import CreateTask from '../../Pages/Create';


const Routes = (props) => {
  return (
    <Switch>
      <Redirect exact from="/" to="/list-task" />
      <Route path="/list-task" component={ListTasks}/>
      <Route path="/bulk-delete" component={Delete}/>
      <Route path="/create-task" component={CreateTask}/>
    </Switch>
  );
};

export default Routes;
