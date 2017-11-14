import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'todo-editor',
    templateUrl: 'todo.editor.component.html',
    styleUrls: ['todo.editor.component.scss']
})
export class TodoEditorComponent {
    @Output() onTodo = new EventEmitter<{title: string, description: string}>();
    title: string;
    description: string;
    @Output() todos: {title: string, description: string, createdAt: Date}[];

    constructor() {
        this.title = null;
        this.description = null;
    }

    onCreateTodo() {
        this.onTodo.emit({
            title: this.title,
            description: this.description
        });
    }
}
