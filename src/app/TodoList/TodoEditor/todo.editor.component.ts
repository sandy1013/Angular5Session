import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { TodoSaveModel, TodoModel } from '../Models/todo.model';
import { TodoCommunicationService } from '../Services/todo.communication.service';
import { Form, NgForm } from '@angular/forms';

@Component({
    selector: 'todo-editor',
    templateUrl: 'todo.editor.component.html',
    styleUrls: ['todo.editor.component.scss']
})
export class TodoEditorComponent {
    @ViewChild('f') todoForm: NgForm;
    formsubmitted = false;

    todoData = {
        title: '',
        description: ''
    };

    constructor(private todoCommunicationService: TodoCommunicationService) {}

    onTodoSubmit() {
        this.formsubmitted = true;
        if (this.todoForm.valid) {
            this.todoCommunicationService.selectedTodo.next({
                model: {
                    'title': this.todoForm.value.todoData.title,
                    'description': this.todoForm.value.todoData.description,
                    'createdAt': new Date()
                },
                add: true
            });
        }
    }
}
