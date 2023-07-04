import { Component, OnInit, inject, computed } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { ModalService,FilesService } from '../../services';

import { Item } from '../../interfaces/Item.interface';
declare var Swal:any;
@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  modalService = inject(ModalService);
  filesService = inject(FilesService);
  isSendingFiles = computed(() => this.modalService.modalUpload().sendingFiles);
  files: File[] = [];

  ngOnInit(): void {
    this.files = [];
  }
  
  onSelect(event: any) {
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then((result:any) => {
      console.log(result);
    });;
    if (this.isSendingFiles()) {
      return;
    }
    this.files.splice(this.files.indexOf(event), 1);
  }


  cerrarModal() {
    if (this.isSendingFiles()) {
      return;
    }
    this.modalService.closeUpload();    
  }

  registrarArchivos() {
    this.modalService.initSendingFiles(this.files);    
    setTimeout(() => {
      const { items } = this.filesService;
      const newItems: Item[] = [];
      this.files.forEach(f => {
        const newItem: Item = { propietario: true, id: uuidv4(), nombre: f.name, tipo: f.type, fecha_registro: new Date(), acceso: [] };
        newItems.push(newItem);
      });
      this.filesService.setItems([...items(), ...newItems]);
      this.modalService.finishSendingFiles();      
    }, 3000);
  }


}
