import { Injectable } from '@angular/core';
import { ITodo } from './todo.interface';

@Injectable()
export class TodoService {

  private _todoList: ITodo[];
  private _todoListTmp: ITodo[];
  private _completedLength: number;
  private _status: string;

  constructor() {
    this._todoList = [];
    this._todoListTmp = [];
    this._status = "all";
  }

  get todoList() {
    return this._todoList;
  }

  get status() {
    return this._status;
  }

  set status(status) {
    this._status = status;
  }

  get todoListTempLength() {
    return this._todoListTmp.length;
  }

  get completedLength() {
    return this._completedLength;
  }

  add(text) {
    this._todoListTmp.push({
      id: this._todoListTmp.length,
      text: text,
      active: false
    })
    this.getCompletedTodoLength();
  }

  remove(id) {
    this._todoListTmp.splice(this._todoListTmp.map(elm => elm.id).indexOf(id), 1);
    this.filterList();
    this.getCompletedTodoLength();
  }

  clearCompleted() {
    this._todoListTmp = this._todoListTmp.filter(elm => !elm.active);
    this.filterList();
    this.getCompletedTodoLength();
  }

  modifyStatus(item) {
    item.active = !item.active;
    this.filterList();
    this.getCompletedTodoLength();
  }

  filterList() {
    switch (this._status) {
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

  checkAll() {
    let assign = this._completedLength === 0;
    this._todoListTmp.map(elm => {
      elm.active = assign;
    })
    this.filterList();
    this.getCompletedTodoLength();
  }
}
