import React from "react";

const ExpenseForm = () => {
  return (
    <div className="row d-flex align-items-center">
      <div className="col-sm">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          className="form-control"
          required="required"
        />
      </div>
      <div className="col-sm">
        <label for="cost">Cost</label>
        <input
          type="text"
          className="form-control"
          id="cost"
          required="required"
        />
      </div>
      <div className="col-sm">
        <button className="btn bg-primary text-white ">Add</button>
      </div>
    </div>
  );
};

export default ExpenseForm;
