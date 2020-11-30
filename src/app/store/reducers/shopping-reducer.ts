import { ShoppingAction, ShoppingActionTypes } from '../actions/shopping.actions';
import { ShoppingItem } from "../models/shopping-item.model";


const initialState: Array<ShoppingItem> = [
  {
    id: '472d8071-2fef-4fc5-82ed-076b84513c15',
    name: 'Diet Coke'
  }
];

export function shoppingReducer(
  state: Array<ShoppingItem> = initialState,
  action: ShoppingAction
): Array<ShoppingItem> {

  switch (action.type) {
    case ShoppingActionTypes.ADD_ITEM:
      return [...state, action.payload];
    case ShoppingActionTypes.DELETE_ITEM:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
}
