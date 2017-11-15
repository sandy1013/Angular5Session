import { Component } from "@angular/core";
import { TodoSaveModel } from "../TodoList/Models/todo.model";
import { TodoCommunicationService } from "../TodoList/Services/todo.communication.service";
import { Router } from "@angular/router";

@Component({
    selector: 'completed-list',
    templateUrl: 'todo.completed.component.html',
    styleUrls: ['todo.completed.component.scss'],
})
export class CompletedListComponent {
    todos: TodoSaveModel[];

    constructor(private todoCommunicationService: TodoCommunicationService, private router: Router) {
        this.todos = this.todoCommunicationService.completedTodos;
    }

    onListItemClick(todo: TodoSaveModel) {
        this.router.navigate(['/detail', true ,todo._id]);
    }
}