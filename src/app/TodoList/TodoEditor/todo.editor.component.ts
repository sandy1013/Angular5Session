import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { OnChanges, 
    OnInit, 
    DoCheck, 
    AfterContentInit, 
    AfterContentChecked, 
    AfterViewInit, 
    AfterViewChecked, 
    OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'todo-editor',
    templateUrl: 'todo.editor.component.html',
    styleUrls: ['todo.editor.component.scss']
})
export class TodoEditorComponent implements  OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
    @Output() onTodo = new EventEmitter<{title: string, description: string}>();
    description: string;

    ngOnChanges(changes){
        console.log(changes);
    }

    ngOnInit() {
        console.log("List Editor Component ngOnInit called!");
    }

    ngDoCheck() {
        console.log("List Editor Component ngDoCheck called!");
    }

    ngAfterContentInit() {
        console.log("List Editor Component ngAfterContentInit called!");
    }

    ngAfterContentChecked() {
        console.log("List Editor Component ngAfterContentChecked called!");
    }

    ngAfterViewInit() {
        console.log("List Editor Component ngAfterViewInit called!");
    }

    ngAfterViewChecked() {
        console.log("List Editor Component ngAfterViewChecked called!");
    }

    ngOnDestroy() {
        console.log("List Editor Component ngOnDestroy called!");
    }

    @ViewChild('title') title: ElementRef; //gives angular wrapped javascipt element

    constructor() {
        this.description = null;
    }

    // gives native dom element
    onCreateTodo(description: HTMLInputElement) {
        this.onTodo.emit({
            title: this.title.nativeElement.value,
            description: description.value
        });
    }
}
