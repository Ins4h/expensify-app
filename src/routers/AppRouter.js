import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateExpensePage from "../components/CreateExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import Header from "../components/Header";
import HelpPage from "../components/HelpPage";
import PageNotFound from "../components/PageNotFound";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={ExpenseDashboardPage} />
        <Route path="/create" component={CreateExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
