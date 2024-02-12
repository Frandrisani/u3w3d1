const initialState = {
  annunci: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: {
          ...state.cart,
          // copio anche il contenuto di cart, perchè magari in un futuro vi aggiungerò proprietà!
          // 2 modi per aggiungere un elemento ad un array senza usare push (che è vietato)
          // content: state.cart.content.concat(action.payload) // 1)
          content: [...state.cart.content, action.payload], // 2)
        },
      };

    case "DELETE_FROM_CART":
      return {
        ...state,
        cart: {
          ...state.cart,
          content: state.cart.content.filter((book, i) => i !== action.payload),
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
