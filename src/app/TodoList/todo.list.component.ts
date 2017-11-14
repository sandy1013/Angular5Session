import { Component, Input } from '@angular/core';
import { OnChanges, 
         OnInit, 
         DoCheck, 
         AfterContentInit, 
         AfterContentChecked, 
         AfterViewInit, 
         AfterViewChecked, 
         OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'todo-list',
    templateUrl: 'todo.list.component.html',
    styleUrls: ['todo.list.component.scss']
})
export class TodoListComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
    todos: {title: string, description: string, createdAt: Date}[];

    constructor() {
        this.todos = [];
    }

    ngOnChanges(changes){
        console.log(changes);
    }

    ngOnInit() {
        console.log("List Component ngOnInit called!");
    }

    ngDoCheck() {
        console.log("List Component ngDoCheck called!");
    }

    ngAfterContentInit() {
        console.log("List Component ngAfterContentInit called!");
    }

    ngAfterContentChecked() {
        console.log("List Component ngAfterContentChecked called!");
    }

    ngAfterViewInit() {
        console.log("List Component ngAfterViewInit called!");
    }

    ngAfterViewChecked() {
        console.log("List Component ngAfterViewChecked called!");
    }

    ngOnDestroy() {
        console.log("List Component ngOnDestroy called!");
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

        console.log("Index : " + index);

        this.todos.splice(index, 1);
    }
}
