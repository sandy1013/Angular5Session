import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MainRouter } from './todo.main.router';

import { MainComponent } from './todo.main.component';
import { TodoListComponent } from './TodoList/todo.list.component';

@NgModule({
  declarations: [
    MainComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MainRouter
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainModule { }
