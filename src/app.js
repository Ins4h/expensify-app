import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

store.dispatch(
  addExpense({ amount: 500, description: "coffee", createdAt: 21044 })
);
store.dispatch(
  addExpense({ description: "water bill", amount: 30000, createdAt: 10542 })
);
store.dispatch(
  addExpense({ description: "gas bill", amount: 50000, createdAt: 2345 })
);
store.dispatch(
  addExpense({ description: "rent", amount: 24500, createdAt: 1100 })
);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
