import { Action } from '@ngrx/store';
import { ShoppingItem } from '../models/shopping-item.model';

export enum ShoppingActionTypes {
  LOAD_SHOPPING = '[SHOPPING] Load Shopping',
  LOAD_SHOPPING_SUCCESS = '[SHOPPING] Load Shopping Success',
  LOAD_SHOPPING_FAILURE = '[SHOPPING] Load Shopping Failure',
  ADD_ITEM = '[SHOPPING] Add Item',
  ADD_ITEM_SUCCESS = '[SHOPPING] Add Item Success',
  ADD_ITEM_FAILURE = '[SHOPPING] Add Item Failure',
  DELETE_ITEM = '[SHOPPING] Delete Item',
  DELETE_ITEM_SUCCESS = '[SHOPPING] Delete Item Success',
  DELETE_ITEM_FAILURE = '[SHOPPING] Delete Item Failure',
}

export interface ShoppingAction extends Action {
  readonly type: ShoppingActionTypes;
  readonly payload?: any;
}

export class LoadShoppingAction implements ShoppingAction {
  readonly type = ShoppingActionTypes.LOAD_SHOPPING;
}

export class LoadShoppingSuccessAction implements ShoppingAction {
  readonly type = ShoppingActionTypes.LOAD_SHOPPING_SUCCESS;
  constructor(public payload: Array<ShoppingItem>) { }
}

export class LoadShoppingFailureAction implements ShoppingAction {
  readonly type = ShoppingActionTypes.LOAD_SHOPPING_FAILURE;
  constructor(public payload: Error) { }
}

export class DeleteItemAction implements ShoppingAction {
  readonly type = ShoppingActionTypes.DELETE_ITEM;
  constructor(public payload: string) { }
}

export class DeleteItemSuccessAction implements ShoppingAction {
  readonly type = ShoppingActionTypes.DELETE_ITEM_SUCCESS;
  constructor(public payload: string) { }
}

export class DeleteItemFailureAction implements ShoppingAction {
  readonly type = ShoppingActionTypes.DELETE_ITEM_FAILURE;
  constructor(public payload: Error) { }
}

export class AddItemAction implements ShoppingAction {
  readonly type = ShoppingActionTypes.ADD_ITEM;
  constructor(public payload: ShoppingItem) { }
}

export class AddItemSuccessAction implements ShoppingAction {
  readonly type = ShoppingActionTypes.ADD_ITEM_SUCCESS;
  constructor(public payload: ShoppingItem) { }
}

export class AddItemFailureAction implements ShoppingAction {
  readonly type = ShoppingActionTypes.ADD_ITEM_FAILURE;
  constructor(public payload: Error) { }
}

