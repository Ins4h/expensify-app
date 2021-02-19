import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1> Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Back to home!
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Create Expense!
    </NavLink>
    <NavLink to="/edit" activeClassName="is-active">
      Edit Your Expenses
    </NavLink>
  </header>
);

export default Header;
