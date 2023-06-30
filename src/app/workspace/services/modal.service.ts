import { Injectable, signal, computed } from '@angular/core';
import { Item } from '../interfaces/Item.interface';

export interface StateModal {
  isOpen: boolean;
  file?:Item
}


@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modalShare = signal<StateModal>({isOpen:false, file:undefined});
  modalDetails = signal<StateModal>({isOpen:false, file:undefined});
  modalUpload = signal<boolean>(false);


  constructor() { }
}
