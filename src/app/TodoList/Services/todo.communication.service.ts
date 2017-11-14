import { TodoSaveModel } from "../Models/todo.model";
import { TodoLoggingService } from "../../Shared/Services/todo.logging.service";
import { Injectable } from "@angular/core";

@Injectable()
export class TodoCommunicationService {
    todos: TodoSaveModel[];
    
    constructor(private logging: TodoLoggingService) {
        this.logging.log("Initilized logging service.");
        this.todos = [{
            title: 'Test Title',
            description: 'Test Description',
            createdAt: new Date()
        }]
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