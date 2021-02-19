import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";

export class CreateExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.addExpense(expense);
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
  addExpense: (expense) => dispatch(addExpense(expense)),
});

export default connect(undefined, mapDispatchToProps)(CreateExpensePage);
