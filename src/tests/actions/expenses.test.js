import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import database from "../../firebase/firebase";
import {
  addExpense,
  removeExpense,
  editExpense,
  startAddExpense,
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";

const createMockStore = configureMockStore([thunk]);

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
  const action = addExpense(expenses[0]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[0],
  });
});

test("should add expense to database and store", (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: "mouse",
    amount: 40,
    note: "that's the mouse",
    createdAt: 1000,
  };
  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseData,
        },
      });
      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test("should add expense with default to database and store", () => {
  const store = createMockStore({});
  const expenseDefaults = {
    description: "",
    amount: 0,
    note: "",
    createdAt: 0,
  };
  store
    .dispatch(startAddExpense({}))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseDefaults,
        },
      });
      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseDefaults);
      done();
    });
});

// test("Should setup add expense action with default values", () => {
//   const result = addExpense();
//   expect(result).toEqual({
//     type: "ADD_EXPENSE",
//     expense: {
//       description: "",
//       note: "",
//       amount: 0,
//       createdAt: 0,
//       id: expect.any(String),
//     },
//   });
// });
