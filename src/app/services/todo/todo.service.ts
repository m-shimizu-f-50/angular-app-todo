import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoList: Todo[] = [];

  constructor() {}

  /**
   * 新規登録
   */
  addToList(todo: Todo): void {
    // 最大IDの検索
    let maxId: number = 0;
    this.todoList.forEach((todo: Todo) => {
      if (!maxId || todo.id > maxId) {
        maxId = todo.id;
      }
    });

    this.todoList.push(Object.assign({}, todo, { id: maxId + 1 }));

    console.log(this.todoList);
  }

  /**
   * 全件削除
   */
}
