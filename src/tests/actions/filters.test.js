import moment from "moment";
import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByAmount,
  sortByDate,
} from "../../actions/filters";

test("should generate set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

test("should generate set end date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0),
  });
});

test("Should generate set text action object with provided values", () => {
  const result = setTextFilter("set filter");
  expect(result).toEqual({
    type: "SET_TEXT",
    text: "set filter",
  });
});

test("Should generate set text action object with default values", () => {
  const result = setTextFilter();
  expect(result).toEqual({
    type: "SET_TEXT",
    text: "",
  });
});

test("Should generate sort by amount object", () => {
  const result = sortByAmount();
  expect(result).toEqual({
    type: "SORT_BY_AMOUNT",
    sortBy: "amount",
  });
});

test("Should generate sort by date object", () => {
  const result = sortByDate();
  expect(result).toEqual({
    type: "SORT_BY_DATE",
    sortBy: "date",
  });
});
