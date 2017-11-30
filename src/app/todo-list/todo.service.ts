import { Injectable } from '@angular/core';
import { ITodo } from './todo.interface';

@Injectable()
export class TodoService {

  private _todoList: ITodo[];
  private _counter: number;
  private _todoListTmp: ITodo[];
  private _completedLength: number;

  constructor() {
    this._todoList = [];
    this._todoListTmp = [];
    this._counter = 0;
  }

  get todoList() {
    return this._todoList;
  }

  get counter() {
    return this._counter;
  }

  get completedLength() {
    return this._completedLength;
  }

  add(text) {
    this._todoListTmp.push({
      text: text,
      active: false
    })
    this._counter++;
    this.getCompletedTodoLength();
  }

  remove(idx) {
    if (!this._todoListTmp[idx].active) {
      this._counter--;
    }
    this._todoListTmp.splice(idx, 1);
    this._todoList = this._todoListTmp;
    this.getCompletedTodoLength();
  }

  clearCompleted() {
    this._todoListTmp = this._todoListTmp.filter(elm => !elm.active);
    this._todoList = this._todoListTmp;
    this.getCompletedTodoLength();
  }

  modifyStatus(item) {
    item.active = !item.active;
    this._counter = (item.active) ? this._counter - 1 : this._counter + 1;
    this.getCompletedTodoLength();
  }

  filterList(status) {
    switch (status) {
      case 'all':
        this._todoList = this._todoListTmp;
        break;
      case 'active':
        this._todoList = this._todoListTmp.filter(elm => !elm.active);
        break;
      case 'completed':
        this._todoList = this._todoListTmp.filter(elm => elm.active);
        break;
    }
  }

  getCompletedTodoLength() {
    this._completedLength = this._todoListTmp.filter(elm => elm.active).length;
  }
}