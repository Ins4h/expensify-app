import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { startAddExpense } from "../actions/expenses";

export class CreateExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

// const CreateExpensePage = ({ dispatch, history, onSubmit }) => (
//   <div>
//     <h1>This is from createExpense component</h1>
//     <ExpenseForm
//       onSubmit={(expense) => {
//         // dispatch(addExpense(expense));
//         onSubmit(expense);
//         history.push("/");
//       }}
//     />
//   </div>
// );

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense)),
});

export default connect(undefined, mapDispatchToProps)(CreateExpensePage);
