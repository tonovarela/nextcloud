import { Component, AfterViewInit, effect, inject } from '@angular/core';
import { ModalAbstractComponent } from 'src/app/workspace/abstract/ModalAbstract';
import { Item } from 'src/app/workspace/interfaces/Item.interface';
import { FilesService } from 'src/app/workspace/services';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-create-folder-modal',
  templateUrl: './create-folder-modal.component.html',
  styleUrls: ['./create-folder-modal.component.scss']
})
export class CreateFolderModalComponent extends ModalAbstractComponent implements AfterViewInit {

  nombreFolder: string = ""
  fileService = inject(FilesService)

  private modalCreateFolderChange = effect(() => {
    const { isOpen } = this.modalService.modalCreateFolder();
    isOpen ? this.modalComponent?.show() : this.modalComponent?.hide();
    this.nombreFolder = "";
  })

  ngAfterViewInit(): void {
    this.inicializarModal("createFolder");
    this.collectionRef.push(this.modalCreateFolderChange);
  }


  crearFolder() {  
    this.fileService.registarFolder(this.nombreFolder).subscribe(_ => {      
      this.modalService.closeCreateFolder();
      this.fileService.cargarInformacion();
    })
  
  }


  containsSpecialChars() {
    const specialChars = /[`!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(this.nombreFolder);
  }





  get folderValido() {
    return !this.containsSpecialChars() && this.nombreFolder.length > 0

  }

}
