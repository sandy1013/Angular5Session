import { Component, Output, Input, EventEmitter } from '@angular/core';
import { OnChanges, 
    OnInit, 
    DoCheck, 
    AfterContentInit, 
    AfterContentChecked, 
    AfterViewInit, 
    AfterViewChecked, 
    OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'todo-list-item',
    templateUrl: 'todo.listitem.component.html',
    styleUrls: ['todo.listitem.component.scss']
})
export class TodoListItemComponent implements  OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
    @Input() todo: {title: string, description: string, createdAt: Date};
    @Output() onDelete = new EventEmitter<{title: string, description: string, createdAt: Date}>();

    onListItemClick() {
        this.onDelete.emit(this.todo);
    };

    ngOnChanges(changes){
        console.log(changes);
    }

    ngOnInit() {
        console.log("List Item Component ngOnInit called!");
    }

    ngDoCheck() {
        console.log("List Item Component ngDoCheck called!");
    }

    ngAfterContentInit() {
        console.log("List Item Component ngAfterContentInit called!");
    }

    ngAfterContentChecked() {
        console.log("List Item Component ngAfterContentChecked called!");
    }

    ngAfterViewInit() {
        console.log("List Item Component ngAfterViewInit called!");
    }

    ngAfterViewChecked() {
        console.log("List Item Component ngAfterViewChecked called!");
    }

    ngOnDestroy() {
        console.log("List Item Component ngOnDestroy called!");
    }

}
