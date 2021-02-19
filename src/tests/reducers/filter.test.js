import moment from "moment";
import filterReducer from "../../reducers/filters";

test("should setup default filter values", () => {
  const state = filterReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  });
});

test("should set sortBy to amount", () => {
  const state = filterReducer(undefined, {
    type: "SORT_BY_AMOUNT",
    sortBy: "amount",
  });
  expect(state.sortBy).toBe("amount");
});

test("should set sortBy to date", () => {
  const currentState = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: "amount",
  };
  const state = filterReducer(currentState, {
    type: "SORT_BY_DATE",
    sortBy: "date",
  });
  expect(state.sortBy).toBe("date");
});

test("should set text filter", () => {
  const state = filterReducer(undefined, {
    type: "SET_TEXT",
    text: "a",
  });
  expect(state.text).toBe("a");
});

test("should set startDate filter", () => {
  const startDate = moment();
  const state = filterReducer(undefined, {
    type: "SET_START_DATE",
    startDate: startDate,
  });
  expect(state.startDate).toBe(startDate);
});

test("should set startDate filter", () => {
  const endDate = moment();
  const state = filterReducer(undefined, {
    type: "SET_END_DATE",
    endDate: endDate,
  });
  expect(state.endDate).toBe(endDate);
});
