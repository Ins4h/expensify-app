import React from "react";
import { shallow } from "enzyme";
import { ExpenseSummary } from "../../components/ExpenseSummary";
import expenses from "../fixtures/expenses";
import { altFilters } from "../fixtures/filters";

test("should render ExpenseSummary with 1 expense correctly", () => {
  const wrapper = shallow(<ExpenseSummary expenses={[expenses[1]]} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseSummary with multiple expenses", () => {
  const wrapper = shallow(<ExpenseSummary expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});
