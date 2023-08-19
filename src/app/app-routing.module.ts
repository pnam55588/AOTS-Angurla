import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListComponent } from './ToDoList/to-do-list/to-do-list.component';
import { ToDoDetailComponent } from './ToDoList/to-do-detail/to-do-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/to-do-list', pathMatch: 'full' },
  { path: 'to-do-list', component: ToDoListComponent }, 
  { path: 'to-do-detail', component: ToDoDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
