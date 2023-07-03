import { Component, AfterViewInit, effect, computed } from '@angular/core';
import { ModalAbstractComponent } from '../../../abstract/ModalAbstract';

@Component({
  selector: 'app-upload-modal',
  templateUrl: './upload-modal.component.html',
  styleUrls: ['./upload-modal.component.scss']
})
export class UploadModalComponent extends ModalAbstractComponent implements AfterViewInit {

  public uploadModalisOpen = computed(() => this.modalService.modalUpload().isOpen);
  private modalUploadChange = effect(() => {
    this.modalService.modalUpload().isOpen ? this.modalComponent?.show()! : this.modalComponent?.hide()!;
  }
  );
  
  ngAfterViewInit(): void {
    this.inicializarModal("uploadView");    
     this.collectionRef.push(this.modalUploadChange);

  }


}
