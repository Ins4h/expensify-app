import React from "react";
import { connect } from "react-redux";
import { editExpense, removeExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";
import { Link } from "react-router-dom";

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push("/");
  };

  onClick = (expense) => {
    this.props.removeExpense(this.props.expense.id);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <Link to="/">
          <button onClick={this.onClick}>Remove</button>
        </Link>
      </div>
    );
  }
}

// const EditExpensePage = (props) => (
//   <div>
//     <ExpenseForm
//       expense={props.expense}
//       onSubmit={(expense) => {
//         props.dispatch(editExpense(props.expense.id, expense));
//         props.history.push("/");
//       }}
//     />
//     <Link to="/">
//       <button
//         onClick={(e) => {
//           props.dispatch(removeExpense(props.expense.id));
//         }}
//       >
//         Remove
//       </button>
//     </Link>
//   </div>
// );

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      (expense) => expense.id === props.match.params.id
    ),
  };
};

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (id) => dispatch(removeExpense(id)),
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
