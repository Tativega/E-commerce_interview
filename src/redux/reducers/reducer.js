import { RECEIVE_PRODUCTS, RECEIVE_FILTERED } from "../actions/products";

const initialState = {
products: [],
slides: [],
filters: [],
filtered: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {...state, 
        products: action.products.products,
        slides: action.products.slides,
        filters: action.products.filters
      };
      case RECEIVE_FILTERED:
        return {...state, filtered: action.filtered}
    default:
      return state;
  }
};
