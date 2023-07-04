import { Injectable, computed, signal } from '@angular/core';
import { Item } from '../interfaces/Item.interface';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilesService {


  private readonly url="http://localhost:3000/api";
  
  private _items = signal<Item[]>([]);

  constructor(private http: HttpClient) { 
    
  }

  items = computed(() => this._items());

  cargarInformacion(){
    this.getFiles().subscribe((items)=>{
      this.setItems(items)
    });
    // const items = [{propietario:false, id: uuidv4(), nombre: 'Carpeta', tipo: "folder", fecha_registro: new Date(), acceso: [{ id: "5", nombre: "Varela" },{ id: "x", nombre: "Xarela" }, { id: "6", nombre: "Andres" },{id:"7",nombre:"Aeeee"},{id:"10",nombre:"dfdf"}] },
    // {propietario:false, id: uuidv4(), nombre: 'Macha.xlsx', tipo: "excel", fecha_registro: new Date(), acceso: [{ id: "7", nombre: "Gabriel" }] },
    // {propietario:false, id: uuidv4(), nombre: 'Zobra.zip', tipo: "zip", fecha_registro: new Date(), acceso: [{ id: "8", nombre: "Maria" }] },
    // {propietario:false, id: uuidv4(), nombre: 'Varela.txt', tipo: "txt", fecha_registro: new Date(), acceso: [{ id: "9", nombre: "Elizabeth" }] }];                  
    // this.setItems(items)
  }

  setItems(items: Item[],parent:string="") {
    this._items.set(items);
  }

  eliminarItem(id: string) {
    const items = this._items().filter(item => item.id !== id);
    this._items.set([...items]);
  }


  private getFiles(): Observable<Item[]> {
    console.log("getFiles");
    return this.http.get<Item[]>(`${this.url}/files`);
  }

  




}


