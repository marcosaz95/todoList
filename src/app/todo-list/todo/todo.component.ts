import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ITodo } from '../todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() item: ITodo;
  @Output() removeTodoEvent = new EventEmitter();
  @Output() modifyStatusEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  removeTodo() {
    this.removeTodoEvent.emit();
  }

  modifyStatus() {
    this.modifyStatusEvent.emit();
  }

}
