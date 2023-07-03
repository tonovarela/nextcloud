import { Injectable, computed, signal } from '@angular/core';
import { Item } from '../interfaces/Item.interface';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  private _items = signal<Item[]>([]);




  items = computed(() => this._items());

  inicializarItems(items: Item[]) {
    this._items.set(items);
  }

  eliminarItem(id: string) {
    const items = this._items().filter(item => item.id !== id);
    this._items.set([...items]);
  }


  

}
