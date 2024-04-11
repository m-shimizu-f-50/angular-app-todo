import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo/todo.service';
import { Todo } from 'src/app/services/todo/todo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent implements OnInit {
  todo: Todo = {
    id: 0,
    status: 0,
    title: '',
    description: '',
    startDate: '',
    endDate: '',
  };

  constructor(private todoService: TodoService, private router: Router) {}

  ngOnInit(): void {}

  addTodo(): void {
    this.todoService.addToList(Object.assign({}, this.todo));

    this.router.navigate(['/todo']);
  }
}
