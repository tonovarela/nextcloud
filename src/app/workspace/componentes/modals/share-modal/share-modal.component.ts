import { Component, AfterViewInit, effect } from '@angular/core';
import { ModalAbstractComponent } from 'src/app/workspace/abstract/ModalAbstract';
import { Item } from 'src/app/workspace/interfaces/Item.interface';

@Component({
  selector: 'app-share-modal',
  templateUrl: './share-modal.component.html',
  styleUrls: ['./share-modal.component.scss']
})
export class ShareModalComponent extends ModalAbstractComponent implements AfterViewInit{
  public itemActive?: Item;
  
  private modalShareChange = effect(() => {
    const { isOpen, file } = this.modalService.modalShare();
    isOpen ? this.modalComponent?.show() : this.modalComponent?.hide();
    this.itemActive = file;    
  });

  ngAfterViewInit(): void {
    this.inicializarModal("shareView")
    this.collectionRef.push(this.modalShareChange);
  }

}
