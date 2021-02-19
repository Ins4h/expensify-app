import moment from "moment";

const expenses = [
  {
    id: "1",
    description: "Coffe",
    note: "",
    amount: 2000,
    createdAt: 0,
  },
  {
    id: "2",
    description: "Tea",
    note: "",
    amount: 1500,
    createdAt: moment(0).add(4, "days").valueOf(),
  },
  {
    id: "3",
    description: "Pizza",
    note: "",
    amount: 5000,
    createdAt: moment(0).subtract(2, "days").valueOf(),
  },
];

export default expenses;
