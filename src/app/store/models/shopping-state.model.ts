import { ShoppingItem } from './shopping-item.model';

export interface ShoppingState {
  shoppingList: ShoppingItem[];
  loading: boolean;
  error: Error;
}

export interface AppState {
  readonly shoppingState: ShoppingState;
}
