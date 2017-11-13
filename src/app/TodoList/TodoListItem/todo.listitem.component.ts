import { Component, Output, Input } from '@angular/core';

@Component({
    selector: 'todo-list-item',
    templateUrl: 'todo.listitem.component.html',
    styleUrls: ['todo.listitem.component.scss']
})
export class TodoListItemComponent {
    @Input() todos: {title: string, description: string, createdAt: Date}[];
}
