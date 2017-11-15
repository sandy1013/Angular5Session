import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MainRouter } from './todo.main.router';

import { MainComponent } from './todo.main.component';
import { LoginComponent } from './Login/todo.login.component';
import { TodoListComponent } from './TodoList/todo.list.component';
import { TodoEditorComponent } from './TodoList/TodoEditor/todo.editor.component';
import { TodoListItemComponent } from './TodoList/TodoListItem/todo.listitem.component';
import { CompletedListComponent } from './CompletedList/todo.completed.component';
import { TodoDetailComponent } from './TodoDetail/todo.detail.component';
import { RegisterComponent } from './Register/todo.register.component';

import { ListHoverDirective } from './TodoList/TodoListItem/Directives/todo.listhover.directive';
import { IfNotDirective } from './TodoList/TodoListItem/Directives/todo.ifnot.directive';

import { TodoLoggingService } from './Shared/Services/todo.logging.service';
import { TodoCommunicationService } from './TodoList/Services/todo.communication.service';
import { StorageService } from './Shared/Services/todo.storage.service';

import { TitlePipe } from './Shared/Pipes/todo.title.pipe';
import { PasswordStrengthDirective } from './Register/Directives/todo.password.directive';
import { AuthGuard } from './Shared/Guards/todo.auth.gaurd';
import { ResponseInterceptor } from './Shared/Interceptors/todo.response.interceptor';


@NgModule({
  declarations: [
    MainComponent,
    LoginComponent,
    TodoListComponent,
    TodoEditorComponent,
    TodoListItemComponent,
    RegisterComponent,
    ListHoverDirective,
    IfNotDirective,
    CompletedListComponent,
    TodoDetailComponent,
    TitlePipe,
    PasswordStrengthDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
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
