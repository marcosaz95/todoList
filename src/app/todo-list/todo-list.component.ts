import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  textToAdd: string = "";
  todoService: TodoService;

  constructor(private _todoService: TodoService) {
    this.todoService = _todoService;
   }

  ngOnInit() {
    this._todoService.filterList('all');
    this._todoService.getCompletedTodoLength();
  }

  addTodo() {
    this._todoService.add(this.textToAdd);
    this.textToAdd = "";
  }

  modifyStatus(item) {
    this._todoService.modifyStatus(item);
  }

  removeTodo(idx) {
    this._todoService.remove(idx);
  }

  clearCompleted() {
    this._todoService.clearCompleted();
  }

  filterList(status) {
    this._todoService.filterList(status);
  }

}
