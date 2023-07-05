import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { agregarPropiedades } from 'src/app/utils/utils';
import { FilesService, ModalService } from '../../services';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {
  public viewShow = 1;

  private filesService = inject(FilesService);
  public modalService = inject(ModalService);


  activatedRoute = inject(ActivatedRoute);

  items = computed(() => {
    const items = this.filesService.items();
    return agregarPropiedades([...items]);
  })

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {      
      id = id == undefined ? '0' :id;
      this.filesService.id_parent=id;
      this.filesService.cargarInformacion();
    });


  }




}
