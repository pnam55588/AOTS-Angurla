import { Injectable } from '@angular/core';
import { ToDoListComponent } from '../ToDoList/to-do-list/to-do-list.component';
import { ToDo } from "../Models/to-do";

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  create = (event: any, TodoLst: ToDo[], todo: ToDo) => {
    TodoLst.push(todo);
  }
  delete = (event: any, TodoLst: ToDo[], id: number) => {
    TodoLst.splice(TodoLst.findIndex(x => x.getId == id), 1);
  }
  update = (event: any, TodoLst: ToDo[], todo: ToDo) => {
    TodoLst[TodoLst.findIndex(x => x.getId == todo.getId)] = todo;
  }
  constructor() { }
}
