import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from './Models/to-do';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ToDo';

  
  @Input()
  public TodoLst: ToDo[] = [];
  public TodoLstTrue: ToDo[] = [];

  ngOnInit(): void {
    this.TodoLst = [
      new ToDo(1, "hoc", "aots", false),
      new ToDo(2, "hoc", "aots", false),
      new ToDo(3, "hoc", "aots", true),
      new ToDo(4, "hoc", "aots", false),
      new ToDo(5, "hoc", "aots", true),
    ]
    this.TodoLstTrue = this.TodoLst.filter(x => x.getIsComplete == true);
    console.log(this.TodoLstTrue);
  } 
}
