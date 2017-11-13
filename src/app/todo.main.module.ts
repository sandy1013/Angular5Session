import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MainRouter } from './todo.main.router';

import { MainComponent } from './todo.main.component';
import { TodoListComponent } from './TodoList/todo.list.component';
import { TodoEditorComponent } from './TodoList/TodoEditor/todo.editor.component';
import { TodoListItemComponent } from './TodoList/TodoListItem/todo.listitem.component';

@NgModule({
  declarations: [
    MainComponent,
    TodoListComponent,
    TodoEditorComponent,
    TodoListItemComponent
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
