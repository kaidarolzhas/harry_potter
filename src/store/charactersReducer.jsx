

const initialState = {
    characters: [],
    loading: true,
    error: null
};


export const characterReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_CHARACTERS_SUCCESS":
        return {
          ...state,
          characters: action.payload,
          loading: false,
          error: null
        };
      case "GET_CHARACTERS_FAILURE":
        return {
          ...state,
          characters: [],
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };


