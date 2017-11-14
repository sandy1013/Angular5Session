import { Component } from "@angular/core";
import { TodoSaveModel } from "../TodoList/Models/todo.model";
import { TodoCommunicationService } from "../TodoList/Services/todo.communication.service";

@Component({
    selector: 'completed-list',
    templateUrl: 'todo.completed.component.html',
    styleUrls: ['todo.completed.component.scss'],
})
export class CompletedListComponent {
    todos: TodoSaveModel[];

    constructor(private todoCommunicationService: TodoCommunicationService) {
        this.todos = this.todoCommunicationService.completedTodos;
    }

    onListItemClick(todo: TodoSaveModel) {
        this.todoCommunicationService.completedTodo.next(todo);
    }
}