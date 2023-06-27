import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { CargarArchivosComponent } from './pages/cargar-archivos/cargar-archivos.component';
import { FilesComponent } from './pages/files/files.component';

const routes: Routes = [{
  path: '', component: LayoutComponent,
  children: [
    { path: 'home', component: HomeComponent },  
    { path: 'files', component: FilesComponent },  
    { path: 'cargar-archivos', component: CargarArchivosComponent },  
    {path: '**', redirectTo: 'home'}
  ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspaceRoutingModule { }
