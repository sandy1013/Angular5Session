import { TodoSaveModel } from "../Models/todo.model";
import { TodoLoggingService } from "../../Shared/Services/todo.logging.service";
import { Injectable } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { Subject } from "rxjs/Subject";

@Injectable()
export class TodoCommunicationService {
    todos: TodoSaveModel[];
    completedTodos: TodoSaveModel[];
    selectedTodo = new Subject();
    completedTodo = new Subject();
    
    constructor(private logging: TodoLoggingService) {
        this.logging.log("Initilized logging service.");
        this.completedTodos = [];
        this.todos = []

        this.selectedTodo.subscribe((data: {model: TodoSaveModel, add: boolean}) => {
            if (data.add) {
                this.addTodo(data.model);
            } else {
                this.completeTodo(data.model);
            }
        });

        this.completedTodo.subscribe((data: TodoSaveModel) => {
            this.deleteFromCompleted(data);
        });
    }

    moveToCompleted(todo: TodoSaveModel) {
        this.completedTodos.push(todo);
    }

    deleteFromCompleted(todo: TodoSaveModel) {
        const index = this.completedTodos.findIndex((todo_item) => {
            return todo_item._id === todo._id;
        });

        this.completedTodos.splice(index, 1);
        
        this.logging.log('Todo at index : ' + index + ' permenently deleted.');
    }

    addTodo(todo: TodoSaveModel) {
        this.todos.push(todo);
        this.logging.log('New todo created.');
    }

    completeTodo(todo: TodoSaveModel) {
        const index = this.todos.findIndex((todo_item) => {
            return todo_item._id === todo._id;
        });

        if(index > -1) {
            let todoClone = Object.assign({}, todo);
            this.moveToCompleted(todoClone);
            this.todos.splice(index, 1);
        }
        
        this.logging.log('Todo at index : ' + index + ' moved t completed list.');
    }
}