import { Component, Input, OnInit } from '@angular/core';
import { Avatar, Item } from '../../interfaces/Item.interface';

interface Miembro extends Avatar {
iniciales:string;
color:string;
}

@Component({
  selector: 'app-miembros',
  templateUrl: './miembros.component.html',
  styleUrls: ['./miembros.component.scss']
})
export class MiembrosComponent implements OnInit {
  @Input('item')item?:Item =undefined;
  miembros:Miembro[] =[];
  resto:number =0;
   backgroundColors: string[] = ['bg-success','bg-purple','bg-warning','bg-pink','bg-dark','bg-orange'];    
   ngOnInit(): void {
    const accesos = this.item?.acceso || [];
    if (accesos.length > 3) {
      this.resto = accesos.length - 3;
      accesos.splice(3, accesos.length - 1);      
    };
     accesos.forEach(a=>{
       const iniciales=a.nombre.substring(0,2).toUpperCase();
       const index=Math.floor(Math.random() * this.backgroundColors.length);       
       const color =this.backgroundColors[index-1];       
       this.backgroundColors.splice(index-1,1);            
        this.miembros.push({...a,iniciales,color});            
     });    
     
     
   }

   
   
}
