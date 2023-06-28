import { Component, Input } from '@angular/core';
import { Item } from '../../interfaces/Item.interface';

@Component({
  selector: 'app-files-grid',
  templateUrl: './files-grid.component.html',
  styleUrls: ['./files-grid.component.scss']
})
export class FilesGridComponent {
  @Input('items') items: Item[]=[]
}
