import React from "react";
import { TiDelete } from "react-icons/ti";

const ExpenseItem = ({ id, name, cost }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {name}
      <div>
        <span className="badge rounded-pill bg-primary mr-3">${cost}</span>
        <TiDelete size={20} />
      </div>
    </li>
  );
};

export default ExpenseItem;
