import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddItemAction, DeleteItemAction } from './store/actions/shopping.actions';
import { AppState } from './store/models/app-state.model';
import { ShoppingItem } from './store/models/shopping-item.model';

import { v4 as uuid } from 'uuid';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  shoppingItems$: Observable<ShoppingItem[]>;
  newShoppingItem: ShoppingItem = { id: '', name: '' };

  constructor(private store: Store<AppState>) {
    //this.shoppingItems$ = this.store.select(appState => appState.shoppingItems);
    this.shoppingItems$ = this.store.select('shoppingItems');
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
