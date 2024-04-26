import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/services/todo/todo';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css'],
})
export class TodoCardComponent implements OnInit {
  @Input() todo: Todo;

  @Output() proceedStatus: EventEmitter<number> = new EventEmitter();

  statusNameList: { [key: number]: string } = {
    0: '未着手',
    1: '作業中',
    2: '完了',
  };

  buttonClass: string = 'bg-blue-500';
  buttonClassList: { [key: number]: string } = {
    0: 'bg-blue-500',
    1: 'bg-red-500',
    2: 'bg-gray-500',
  };

  constructor() {}

  ngOnInit(): void {}

  onClickProceedStatus(): void {
    this.proceedStatus.emit(this.todo.id);
  }

  // ステータスボタンの表示設定
  getStatusName(): string {
    return this.statusNameList[this.todo.status];
  }
  // ステータスボタンのCSS設定
  getButtonClass(): string {
    return this.buttonClassList[this.todo.status];
  }
}
