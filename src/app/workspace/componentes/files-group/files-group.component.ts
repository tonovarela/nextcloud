import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../interfaces/Item.interface';

@Component({
  selector: 'app-files-group',
  templateUrl: './files-group.component.html',
  styleUrls: ['./files-group.component.scss']
})
export class FilesGroupComponent implements OnInit {
  @Input('items') items: Item[]=[];
  folder:Item[]=[];
  files:Item[] =[];

  ngOnInit(): void {
     this.folder = this.items.filter(item => item.tipo === 'folder');
     this.files = this.items.filter(item => item.tipo !== 'folder');
  }

  
}
