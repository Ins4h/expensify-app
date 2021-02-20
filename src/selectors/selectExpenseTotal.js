const getExpenseTotal = (expenses) => {
  let total = 0;
  expenses.map((expense) => {
    total += expense.amount;
  });
  return total;
};

export default getExpenseTotal;
