import { TodoSaveModel } from "../Models/todo.model";
import { TodoLoggingService } from "../../Shared/Services/todo.logging.service";
import { Injectable } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { Subject } from "rxjs/Subject";

@Injectable()
export class TodoCommunicationService {
    todos: TodoSaveModel[];
    selectedTodo = new Subject();
    
    constructor(private logging: TodoLoggingService) {
        this.logging.log("Initilized logging service.");
        this.todos = [{
            title: 'Test Title',
            description: 'Test Description',
            createdAt: new Date()
        }]

        this.selectedTodo.subscribe((data: {model: TodoSaveModel, add: boolean}) => {
            if (data.add) {
                this.addTodo(data.model);
            } else {
                this.deleteTodo(data.model);
            }
        });
    }

    addTodo(todo: TodoSaveModel) {
        this.todos.push(todo);
        this.logging.log('New todo created.');
    }

    deleteTodo(todo: TodoSaveModel) {
        const index = this.todos.findIndex((todo_item) => {
            return todo_item.createdAt === todo.createdAt;
        });

        this.todos.splice(index, 1);
        this.logging.log('Todo deleted at index : ' + index);
    }
}