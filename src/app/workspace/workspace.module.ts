import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceRoutingModule } from './workspace-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { CargarArchivosComponent } from './pages/cargar-archivos/cargar-archivos.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FilesComponent } from './pages/files/files.component';
import { FilesGridComponent, FilesGroupComponent, FilesListComponent, ImageSvgComponent, MenuContextualComponent, MenuHomeComponent, MiembrosComponent, UploadFileComponent } from './componentes';


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
    UploadFileComponent,    
  ],
  imports: [
    CommonModule,    
    NgxDropzoneModule,
    WorkspaceRoutingModule
  ]
})
export class WorkspaceModule { }
