import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../interfaces/Item.interface';

@Component({
  selector: 'app-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: ['./files-list.component.scss']
})
export class FilesListComponent implements OnInit{
ngOnInit(): void {
  
}
@Input('items') items: Item[]=[]
}
