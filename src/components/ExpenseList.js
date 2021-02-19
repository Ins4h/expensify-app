import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

export const ExpenseList = ({ expenses }) => (
  <div>
    {expenses.length === 0 ? (
      <p>No expenses</p>
    ) : (
      expenses.map((expense) => (
        <ExpenseListItem {...expense} key={expense.id} />
      ))
    )}
  </div>
);

const mapStateToProps = (state) => ({
  expenses: selectExpenses(state.expenses, state.filters),
  filters: state.filters,
});

export default connect(mapStateToProps)(ExpenseList);