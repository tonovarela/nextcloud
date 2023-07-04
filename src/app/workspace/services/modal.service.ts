import { Injectable, computed, signal } from '@angular/core';
import { Item, StateModal, StateModalUpload } from '../interfaces/Item.interface';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private _modalShare = signal<StateModal>({ isOpen: false, file: undefined });
  private _modalDetails = signal<StateModal>({ isOpen: false, file: undefined });
  private _modalUpload = signal<StateModalUpload>({ isOpen: false, sendingFiles: false, files: [] });
  private _modalCreateFolder = signal<StateModal>({ isOpen: false, file: undefined });


  public modalShare = computed(() => this._modalShare());
  public modalDetails = computed(() => this._modalDetails());
  public modalUpload = computed(() => this._modalUpload());
  public modalCreateFolder = computed(() => this._modalCreateFolder());



  openCreateFolder() {
    this._modalCreateFolder.mutate((current) => current.isOpen = true);
  }

  closeCreateFolder() {
    this._modalCreateFolder.mutate((current) => current.isOpen = false);
  }


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
