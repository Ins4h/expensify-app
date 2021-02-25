import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import { Link } from "react-router-dom";
import getExpenseTotal from "../selectors/selectExpenseTotal";
import getVisibleExpenses from "../selectors/expenses";

export const ExpenseSummary = ({ expenses }) => (
  <div className="page-header">
    <div className="content-container">
      <h1 className="page-header__title">
        Viewing
        <span>
          {" "}
          {expenses.length} {expenses.length === 1 ? " expense" : " expenses"}
        </span>{" "}
        totalling
        <span>{numeral(getExpenseTotal(expenses)).format(" $0.00")}</span>
      </h1>
      <div className="page-header__actions">
        <Link className="button" to="/create">
          Add Expense
        </Link>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  expenses: getVisibleExpenses(state.expenses, state.filters),
});

export default connect(mapStateToProps)(ExpenseSummary);
