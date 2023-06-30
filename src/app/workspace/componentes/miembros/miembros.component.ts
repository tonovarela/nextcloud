import { Component, Input, OnInit } from '@angular/core';
import { Avatar, Item } from '../../interfaces/Item.interface';


@Component({
  selector: 'app-miembros',
  templateUrl: './miembros.component.html',
  styleUrls: ['./miembros.component.scss']
})
export class MiembrosComponent implements OnInit {
  @Input('item')item?:Item;
  miembros:Avatar[]=[];
  resto:number =0;   
   ngOnInit(): void {       
    const accesos = [...this.item?.acceso!] ;    
    if (accesos.length > 5) {
      this.resto = accesos.length - 5;
      accesos.splice(5, accesos.length - 1);      
    };     
    this.miembros = accesos;
     
   }


 

   
   
}
