import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceRoutingModule } from './workspace-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FilesComponent } from './pages/files/files.component';


import { FilesGridComponent, FilesGroupComponent, FilesListComponent, ImageSvgComponent, MenuContextualComponent, MenuHomeComponent, MiembrosComponent, UploadFileComponent } from './componentes';
import { DetailsModalComponent, ShareModalComponent, UploadModalComponent } from './componentes/modals';
import { PipesModule } from '../pipes/pipes.module';




@NgModule({
  declarations: [
    LayoutComponent,    
    FilesComponent,
    MenuHomeComponent,
    ImageSvgComponent,
    FilesListComponent,
    FilesGridComponent,
    FilesGroupComponent,
    MenuContextualComponent,
    MiembrosComponent,
    UploadFileComponent,    
    UploadModalComponent,
    DetailsModalComponent,
    ShareModalComponent,    
  ],
  imports: [
    CommonModule,    
    NgxDropzoneModule,
    WorkspaceRoutingModule,
    PipesModule

  ]
})
export class WorkspaceModule { }
