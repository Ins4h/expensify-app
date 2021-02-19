import React from "react";
import moment from "moment";
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../components/ExpenseListFliter";
import { filters, altFilters } from "../fixtures/filters";
import { DateRangePicker } from "react-dates";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test("should render ExpenseListFilters correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseListFilters with alt data correctly", () => {
  wrapper.setProps({
    filters: altFilters,
  });
  expect(wrapper).toMatchSnapshot();
});

test("should handle text change", () => {
  const value = "bills";
  wrapper.find("input").prop("onChange")({
    target: {
      value,
    },
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test("should sort by date", () => {
  const value = "date";
  wrapper.find("select").prop("onChange")({
    target: {
      value,
    },
  });
  expect(sortByDate).toHaveBeenCalled();
});

test("should sort by date", () => {
  const value = "date";
  wrapper.setProps({
    filters: altFilters,
  });
  wrapper.find("select").prop("onChange")({
    target: {
      value,
    },
  });
  expect(sortByDate).toHaveBeenCalled();
});

test("should sort by amount", () => {
  const value = "amount";
  wrapper.setProps({
    filters: altFilters,
  });
  wrapper.find("select").prop("onChange")({
    target: {
      value,
    },
  });
  expect(sortByAmount).toHaveBeenCalled();
});

test("should handle date changes", () => {
  const startDate = moment(0).add(4, "years");
  const endDate = moment(0).add(8, "years");
  wrapper.find(DateRangePicker).prop("onDatesChange")({
    startDate,
    endDate,
  });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test("should handle data focus change", () => {
  const calendarFocused = "startDate";
  wrapper.find(DateRangePicker).prop("onFocusChange")(calendarFocused);
  expect(wrapper.state("calendarFocused")).toBe(calendarFocused);
});
