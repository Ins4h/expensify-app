import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";
import ExpenseForm from "../../components/ExpenseForm";

let removeExpense, editExpense, history, wrapper;

beforeEach(() => {
  removeExpense = jest.fn();
  editExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      removeExpense={removeExpense}
      editExpense={editExpense}
      history={history}
      expense={expenses[1]}
    />
  );
});
test("should render EditExpensePage correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle editExpense", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
});

test("should handle removeExpense", () => {
  wrapper.find("button").prop("onClick")(expenses[1].id);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(removeExpense).toHaveBeenLastCalledWith(expenses[1].id);
});
