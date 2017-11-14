import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { TodoSaveModel, TodoModel } from '../Models/todo.model';
import { TodoCommunicationService } from '../Services/todo.communication.service';

@Component({
    selector: 'todo-editor',
    templateUrl: 'todo.editor.component.html',
    styleUrls: ['todo.editor.component.scss']
})
export class TodoEditorComponent {
    @ViewChild('title') title: ElementRef;
    @ViewChild('description') description: ElementRef;

    constructor(private todoCommunicationService: TodoCommunicationService) {}

    onCreateTodo() {
        if (this.title.nativeElement.value && this.description.nativeElement.value) {
            this.todoCommunicationService.addTodo({
                'title': this.title.nativeElement.value,
                'description': this.description.nativeElement.value,
                'createdAt': new Date()
            });
        } else {
            console.log("Fill all fields.");
        }
    }
}
