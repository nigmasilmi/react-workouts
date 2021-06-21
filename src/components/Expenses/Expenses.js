import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = ({ expenses }) => {
  return (
    <Card className="expenses">
      {expenses.map((ele) => (
        <ExpenseItem
          key={ele.id}
          title={ele.title}
          amount={ele.amount}
          date={ele.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
