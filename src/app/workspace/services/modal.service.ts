import { Injectable, computed, signal } from '@angular/core';
import { Item, StateModal, StateModalUpload } from '../interfaces/Item.interface';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private _modalShare = signal<StateModal>({ isOpen: false, file: undefined });
  private _modalDetails = signal<StateModal>({ isOpen: false, file: undefined });
  private _modalUpload = signal<StateModalUpload>({ isOpen: false, sendingFiles: false, files: [] });


  public modalShare = computed(() => this._modalShare());
  public modalDetails = computed(() => this._modalDetails());
  public modalUpload = computed(() => this._modalUpload());



  openDetails(item: Item) {
    this._modalDetails.set({ isOpen: true, file: item });
  }


  closeDetails() {
    this._modalDetails.set({ isOpen: false, file: undefined });
  }
  
  closeUpload() {
    const { sendingFiles } = this._modalUpload();
    if (sendingFiles) {
      return;
    }
    this._modalUpload.set({ isOpen: false, files: [], sendingFiles: false });
  }

  openUpload() {
    this._modalUpload.set({ isOpen: true, files: [], sendingFiles: false });
  }

  openShare(item: Item) {
    this._modalDetails.set({ isOpen: false, file: undefined });
    this._modalShare.set({ isOpen: true, file: item });
  }

  closeShare() {
    this._modalShare.set({ isOpen: false, file: undefined });
  }

  initSendingFiles(files: File[]) {
    this._modalUpload.set({ sendingFiles: true, files: files, isOpen: true });
  }

  finishSendingFiles() {
    this._modalUpload.set({ sendingFiles: false, files: [], isOpen: false });
  }




}
