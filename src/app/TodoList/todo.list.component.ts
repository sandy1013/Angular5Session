import { Component, Input } from '@angular/core';

import { TodoSaveModel, TodoModel } from './Models/todo.model';
import { TodoCommunicationService } from './Services/todo.communication.service';
import { TodoLoggingService } from '../Shared/Services/todo.logging.service';

@Component({
    selector: 'todo-list',
    templateUrl: 'todo.list.component.html',
    styleUrls: ['todo.list.component.scss']
})
export class TodoListComponent {
    todos: TodoSaveModel[];

    constructor(private todoCommunicationService: TodoCommunicationService, private logging: TodoLoggingService) {
        this.todos = this.todoCommunicationService.todos;
    }
}
