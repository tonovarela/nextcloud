import { Component, OnInit, computed, inject } from '@angular/core';
import { agregarPropiedades } from 'src/app/utils/utils';
import { FilesService, ModalService } from '../../services';
import { v4 as uuidv4 } from 'uuid';




@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit{
  public viewShow = 1;
  
  
  private filesService  =inject(FilesService);
  public modalService=  inject(ModalService);

  items = computed(()=>{
    const items= this.filesService.items();
    return agregarPropiedades([...items]);
  })

  ngOnInit(): void {    
    const items = [{propietario:false, id: uuidv4(), nombre: 'Carpeta', tipo: "folder", fecha_registro: new Date(), acceso: [{ id: "5", nombre: "Varela" },{ id: "x", nombre: "Xarela" }, { id: "6", nombre: "Andres" },{id:"7",nombre:"Aeeee"},{id:"10",nombre:"dfdf"}] },
    {propietario:false, id: uuidv4(), nombre: 'Macha.xlsx', tipo: "excel", fecha_registro: new Date(), acceso: [{ id: "7", nombre: "Gabriel" }] },
    {propietario:false, id: uuidv4(), nombre: 'Zobra.zip', tipo: "zip", fecha_registro: new Date(), acceso: [{ id: "8", nombre: "Maria" }] },
    {propietario:false, id: uuidv4(), nombre: 'Varela.txt', tipo: "txt", fecha_registro: new Date(), acceso: [{ id: "9", nombre: "Elizabeth" }] }]              
    this.filesService.inicializarItems(items);
  }




}
