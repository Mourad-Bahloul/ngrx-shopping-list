import { ShoppingAction, ShoppingActionTypes } from '../actions/shopping.actions';
import { ShoppingState } from '../models/shopping-state.model';


const initialState: ShoppingState = {
  shoppingList: [],
  loading: false,
  error: undefined
};

export function shoppingReducer(
  state: ShoppingState = initialState,
  action: ShoppingAction
): ShoppingState {

  switch (action.type) {
    case ShoppingActionTypes.LOAD_SHOPPING:
      return {
        ...state,
        loading: true
      };
    case ShoppingActionTypes.LOAD_SHOPPING_SUCCESS:
      return {
        error: undefined,
        loading: false,
        shoppingList: action.payload
      };
    case ShoppingActionTypes.LOAD_SHOPPING_FAILURE:
      return {
        loading: false,
        error: action.payload,
        shoppingList: []
      };
    case ShoppingActionTypes.ADD_ITEM:
      return {
        ...state,
        loading: true
      };
    case ShoppingActionTypes.ADD_ITEM_SUCCESS:
      return {
        error: undefined,
        shoppingList: [...state.shoppingList, action.payload],
        loading: false
      };
    case ShoppingActionTypes.ADD_ITEM_FAILURE:
      return {
        ...state,
        loading: false, error: action.payload
      };
    case ShoppingActionTypes.DELETE_ITEM:
      return {
        ...state,
        loading: true
      };
    case ShoppingActionTypes.DELETE_ITEM_SUCCESS:
      return {
        loading: false,
        error: undefined,
        shoppingList: [...state.shoppingList.filter(item => item.id !== action.payload)]
      };
    case ShoppingActionTypes.DELETE_ITEM_FAILURE:
      return {
        ...state, loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
