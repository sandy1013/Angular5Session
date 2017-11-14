import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, OnInit } from '@angular/core';
import { TodoSaveModel, TodoModel } from '../Models/todo.model';
import { TodoCommunicationService } from '../Services/todo.communication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'todo-editor',
    templateUrl: 'todo.editor.component.html',
    styleUrls: ['todo.editor.component.scss']
})
export class TodoEditorComponent implements OnInit {
    todoForm: FormGroup;
    errors: any;

    constructor(private todoCommunicationService: TodoCommunicationService) {
        this.errors = {
            valid: false,
            message: null,
            controls: {
                title: {
                    required: false
                },
                description: {
                    required: false
                }
            }
        };
    }

    resetErrors() {
        this.errors.valid = true;
        this.errors.message = null;
        // tslint:disable-next-line:forin
        for (const control in this.errors.controls) {
            // tslint:disable-next-line:forin
            for (const err in this.errors.controls[control]) {
                this.errors.controls[control][err] = false;
            }
        }
    }

    ngOnInit() {
        this.todoForm = new FormGroup({
            'title': new FormControl(null, [Validators.required]),
            'description': new FormControl(null, [Validators.required])
        });

        // this.todoForm.valueChanges.subscribe((value) => {
        //     console.log(value);
        // });

        // this.todoForm.statusChanges.subscribe((state) => {
        //     console.log(state);
        // });
    }

    validate() {
        if (this.todoForm.invalid) {
            // tslint:disable-next-line:forin
            for (const control in this.todoForm.controls) {
                const control_input = this.todoForm.controls[control];
                // tslint:disable-next-line:forin
                for (const err in control_input.errors) {
                    this.errors.valid = false;
                    this.errors.controls[control][err] = true;
                }
            }
        }

        if (!this.todoForm.valid) { return; }
    }

    onTodoSubmit() {
        this.resetErrors();
        this.validate();

        if (this.todoForm.valid) {
            this.todoCommunicationService.selectedTodo.next({
                model: {
                    'title': this.todoForm.value.title,
                    'description': this.todoForm.value.description,
                    'createdAt': new Date()
                },
                add: true
            });

            this.todoForm.reset();
        }
    }
}
