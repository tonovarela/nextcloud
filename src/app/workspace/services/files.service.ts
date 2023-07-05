import { Injectable, computed, inject, signal } from '@angular/core';
import { Item } from '../interfaces/Item.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { ResponseItemWorkspace } from '../interfaces/responseAPI';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  private id_usuario: number = 1;
  private readonly url = "http://localhost:3000/api";

  private _items = signal<Item[]>([]);
  private http = inject(HttpClient)
  public id_parent: string = "0";

  items = computed(() => this._items());


  cargarInformacion() {
    if (this.id_parent == "0") {
      this.getFiles(this.id_usuario).subscribe((response) => {
        this.setItems(response.files)
      });
    } else {
      this.obtenerHijos().subscribe((response) => {
        this.setItems(response.files)
      });
    }
  }

  setItems(items: Item[]) {
    this._items.set(items);
  }

  eliminarItem(id: string) {
    this.borrar(id)
      .pipe(catchError((e) => throwError(() => e.error.message)))
      .subscribe({
        next: (_) => {
          this.cargarInformacion();
        },
        error: (e) => {
          alert(e);
        }
      });
  }

  public registrarArchivo(files: File[]) {
    let formData = new FormData();
    formData.append("id_usuario", this.id_usuario.toString());
    formData.append("id_parent", this.id_parent);
    files.forEach(file => formData.append("files[]", file));
    return this.http.post<ResponseItemWorkspace>(`${this.url}/files/upload`, formData);
  }



  public borrar(id: string) {
    return this.http.delete(`${this.url}/files/${id}`);
  }


  public registarFolder(nombre: string) {
    return this.http.post(`${this.url}/files/carpeta`, { nombre, id_usuario: this.id_usuario, id_parent: this.id_parent });
  }

  private getFiles(id_usuario: number): Observable<ResponseItemWorkspace> {
    return this.http.get<ResponseItemWorkspace>(`${this.url}/files/propietario/${id_usuario}`);
  }

  private obtenerHijos(): Observable<ResponseItemWorkspace> {
    return this.http.get<ResponseItemWorkspace>(`${this.url}/files/hijos/${this.id_parent}`);
  }






}


