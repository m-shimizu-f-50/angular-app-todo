import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { TodoListComponent } from './pages/todo/todo-list/todo-list.component';
import { TodoAddComponent } from './pages/todo/todo-add/todo-add.component';

// ルーティング設定
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'todo',
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
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
