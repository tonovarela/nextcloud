import { Component, OnInit, inject, computed } from '@angular/core';
import { ModalService, FilesService } from '../../services';
import {Observer } from 'rxjs';
import { ResponseItemWorkspace } from '../../interfaces/responseAPI';
declare var Swal: any;
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
    }).then((result: any) => {
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
    const observer:Observer<ResponseItemWorkspace>={
      next: (_) => {      
      },
      error: (error: any) => {
      
        this.modalService.finishSendingFiles();
      },
      complete: () => {        
        this.modalService.finishSendingFiles();
        this.filesService.cargarInformacion();
      }          
    }
     this.filesService.registrarArchivo(this.files).subscribe(observer);
  
  }


}
