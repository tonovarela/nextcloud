import { Component, inject } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent  {
   public modalService = inject(ModalService);

}