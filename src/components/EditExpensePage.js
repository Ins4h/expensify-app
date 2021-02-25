import React from "react";
import { connect } from "react-redux";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";
import { Link } from "react-router-dom";

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push("/");
  };

  onClick = () => {
    this.props.startRemoveExpense(this.props.expense.id);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expenses</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
          <Link to="/">
            <button className="button button--remove" onClick={this.onClick}>
              Remove Expense
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      (expense) => expense.id === props.match.params.id
    ),
  };
};

const mapDispatchToProps = (dispatch) => ({
  startRemoveExpense: (id) => dispatch(startRemoveExpense(id)),
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
