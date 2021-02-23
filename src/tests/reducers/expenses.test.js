import e from "express";
import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    remove: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expenses if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    remove: "-1",
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add an expense", () => {
  const newExpense = {
    description: "New",
    note: "",
    amount: 100,
    createdAt: 0,
    id: "qwerty",
  };
  const action = {
    type: "ADD_EXPENSE",
    expense: newExpense,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, newExpense]);
});

test("should edit an expense", () => {
  const update = {
    description: "New description",
  };
  const updated = {
    ...expenses[1],
    description: "New description",
  };

  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    update,
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], updated, expenses[2]]);
});

test("should not edit expense if expense not found", () => {
  const update = {
    description: "New description",
  };
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    update,
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should set expenses", () => {
  const action = {
    type: "SET_EXPENSES",
    expenses: [expenses[1]],
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});
