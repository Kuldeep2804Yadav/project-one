import React from 'react';
import "./ExpenseDate.css";
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function ExpenseDate(props) {
  let month = months[props.date.getMonth()];
  let year = props.date.getFullYear();
  let date = props.date.getDate();
  return (
    <div>
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{date}</div>
      </div>
    </div>
  );
}

export default ExpenseDate;
