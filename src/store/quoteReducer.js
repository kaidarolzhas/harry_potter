const defaultState = [{
    id: 0,
    author: "unknown",
    text: "default"
  }];
  
  export const deleteQuote = (id) => {
    return {
      type: "DELETE_QUOTE",
      id: id
    };
  };

export const editQuote = (id, author, payload) => {
  return {
    type: "EDIT_QUOTE",
    id,
    author,
    payload
  };
};

export const addQuote = (id, author, payload) => {
  return {
    type: "ADD_QUOTE",
    id,
    author,
    payload
  };
};

export const quoteReducer = (state = defaultState, action) => {
    switch (action.type) {
      case "ADD_QUOTE":
        return [...state, { id: action.id, author: action.author, text: action.payload }];
      case "EDIT_QUOTE":
        return state.map(quote => {
          if (quote.id === action.id) {
            return { ...quote, author: action.author, text: action.payload };
          }
          return quote;
        });
      case "DELETE_QUOTE":
        return state.filter(quote => quote.id !== action.id);
      default:
        return state;
    }
};

