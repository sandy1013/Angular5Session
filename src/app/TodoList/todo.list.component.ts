import { Component, Input } from '@angular/core';

@Component({
    selector: 'todo-list',
    templateUrl: 'todo.list.component.html',
    styleUrls: ['todo.list.component.scss']
})
export class TodoListComponent {
    todos: {title: string, description: string, createdAt: Date}[];

    constructor() {
        this.todos = [];
    }

    onCreateTodo(todo: {title: string, description: string}) {
        this.todos.push({
            title: todo.title,
            description: todo.description,
            createdAt: new Date()
        });
    }

    onDeleteTodo(todo: {title: string, description: string, createdAt: Date}) {
        const index = this.todos.findIndex((todo_item) => {
            return todo_item.createdAt === todo.createdAt;
        });

        this.todos.splice(index, 1);
    }
}
