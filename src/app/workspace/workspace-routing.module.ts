import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { FilesComponent } from './pages/files/files.component';

const routes: Routes = [{
  path: '', component: LayoutComponent,
  children: [    
    { path: 'home', component: FilesComponent },  
    { path: 'cargar-archivos' },  
    {path: '**', redirectTo: 'home'}
  ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspaceRoutingModule { }
