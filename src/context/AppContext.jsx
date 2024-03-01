import { createContext, useReducer } from "react";
export const AppContext = createContext();


const initialState = {
  budget: 9540,
  expenseItems: [
    {
      id: 2223,
      name: "Shopping",
      cost: 50,
    },
    {
      id: 2224,
      name: "Holiday",
      cost: 900,
    },
    {
      id: 2225,
      name: "Transportation",
      cost: 400,
    },
    // {
    //   id: 2226,
    //   name: "Fuel",
    //   cost: 70,
    // },
    // {
    //     id: 2227,
    //     name: "Child Care",
    //     cost: 40,
    // },
],
};
const AppReducer = (initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};


export const AppProvider = (props) => {
  const [ state, dispatch ] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenseItems: state.expenseItems,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
