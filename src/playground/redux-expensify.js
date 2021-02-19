import { createStore, combineReducers } from "redux";
import { v4 as uuidv4 } from "uuid";

const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: { id: uuidv4(), description, note, amount, createdAt },
});

const removeExpense = ({ id }) => ({
  type: "REMOVE_EXPENSE",
  remove: id,
});

const editExpense = (id, update) => ({
  type: "EDIT_EXPENSE",
  id,
  update,
});

const setTextFilter = (text = "") => ({
  type: "SET_TEXT",
  text,
});

const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
  sortBy: "amount",
});

const sortByDate = () => ({
  type: "SORT_BY_DATE",
  sortBy: "date",
});

const setStartDate = (startDate = undefined) => ({
  type: "SET_START_DATE",
  startDate,
});

const setEndDate = (endDate = undefined) => ({
  type: "SET_END_DATE",
  endDate,
});

// Expenses reducer
const expensesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter((expense) => expense.id !== action.remove);
    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (expense.id === action.id) return { ...expense, ...action.update };
        else return expense;
      });
    default:
      return state;
  }
};

// filters reducer
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT":
      return { ...state, text: action.text };
    case "SORT_BY_AMOUNT":
      return { ...state, sortBy: action.sortBy };
    case "SORT_BY_DATE":
      return { ...state, sortBy: action.sortBy };
    case "SET_START_DATE":
      return { ...state, startDate: action.startDate };
    case "SET_END_DATE":
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};

//Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const startDateMatch =
        typeof startDate === "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate === "number" || expense.createdAt >= endDate;
      const textMatch =
        typeof text === "string" &&
        expense.description.toLowerCase().includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") return a.createdAt < b.createdAt ? 1 : -1;
      else if (sortBy === "amount") return a.amount < b.amount ? 1 : -1;
    });
};

// Store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibilityExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibilityExpenses);
});

store.dispatch(
  addExpense({
    description: "rent",
    note: "last part in February",
    amount: 57000,
  })
);
const expenseOne = store.dispatch(addExpense());
const expenseTwo = store.dispatch(addExpense({ description: "sdasd" }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 300 }));

// store.dispatch(setTextFilter("rent"));
// store.dispatch(setTextFilter());
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1225));
// store.dispatch(setEndDate());
// console.log(store.getState());
store.dispatch(setTextFilter("re"));

const demoState = {
  expenses: [
    {
      id: "dsadas",
      description: "Jenuary Rent",
      note: " Final payement for the address",
      amount: 56700,
      createdAt: 0,
    },
  ],
  filters: {
    text: "rent",
    sortBy: "amount", //date or amount
    startDate: undefined,
    endDate: undefined,
  },
};
