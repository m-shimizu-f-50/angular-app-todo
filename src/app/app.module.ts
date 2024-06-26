import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TodoCardComponent } from './components/todo/todo-card/todo-card.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { TodoListComponent } from './pages/todo/todo-list/todo-list.component';
import { TodoAddComponent } from './pages/todo/todo-add/todo-add.component';

// ルーティング設定
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'todos',
    component: TodoListComponent,
  },
  {
    path: 'todo/add',
    component: TodoAddComponent,
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    TodoListComponent,
    TodoAddComponent,
    TodoCardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
