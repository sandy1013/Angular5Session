import { Component, Output, Input, EventEmitter } from '@angular/core';
import { TodoSaveModel, TodoModel } from '../Models/todo.model';
import { TodoCommunicationService } from '../Services/todo.communication.service';
import { Router } from '@angular/router';

@Component({
    selector: 'todo-list-item',
    templateUrl: 'todo.listitem.component.html',
    styleUrls: ['todo.listitem.component.scss']
})
export class TodoListItemComponent {
    @Input() todo: TodoSaveModel;

    constructor(private todoCommunicationService: TodoCommunicationService, private router: Router) {}

    onListItemClick() {
        this.router.navigate(['/detail', false ,this.todo._id]);
    };
}
