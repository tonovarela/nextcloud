import { Component } from '@angular/core';
import { Item } from '../../interfaces/Item.interface';


@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent {
  public viewShow = 3;
  items: Item[] = [
    {propietario:false, id: "1", nombre: 'Carpeta', tipo: "folder", fecha_registro: new Date(), acceso: [{ id: "5", nombre: "Varela" }, { id: "6", nombre: "Andres" },{id:"7",nombre:"Aeeee"},{id:"10",nombre:"dfdf"}] },
    {propietario:false, id: "2", nombre: 'Macha.xlsx', tipo: "excel", fecha_registro: new Date(), acceso: [{ id: "7", nombre: "Gabriel" }] },
    {propietario:false, id: "3", nombre: 'Zobra.zip', tipo: "zip", fecha_registro: new Date(), acceso: [{ id: "8", nombre: "Maria" }] },
    {propietario:false, id: "4", nombre: 'Varela.txt', tipo: "txt", fecha_registro: new Date(), acceso: [{ id: "9", nombre: "Elizabeth" }] },
  ];
  





}
