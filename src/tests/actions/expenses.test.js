import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test("should setup remove expense action object", () => {
  const result = removeExpense("12345");
  expect(result).toEqual({
    type: "REMOVE_EXPENSE",
    remove: "12345",
  });
});

test("Should setup edit expense action object", () => {
  const result = editExpense("123", { description: "New Description" });
  expect(result).toEqual({
    type: "EDIT_EXPENSE",
    id: "123",
    update: {
      description: "New Description",
    },
  });
});

test("Should setup add expense action object with provided values", () => {
  const expenseData = {
    description: "New Description",
    amount: 11111,
    createdAt: 15000,
    note: "New Note",
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

test("Should setup add expense action with default values", () => {
  const result = addExpense();
  expect(result).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
      id: expect.any(String),
    },
  });
});
