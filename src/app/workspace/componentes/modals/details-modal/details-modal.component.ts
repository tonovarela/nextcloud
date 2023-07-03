import { AfterViewInit, Component, effect } from '@angular/core';
import { ModalAbstractComponent } from 'src/app/workspace/abstract/ModalAbstract';
import { Item } from 'src/app/workspace/interfaces/Item.interface';


@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.scss']
})
export class DetailsModalComponent extends ModalAbstractComponent implements AfterViewInit {
  public itemActive?: Item;

  private modalDetailsChange = effect(() => {
    const { isOpen, file } = this.modalService.modalDetails();
    isOpen ? this.modalComponent?.show() : this.modalComponent?.hide();    
    this.itemActive = file;    
  });


  ngAfterViewInit(): void {
    this.inicializarModal("detailsView");
    this.collectionRef.push(this.modalDetailsChange);
  }
  

  

}
