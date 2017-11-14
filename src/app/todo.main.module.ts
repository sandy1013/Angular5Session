import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MainRouter } from './todo.main.router';

import { MainComponent } from './todo.main.component';
import { TodoListComponent } from './TodoList/todo.list.component';
import { TodoEditorComponent } from './TodoList/TodoEditor/todo.editor.component';
import { TodoListItemComponent } from './TodoList/TodoListItem/todo.listitem.component';
import { CompletedListComponent } from './CompletedList/todo.completed.component';

import { ListHoverDirective } from './TodoList/TodoListItem/Directives/todo.listhover.directive';
import { IfNotDirective } from './TodoList/TodoListItem/Directives/todo.ifnot.directive';

import { TodoLoggingService } from './Shared/Services/todo.logging.service';
import { TodoCommunicationService } from './TodoList/Services/todo.communication.service';

import { TitlePipe } from './Shared/Pipes/todo.title.pipe';

@NgModule({
  declarations: [
    MainComponent,
    TodoListComponent,
    TodoEditorComponent,
    TodoListItemComponent,
    ListHoverDirective,
    IfNotDirective,
    CompletedListComponent,
    TitlePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MainRouter
  ],
  providers: [TodoLoggingService, TodoCommunicationService],
  bootstrap: [MainComponent]
})
export class MainModule { }
