import { Injectable, signal } from '@angular/core';
import { Item } from '../interfaces/Item.interface';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  items = signal<Item[]>([]);



  eliminarItem(id: string) {
    const items = this.items().filter(item => item.id!== id);
    this.items.set([...items]);    
  }
  
}
