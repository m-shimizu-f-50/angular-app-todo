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
    /* 最大IDの検索
     * 新しくIDの付与するための処理
     */
    let maxId: number = 0;
    this.todoList.forEach((todo: Todo) => {
      if (!maxId || todo.id > maxId) {
        maxId = todo.id;
      }
    });

    /* 1.Object.assignで新しくオブジェクトをコピー
     * 2.第二引数のtodoのプロパティが新しいオブジェクトにコピーされる。
     * 3. 第３引数でtodoのidの値を上書き
     */
    this.todoList.push(Object.assign({}, todo, { id: maxId + 1 }));
  }

  /**
   * 全件取得
   */
  getList(): Todo[] {
    return this.todoList.sort((a, b) => (a.startDate > b.startDate ? 1 : -1));
  }

  /**
   * 一件削除
   */
  delete(id: number): void {
    this.todoList = this.todoList.filter((todo) => todo.id !== id);
  }

  /**
   * 全件削除
   */

  /**
   * ステータス変更
   */
  proceedStatus(id: number): Todo[] {
    const todo = this.todoList.find((t) => t.id === id);
    if (!todo) {
      return this.todoList;
    }

    // ステータス完了以降の場合予定を削除
    if (todo.status === 2) {
      this.delete(todo.id);
    }

    // ステータスを更新していく(最大2まで)
    todo.status = Math.min(todo.status + 1, 2);

    return this.todoList;
  }
}
