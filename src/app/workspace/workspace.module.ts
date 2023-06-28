import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceRoutingModule } from './workspace-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { CargarArchivosComponent } from './pages/cargar-archivos/cargar-archivos.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FilesComponent } from './pages/files/files.component';
import { MenuHomeComponent } from './componentes/menu-home/menu-home.component';
import { ImageSvgComponent } from './componentes/image-svg/image-svg.component';
import { FilesListComponent } from './componentes/files-list/files-list.component';
import { FilesGridComponent } from './componentes/files-grid/files-grid.component';
import { FilesGroupComponent } from './componentes/files-group/files-group.component';
import { MenuContextualComponent } from './componentes/menu-contextual/menu-contextual.component';
import { MiembrosComponent } from './componentes/miembros/miembros.component';




@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    CargarArchivosComponent,
    FilesComponent,
    MenuHomeComponent,
    ImageSvgComponent,
    FilesListComponent,
    FilesGridComponent,
    FilesGroupComponent,
    MenuContextualComponent,
    MiembrosComponent,    
  ],
  imports: [
    CommonModule,    
    NgxDropzoneModule,
    WorkspaceRoutingModule
  ]
})
export class WorkspaceModule { }
