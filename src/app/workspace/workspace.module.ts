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




@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    CargarArchivosComponent,
    FilesComponent,
    MenuHomeComponent,
    ImageSvgComponent,    
  ],
  imports: [
    CommonModule,    
    NgxDropzoneModule,
    WorkspaceRoutingModule
  ]
})
export class WorkspaceModule { }
