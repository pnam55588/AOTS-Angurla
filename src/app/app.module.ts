import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './ToDoList/to-do-list/to-do-list.component';
import { ToDoDetailComponent } from './ToDoList/to-do-detail/to-do-detail.component';
import { TodoServiceService } from './Service/todo-service.service';
import { UppercasePipe } from './Pipe/uppercase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoDetailComponent,
    UppercasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TodoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
