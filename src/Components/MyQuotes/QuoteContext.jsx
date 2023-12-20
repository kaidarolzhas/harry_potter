import React, { createContext, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";


const QuoteContext = createContext();

export function useQuoteContext() {
  return useContext(QuoteContext);
}

export function QuoteProvider({ children }) {
  const quotes = useSelector((state) => state.quote);
  const dispatch = useDispatch();

  function edit(quote) {
    dispatch({
      type: "EDIT_QUOTE",
      id: quote.id,
      author: quote.author,
      payload: quote.text,
    });
  }

  function add(quote) {
    dispatch({
      type: "ADD_QUOTE",
      id: quote.id,
      author: quote.author,
      payload: quote.text,
    });
  }

  function deleteq(myId) {
    dispatch({ type: "DELETE_QUOTE", id:myId });
  }

  const contextValue = {
    quotes,
    edit,
    deleteq,
    add,
  };

  return (
    <QuoteContext.Provider value={contextValue}>
      {children}
    </QuoteContext.Provider>
  );
}
