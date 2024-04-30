import { Component, OnInit } from '@angular/core';

import { TodoService } from 'src/app/services/todo/todo.service';
import { Todo } from 'src/app/services/todo/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todoList: Todo[] = [];
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getList().subscribe((data) => {
      this.todoList = data;
    });
    // this.todoList = this.todoService.getList();
  }

  // ステータス変更
  proceedStatus(id: number): void {
    this.todoList = this.todoService.proceedStatus(id);
  }
}
