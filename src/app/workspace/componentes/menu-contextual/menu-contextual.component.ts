import { Component, Input, inject } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { Item } from '../../interfaces/Item.interface';

@Component({
  selector: 'app-menu-contextual',
  templateUrl: './menu-contextual.component.html',
  styleUrls: ['./menu-contextual.component.scss']
})
export class MenuContextualComponent {
  @Input("item") item!: Item;
  modalService = inject(ModalService);

  verModal(nombreModal: string) {
    switch (nombreModal) {
      case "share":        
        this.modalService.modalShare.set({ isOpen: true, file: this.item });
        break;
      case "details":      
        this.modalService.modalDetails.set({ isOpen: true, file: this.item });
        break

      default:
        break;
    }
  }
}
