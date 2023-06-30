import { Component, Input, inject } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { Item } from '../../interfaces/Item.interface';
import { FilesService } from '../../services';

@Component({
  selector: 'app-menu-contextual',
  templateUrl: './menu-contextual.component.html',
  styleUrls: ['./menu-contextual.component.scss']
})
export class MenuContextualComponent {
  @Input("item") item!: Item;
  modalService = inject(ModalService);
  filesService = inject(FilesService);

  action(nombreModal: string) {
    switch (nombreModal) {
      case "share":
        this.modalService.openShare(this.item);
        break;
      case "details":
        this.modalService.openDetails(this.item);
        break
      case "delete":
        this.filesService.eliminarItem(this.item.id);
        break
      default:
        break;
    }
  }
}
