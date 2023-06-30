import { Component, inject, effect, OnDestroy, EffectRef } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { Modal } from 'bootstrap';
import { Item } from '../interfaces/Item.interface';

declare var window: any;
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnDestroy {
  private modalShareComponent: Modal | undefined;
  private modalDetailsComponent: Modal | undefined;
  private modalUploadComponent: Modal | undefined;
  private modalService = inject(ModalService);
  private collectionRef: EffectRef[] = [];
  public itemActive?: Item ;

  private modalShareChange = effect(() => {
    const { isOpen, file } = this.modalService.modalShare();    
    isOpen ? this.modalShareComponent?.show() : this.modalShareComponent?.hide();
    this.itemActive = file;
  });
  private modalDetailsChange = effect(() => {     
    const { isOpen, file } = this.modalService.modalDetails();    
    isOpen ? this.modalDetailsComponent?.show() : this.modalDetailsComponent?.hide()
    this.itemActive = file;
  });
  private modalUploadChange = effect(() => this.modalService.modalUpload() ? this.modalUploadComponent?.show() : this.modalUploadComponent?.hide());



  ngAfterViewInit(): void {
    this.modalShareComponent = new window.bootstrap.Modal(document.getElementById('shareView'));
    this.modalDetailsComponent = new window.bootstrap.Modal(document.getElementById('detailsView'));
    this.modalUploadComponent = new window.bootstrap.Modal(document.getElementById('uploadView'));
    this.collectionRef.push(this.modalShareChange);
    this.collectionRef.push(this.modalUploadChange);
    this.collectionRef.push(this.modalDetailsChange);
  }

  closeShare() {
    this.modalService.modalShare.set({ isOpen: false, file: undefined });
  }
  closeDetails() {
    this.modalService.modalDetails.set({ isOpen: false,file: undefined });
  }
  closeUpload() {
    this.modalService.modalUpload.set(false);
  }

  openUpload() {
    this.modalService.modalUpload.set(true);
  }

  ngOnDestroy(): void {
    this.collectionRef.forEach(ref => ref.destroy());
  }

  compartir() {    
    this.modalService.modalDetails.set({ isOpen: false, file: undefined });
    this.modalService.modalShare.set({ isOpen: true, file: this.itemActive });
  }



}