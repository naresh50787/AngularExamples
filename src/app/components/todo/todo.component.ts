import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  todoList :string[] = [];
  inputvalue:string ='';

  removetodo(name:string){
    this.todoList = this.todoList.filter(value => value !==name);
  }

  addtodo(){
    
    this.todoList.push(this.inputvalue);
    this.inputvalue ='';
  }

  ngOnInit(): void {
    this.todoList = ["Task 1", "Task 2", "Task 3"];
  }

}
