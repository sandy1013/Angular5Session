import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'todo-editor',
    templateUrl: 'todo.editor.component.html',
    styleUrls: ['todo.editor.component.scss']
})
export class TodoEditorComponent {
    @Output() onTodo = new EventEmitter<{title: string, description: string}>();
    description: string;


    @ViewChild('title') title: ElementRef; //gives angular wrapped javascipt element

    constructor() {
        this.description = null;
    }

    // gives native dom element
    onCreateTodo(description: HTMLInputElement) {   
        console.log(this.title);
        console.log(description);
        this.onTodo.emit({
            title: this.title.nativeElement.value,
            description: description.value
        });
    }
}
