import { Component, Output, Input, EventEmitter } from '@angular/core';
import { TodoSaveModel, TodoModel } from '../Models/todo.model';
import { TodoCommunicationService } from '../Services/todo.communication.service';

@Component({
    selector: 'todo-list-item',
    templateUrl: 'todo.listitem.component.html',
    styleUrls: ['todo.listitem.component.scss']
})
export class TodoListItemComponent {
    @Input() todo: TodoSaveModel;

    constructor(private todoCommunicationService: TodoCommunicationService) {}

    onListItemClick() {
        this.todoCommunicationService.selectedTodo.next({
            model: this.todo,
            add: false
        });
        //this.todoCommunicationService.deleteTodo(this.todo);
    };
}
