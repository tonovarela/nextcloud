import { Component, Input, inject } from '@angular/core';
import { Item } from '../../interfaces/Item.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-file',
  templateUrl: './item-file.component.html',
  styleUrls: ['./item-file.component.scss']
})
export class ItemFileComponent {

  @Input("item") item!: Item;
  
  router=inject(Router)

  irDetalleItem() {
    if (this.item.tipo == "folder") {
     this.router.navigateByUrl("/workspace/folder/" + this.item.id);
     return;
    }

    alert("Descargando archivo");
    
  }
}
