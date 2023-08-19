import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from "../../Models/to-do";
import { TodoServiceService } from 'src/app/Service/todo-service.service';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  constructor(private todoService: TodoServiceService) { }

  @Input()
  public TodoLst: ToDo[] = [];
  public TodoLstTrue: ToDo[] = [];

  delete = (event: any, i: ToDo) =>{
    this.todoService.delete(event, this.TodoLst, i.getId);
  }

  ngOnInit(): void {
    this.TodoLst = [
      new ToDo(1, "hoc", "aots", false),
      new ToDo(2, "hoc", "aots", false),
      new ToDo(3, "hoc", "aots", true),
      new ToDo(4, "hoc", "aots", false),
      new ToDo(5, "hoc", "aots", true),
    ]
    this.TodoLstTrue = this.TodoLst.filter(x => x.getIsComplete == true);
  } 
}
