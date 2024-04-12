import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { TodoService } from 'src/app/services/todo/todo.service';
import { Todo } from 'src/app/services/todo/todo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent implements OnInit {
  // todo: Todo = {
  //   id: 0,
  //   status: 0,
  //   title: '',
  //   description: '',
  //   startDate: '',
  //   endDate: '',
  // };

  todoForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
  });

  constructor(private todoService: TodoService, private router: Router) {}

  ngOnInit(): void {}

  addTodo(): void {
    console.log('OK');
    // フォームの値にidとstatusを追加して送信
    const newTodo: Todo = {
      id: 0,
      status: 0,
      title: this.todoForm.value.title ?? '',
      description: this.todoForm.value.description ?? '',
      startDate: this.todoForm.value.startDate ?? '',
      endDate: this.todoForm.value.endDate ?? '',
    };
    this.todoService.addToList(newTodo);
    // this.todoService.addToList(Object.assign({}, this.todo));
    this.router.navigate(['/todo']);
  }
}
