import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddItemAction, DeleteItemAction, LoadShoppingAction } from './store/actions/shopping.actions';
import { ShoppingItem } from './store/models/shopping-item.model';

import { v4 as uuid } from 'uuid';
import { AppState } from './store/models/shopping-state.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  shoppingItems$: Observable<ShoppingItem[]>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>;
  newShoppingItem: ShoppingItem = { id: '', name: '' };

  constructor(private store: Store<AppState>) {
    //this.shoppingState$ = this.store.select(shoppingState => shoppingState.shoppingList);
    this.shoppingItems$ = this.store.select(s => s.shoppingState.shoppingList);
    this.loading$ = this.store.select(s => s.shoppingState.loading);
    this.error$ = this.store.select(s => s.shoppingState.error);

    this.store.dispatch(new LoadShoppingAction());
}

  addItem(): void {
    this.newShoppingItem.id = uuid();
    this.store.dispatch(new AddItemAction(this.newShoppingItem));
    this.newShoppingItem = { id: '', name: '' };
  }


  deleteItem(id: string): void {
    this.store.dispatch(new DeleteItemAction(id));
  }

}
