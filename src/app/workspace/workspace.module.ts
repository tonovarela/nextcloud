import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceRoutingModule } from './workspace-routing.module';
import { NgxDropzoneModule } from 'ngx-dropzone';



import { FilesComponent } from './pages/files/files.component';
import { LayoutComponent } from './layout/layout.component';

import { FilesGridComponent, FilesGroupComponent, FilesListComponent, ImageSvgComponent, MenuContextualComponent, MenuHomeComponent, MiembrosComponent, UploadFileComponent } from './componentes';
import { DetailsModalComponent, ShareModalComponent, UploadModalComponent } from './componentes/modals';
import { PipesModule } from '../pipes/pipes.module';
import { CreateFolderModalComponent } from './componentes/modals/create-folder-modal/create-folder-modal.component';
import { FormsModule } from '@angular/forms';
import { FolderComponent } from './pages/folder/folder.component';
import { ItemFileComponent } from './componentes/item-file/item-file.component';




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
    CreateFolderModalComponent,
    FolderComponent,
    ItemFileComponent,    
  ],
  imports: [
    CommonModule,    
    FormsModule,
    NgxDropzoneModule,
    WorkspaceRoutingModule,
    PipesModule
  ],
  
})
export class WorkspaceModule { }
