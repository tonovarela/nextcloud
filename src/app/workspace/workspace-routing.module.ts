import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { FilesComponent } from './pages/files/files.component';
import { FolderComponent } from './pages/folder/folder.component';

const routes: Routes = [{
  path: '', component: LayoutComponent,
  children: [    
    { path: 'home', component: FilesComponent },      
    { path: 'folder/:id', component: FilesComponent },      
    {path: '**', redirectTo: 'home'}
  ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspaceRoutingModule { }
