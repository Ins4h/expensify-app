import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import getExpenseTotal from "../selectors/selectExpenseTotal";
import getVisibleExpenses from "../selectors/expenses";

export const ExpenseSummary = ({ expenses }) => (
  <p>
    Viewing {expenses.length} {expenses.length === 1 ? "expense" : "expenses"}{" "}
    totalling {numeral(getExpenseTotal(expenses)).format("$0.00")}
  </p>
);

const mapStateToProps = (state) => ({
  expenses: getVisibleExpenses(state.expenses, state.filters),
});

export default connect(mapStateToProps)(ExpenseSummary);
