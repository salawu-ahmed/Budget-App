import React from "react";
import { TiDelete } from "react-icons/ti";

const ExpenseItem = ({ id, name, cost }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {name}
      <div className="d-flex align-items-center gap-4">
        <span className="badge rounded-pill bg-primary">${cost}</span>
        <TiDelete size={20} />
      </div>
    </li>
  );
};

export default ExpenseItem;
