import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MainRouter } from './todo.main.router';

import { MainComponent } from './todo.main.component';
import { TodoListComponent } from './TodoList/todo.list.component';
import { TodoEditorComponent } from './TodoList/TodoEditor/todo.editor.component';
import { TodoListItemComponent } from './TodoList/TodoListItem/todo.listitem.component';
import { CompletedListComponent } from './CompletedList/todo.completed.component';
import { TodoDetailComponent } from './TodoDetail/todo.detail.component';

import { ListHoverDirective } from './TodoList/TodoListItem/Directives/todo.listhover.directive';
import { IfNotDirective } from './TodoList/TodoListItem/Directives/todo.ifnot.directive';

import { TodoLoggingService } from './Shared/Services/todo.logging.service';
import { TodoCommunicationService } from './TodoList/Services/todo.communication.service';
import { StorageService } from './Shared/Services/todo.storage.service';

import { TitlePipe } from './Shared/Pipes/todo.title.pipe';
import { AuthGuard } from './Shared/Guards/todo.auth.gaurd';
import { ResponseInterceptor } from './Shared/Interceptors/todo.response.interceptor';

import { AuthModule } from './AuthModulle/todo.auth.module';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    MainComponent,
    TodoListComponent,
    TodoEditorComponent,
    TodoListItemComponent,
    ListHoverDirective,
    IfNotDirective,
    CompletedListComponent,
    TodoDetailComponent,
    TitlePipe,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule,
    MainRouter
  ],
  providers: [TodoLoggingService, TodoCommunicationService, StorageService, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: ResponseInterceptor,
    multi: true
  }],
  bootstrap: [MainComponent]
})
export class MainModule { }
