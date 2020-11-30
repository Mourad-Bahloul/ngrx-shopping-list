import { ShoppingAction } from '../actions/shopping.actions';
import { ShoppingItem } from "./shopping-item.model"

export interface AppState {
  readonly shoppingItems: Array<ShoppingItem>;
}
